import {useState} from 'react';
import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {getPaginationVariables, Analytics} from '@shopify/hydrogen';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {ProductItem} from '~/components/ProductItem';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `Hydrogen | ${data?.collection.title ?? ''} Collection`}];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({
  context,
  params,
  request,
}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    throw redirect('/collections');
  }

  const [{collection}] = await Promise.all([
    storefront.query(COLLECTION_QUERY, {
      variables: {handle, ...paginationVariables},
    }),
  ]);

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: collection});

  return {collection};
}

function loadDeferredData({context}: LoaderFunctionArgs) {
  return {};
}

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('featured');

  const products = collection.products?.nodes || [];
  const sortedProducts = [...products].sort((a, b) => {
    const aPrice = parseFloat(a.priceRange.minVariantPrice.amount);
    const bPrice = parseFloat(b.priceRange.minVariantPrice.amount);

    if (sortOption === 'price-asc') return aPrice - bPrice;
    if (sortOption === 'price-desc') return bPrice - aPrice;
    return 0;
  });

  let filteredProducts = sortedProducts;
  if (activeFilter === 'New Arrivals') {
    filteredProducts = sortedProducts.slice(0, 8);
  } else if (activeFilter === 'Sale') {
    filteredProducts = sortedProducts.slice(-8);
  }

  return (
    <section className="collection-page w-full font-['Playfair_Display'] bg-gradient-to-b from-[#f5f0e6] to-[#e0d5c3]">
      {/* Hero Section */}
      <div className="relative h-[25vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#e7d8c7] to-[#f8e8e4] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-['Cinzel'] dark-brown-text drop-shadow-lg">

          {collection.title}
        </h1>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-gradient-to-b from-[#f5f0e6] to-[#e0d5c3] py-6 border-b border-[#d9c5b2]">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {['All', 'New Arrivals', 'Sale'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full border transition font-medium ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] text-white border-transparent'
                    : 'bg-white/80 text-gray-800 hover:bg-white border border-[#d9c5b2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div>
            <select
              className="px-4 py-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] text-white font-medium shadow-md focus:outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div id="products" className="container mx-auto px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              loading={index < 8 ? 'eager' : undefined}
            />
          ))}
        </div>
      </div>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </section>
  );
}

// GraphQL Fragments
const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    images(first: 2) {
      nodes {
        id
        altText
        url
        width
        height
      }
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
` as const;

// GraphQL Query
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
` as const;
