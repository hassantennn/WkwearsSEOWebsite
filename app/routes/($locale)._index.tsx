import { type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { Await, useLoaderData, type MetaFunction, Link } from 'react-router';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import type { RecommendedProductsQuery } from 'storefrontapi.generated';

export const meta: MetaFunction = () => {
  return [{ title: 'Hydrogen | Home' }];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  return deferredData;
}

function loadDeferredData({ context }: LoaderFunctionArgs) {
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
    <div className="w-full max-w-none m-0 p-0 overflow-x-hidden">
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
    <section className="w-full h-screen relative overflow-hidden m-0 p-0">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
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
    <div className="recommended-products px-4 sm:px-8 py-14 bg-white">
      <div className="text-center max-w-7xl mx-auto mb-10">
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
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 px-4 sm:px-0 max-w-7xl mx-auto">
                {response?.products.nodes.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.handle}`}
                    className="flex-shrink-0 w-[300px] block group transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-white rounded-2xl shadow-md group-hover:shadow-xl overflow-hidden h-[420px]">
                      <img
                        src={product.featuredImage?.url}
                        alt={product.featuredImage?.altText ?? 'Product Image'}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </Link>
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
  query RecommendedProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 20, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
