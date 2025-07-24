import {useState} from 'react';
import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {getPaginationVariables} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductItem} from '~/components/ProductItem';

export const meta: MetaFunction<typeof loader> = () => {
  return [{title: `Hydrogen | Products`}];
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
async function loadCriticalData({context, request}: LoaderFunctionArgs) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const [{products}] = await Promise.all([
    storefront.query(CATALOG_QUERY, {
      variables: {...paginationVariables},
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);
  return {products};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  return {};
}

export default function Collection() {
  const {products} = useLoaderData<typeof loader>();
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('featured');

  const sortedNodes = [...products.nodes].sort((a, b) => {
    const aPrice = parseFloat(a.priceRange.minVariantPrice.amount);
    const bPrice = parseFloat(b.priceRange.minVariantPrice.amount);
    if (sortOption === 'price-asc') return aPrice - bPrice;
    if (sortOption === 'price-desc') return bPrice - aPrice;
    return 0;
  });

  let filteredNodes = sortedNodes;
  if (activeFilter === 'New Arrivals') {
    filteredNodes = sortedNodes.slice(0, 8);
  } else if (activeFilter === 'Sale') {
    filteredNodes = sortedNodes.slice(-8);
  }

  const connection = {...products, nodes: filteredNodes};

  return (
    <section className="collection-page w-full">
      <div className="relative h-[25vh] flex flex-col items-center justify-center bg-[#1a1a1a] text-center px-4">
        <h1
          className="text-5xl md:text-7xl font-bold drop-shadow-xl"
          style={{
            color: '#d4af37',
            fontSize: '3rem',
            fontFamily: "'Great Vibes', cursive",
            lineHeight: 1.1,
          }}
        >
          All Products
        </h1>
      </div>

      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {['All', 'New Arrivals', 'Sale'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md border transition ${
                  activeFilter === filter
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-gray-100 text-black hover:bg-gray-200 border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div>
            <select
              className="border border-gray-300 rounded px-3 py-2 text-black"
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

      <div id="products" className="container mx-auto px-4 py-10">
        <PaginatedResourceSection
          connection={connection}
          resourcesClassName="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {({node: product, index}) => (
            <ProductItem
              key={product.id}
              product={product}
              loading={index < 8 ? 'eager' : undefined}
            />
          )}
        </PaginatedResourceSection>
      </div>
    </section>
  );
}

const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
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
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/product
const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${COLLECTION_ITEM_FRAGMENT}
` as const;
