import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, type MetaFunction} from 'react-router';
import {Suspense} from 'react';
import type {RecommendedProductsQuery} from 'storefrontapi.generated';
import {useEffect, useState} from 'react';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  return deferredData;
}

function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="home">
      <MainSection />
      <RecommendedProducts products={data.recommendedProducts} />
    </div>
  );
}

function MainSection() {
  const images = [
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed-2.png?v=1752944229',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed_1.png?v=1752944229',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed.png?v=1752944228',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-[90vh] relative overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </section>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <div className="recommended-products px-6 py-14 bg-white">
      <div className="text-center max-w-7xl mx-auto mb-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide uppercase mb-4">
          Timeless Elegance
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          A celebration of refinement and distinction, where fluid silhouettes meet intricate embroidery,
          and every thread speaks to quiet sophistication. These curated pieces transcend fleeting trends,
          embodying a timeless elegance for the modern woman who dresses with purpose.
        </p>
      </div>

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="overflow-x-auto px-4 scrollbar-hide">
              <div className="flex gap-4">
                {response?.products.nodes.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-[300px]"
                  >
                    <div className="h-[400px] w-full overflow-hidden rounded-t-xl">
                      <img
                        src={product.featuredImage?.url}
                        alt={product.featuredImage?.altText ?? product.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-medium tracking-tight text-gray-800 truncate">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 20, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;