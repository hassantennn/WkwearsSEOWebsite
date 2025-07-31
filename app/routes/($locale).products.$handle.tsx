import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useState} from 'react';
import {useLoaderData, type MetaFunction} from 'react-router';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductGallery} from '~/components/ProductGallery';
import {ProductForm} from '~/components/ProductForm';
import {SizeGuideModal} from '~/components/SizeGuideModal';
import {ReviewStars} from '~/components/ReviewStars';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';
import type {ProductFragment} from 'storefrontapi.generated';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [
    {title: `Hydrogen | ${data?.product.title ?? ''}`},
    {
      rel: 'canonical',
      href: `/products/${data?.product.handle}`,
    },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({
  context,
  params,
  request,
}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  // The API handle might be localized, so redirect to the localized handle
  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {
    product,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context, params}: LoaderFunctionArgs) {
  // Put any API calls that is not critical to be available on first page render
  // For example: product reviews, product recommendations, social feeds.

  return {};
}

function StickyCartBar({
  selectedVariant,
}: {
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
}) {
  const {open} = useAside();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const size = selectedVariant?.selectedOptions?.find(
    (o) => o.name.toLowerCase() === 'size',
  )?.value;

  const disabled =
    !selectedVariant || quantity < 1 || !selectedVariant.availableForSale;
  const buttonText = !selectedVariant ? 'Select size' : 'Add to cart';

  function handleClick() {
    setAdded(true);
    open('cart');
    setTimeout(() => setAdded(false), 800);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-4 flex items-center gap-4 text-base">
      <div className="flex items-center gap-4 flex-1">
        <span>{size ? `Size: ${size}` : 'Size: -'}</span>
        <div className="flex items-center border rounded">
          <button
            type="button"
            className="px-3"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </button>
          <span className="px-3 w-6 text-center">{quantity}</span>
          <button
            type="button"
            className="px-3"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <AddToCartButton
        disabled={disabled}
        onClick={handleClick}
        className={`flex-1 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 transition-colors duration-300 ${
          added ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'
        }`}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity,
                  selectedVariant,
                },
              ]
            : []
        }
      >
        {added ? (
          '✓ Added'
        ) : (
          <>
            <span role="img" aria-label="cart">
              🛒
            </span>{' '}
            Add to Cart
          </>
        )}
      </AddToCartButton>
    </div>
  );
}

export default function Product() {
  const {product} = useLoaderData<typeof loader>();
  const {open} = useAside();

  // Optimistically selects a variant with given available variant information
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  // Sets the search param to the selected variant without navigation
  // only when no search params are set in the url
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  // Get the product options array
  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  const {title, descriptionHtml} = product;

  return (
    <motion.div
      className="product product-page-bg rounded-lg shadow-lg animate-fade-in-scale"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
    >
      <ProductGallery
        images={product.images?.nodes || []}
        selectedVariantImage={selectedVariant?.image}
      />
      <div className="product-main">
        <div className="space-y-2">
          <h1 className="tracking-wide">{title}</h1>
          <ReviewStars initialRating={4.8} reviewCount={27} />
        </div>
        <div className="mt-4 space-y-4">
          <ProductPrice
            price={selectedVariant?.price}
            compareAtPrice={selectedVariant?.compareAtPrice}
          />
          <ProductForm
            productOptions={productOptions}
            selectedVariant={selectedVariant}
          />
          <AddToCartButton
            disabled={!selectedVariant?.availableForSale}
            onClick={() => open('cart')}
            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-full transition-colors"
            lines={
              selectedVariant
                ? [
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: 1,
                      selectedVariant,
                    },
                  ]
                : []
            }
          >
            <span role="img" aria-label="cart">
              🛒
            </span>{' '}
            Add to Cart
          </AddToCartButton>
          <p className="mt-2">
            <a href="#size-modal" className="underline text-sm">
              View Size Guide
            </a>
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <details open className="border-t pt-4">
            <summary className="font-bold flex items-center gap-2 cursor-pointer">
              <span role="img" aria-label="Description">
                📄
              </span>{' '}
              Description
            </summary>
            <div
              className="mt-2 text-sm leading-relaxed tracking-wide"
              dangerouslySetInnerHTML={{__html: descriptionHtml}}
            />
          </details>
          <details className="border-t pt-4">
            <summary className="font-bold flex items-center gap-2 cursor-pointer">
              <span role="img" aria-label="Care">
                🧼
              </span>{' '}
              Care instructions
            </summary>
            <p className="mt-2 text-sm leading-relaxed tracking-wide">
              Hand wash cold, lay flat to dry. Do not bleach.
            </p>
          </details>
          <details className="border-t pt-4">
            <summary className="font-bold flex items-center gap-2 cursor-pointer">
              <span role="img" aria-label="Shipping">
                🚚
              </span>{' '}
              Shipping info
            </summary>
            <p className="mt-2 text-sm leading-relaxed tracking-wide">
              Ships worldwide in 3-5 business days.
            </p>
          </details>
        </div>
      </div>
      <StickyCartBar selectedVariant={selectedVariant} />
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
      <SizeGuideModal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org","@type":"Product","name":"Limelight Yarn-Dyed Embroidered Shirt","image":["url1.jpg","url2.jpg"],"description":"Elevate your look with handcrafted pearl-studded yarn-dyed cotton…","sku":"LIME123","brand":{"@type":"Brand","name":"Limelight"},"offers":{"@type":"Offer","price":"24.99","priceCurrency":"USD","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"324"}}',
        }}
      />
    </motion.div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    images(first: 10) {
      nodes {
        url
        altText
      }
    }
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;
