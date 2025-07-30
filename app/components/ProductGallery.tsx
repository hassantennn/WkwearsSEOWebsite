import {Image} from '@shopify/hydrogen';
import {useState} from 'react';
import type {ProductVariantFragment, ProductFragment} from 'storefrontapi.generated';

export function ProductGallery({
  images,
  selectedVariantImage,
}: {
  images: Array<{url: string; altText?: string | null}>;
  selectedVariantImage?: ProductVariantFragment['image'];
}) {
  let gallery = images || [];

  // include variant image first if not already present
  if (selectedVariantImage) {
    const variantEntry = {url: selectedVariantImage.url, altText: selectedVariantImage.altText};
    if (!gallery.find((img) => img.url === selectedVariantImage.url)) {
      gallery = [variantEntry, ...gallery];
    } else {
      // ensure variant image is first
      gallery = [variantEntry, ...gallery.filter((img) => img.url !== selectedVariantImage.url)];
    }
  }

  const [index, setIndex] = useState(0);
  const mainImage = gallery[index];

  return (
    <div className="product-gallery">
      {mainImage && (
        <Image data={mainImage} className="gallery-main-image" loading="eager" />
      )}
      <div className="gallery-thumbnails">
        {gallery.map((img, idx) => (
          <button
            key={img.url}
            type="button"
            className={`gallery-thumbnail ${idx === index ? 'active' : ''}`}
            onClick={() => setIndex(idx)}
          >
            <Image data={img} width={60} height={60} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
