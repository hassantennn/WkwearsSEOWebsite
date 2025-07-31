import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading = 'lazy',
}: {
  product: CollectionItemFragment | ProductItemFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);

  const images = product.images?.nodes;
  const primaryImage = images?.[0] ?? product.featuredImage;
  const hoverImage = images?.[1];

  return (
    <div className="product-item group bg-[#f9f5ee] rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <Link
        to={variantUrl}
        prefetch="intent"
        className="block no-underline hover:no-underline"
      >
        {primaryImage && (
          <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
            <Image
              alt={primaryImage.altText || product.title}
              aspectRatio="1/1"
              data={primaryImage}
              loading={loading}
              sizes="(min-width: 45em) 400px, 100vw"
              className={`block object-cover w-full h-full transition-all duration-300 ${
                hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
              }`}
            />
            {hoverImage && (
              <Image
                alt={hoverImage.altText || product.title}
                aspectRatio="1/1"
                data={hoverImage}
                loading={loading}
                sizes="(min-width: 45em) 400px, 100vw"
                className="block object-cover w-full h-full absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
            )}
          </div>
        )}
      </Link>

      <div className="p-4">
        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h4>
        <p className="mt-1 text-sm font-semibold text-gray-900">
          <Money data={product.priceRange.minVariantPrice} />
        </p>
      </div>
    </div>
  );
}
