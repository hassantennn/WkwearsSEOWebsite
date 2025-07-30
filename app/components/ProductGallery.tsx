import {Image} from '@shopify/hydrogen';
import {useEffect, useState} from 'react';
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const mainImage = gallery[index];

  useEffect(() => {
    const first = gallery[0];
    if (!first) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = first.url;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [gallery]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + gallery.length) % gallery.length);
      } else if (e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % gallery.length);
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, gallery.length]);

  return (
    <div className="product-gallery">
      {mainImage && (
        <Image
          data={mainImage}
          className="gallery-main-image"
          loading="eager"
          width={800}
          height={800}
          sizes="(min-width: 1024px) 600px, (min-width: 640px) 60vw, 100vw"
          loaderOptions={{format: 'webp'}}
          fetchpriority="high"
          onClick={() => setLightboxOpen(true)}
          style={{cursor: 'zoom-in'}}
        />
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
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-prev"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + gallery.length) % gallery.length);
            }}
          >
            &#10094;
          </button>
          <img
            src={gallery[index].url}
            alt={gallery[index].altText || ''}
          />
          <button
            className="lightbox-next"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % gallery.length);
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
