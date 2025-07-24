import { type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData, type MetaFunction, Link } from 'react-router';
import { useEffect, useState } from 'react';
import {useInView} from '~/lib/useInView';

export const meta: MetaFunction = () => {
  return [{ title: 'Hydrogen | Home' }];
};

export async function loader(args: LoaderFunctionArgs) {
  const deferredData = loadDeferredData(args);
  return deferredData;
}

function loadDeferredData({ context }: LoaderFunctionArgs) {
  return {};
}

export default function Homepage() {
  useLoaderData<typeof loader>();

  return (
    <div className="w-full overflow-x-hidden m-0 p-0 bg-gradient-to-b from-[#fefefe] to-[#f8f8f5] font-sans">
      <MainSection />
      <ReviewSection />
      <GridShowcase />
      <BrandStatement />
      <CategoryShowcase />
    </div>
  );
}

function MainSection() {
  const images = [
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-4-2.png?v=1753231623',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed_1ecf8b5e-7812-4640-aed0-e384d50e5e94.png?v=1753231622',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-2.png?v=1753231621',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-3.png?v=1753231620',
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
    <section className="w-full min-h-screen relative overflow-hidden m-0 p-0">
      {/* Background Slideshow */}
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

      {/* Overlay Button */}
      <div className="absolute bottom-20 right-20 z-10">
        <Link
          to="/collections/all"
          className="mainsection-btn px-10 py-5 text-base font-semibold tracking-wide border border-white bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 rounded-xl backdrop-blur-lg"

        >
          Discover the Collection
        </Link>

      </div>
    </section>
  );
}


function ReviewSection() {
  const reviews = [
    {
      name: 'Ayxsha Parveen',
      title: 'Verified Buyer',
      review:
        'Absolutely in love with the stitching and detail. It fits like a dream and the fabric feels premium!',
    },
    {
      name: 'Fatima Khan',
      title: 'Loyal Customer',
      review:
        'WKwears never disappoints. Classy, modest, and stylish — every piece is a gem.',
    },
    {
      name: 'Sarah Nawaaz',
      title: 'First Time Buyer',
      review:
        'Received so many compliments. Fast delivery, luxurious feel — definitely shopping again!',
    },
  ];

  const {ref, isVisible} = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`w-full bg-gradient-to-b from-white via-gray-100 to-white py-60 sm:py-72 px-6 sm:px-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="flex flex-col items-center justify-center text-center mb-20 px-4">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight uppercase font-['Playfair_Display']">
          Our Clients Speak
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl italic">
          Words from the women who wear WK with pride, elegance, and grace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="group relative bg-white/40 backdrop-blur-md border border-white/50 rounded-xl p-10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="mb-5 text-center">
              <p className="text-2xl font-semibold text-gray-800 group-hover:text-[#d4af37] transition-colors duration-300 tracking-wide font-['Playfair_Display']">
                {review.name}
              </p>
              <p className="text-sm text-gray-500 italic tracking-wider">{review.title}</p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic text-center">
              “{review.review}”
            </p>

            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, starIdx) => (
                <svg
                  key={starIdx}
                  className="w-6 h-6 text-[#f5c542] group-hover:text-[#d4af37] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.036 3.19a1 1 0 00.95.69h3.356c.969 0 1.371 1.24.588 1.81l-2.716 1.974a1 1 0 00-.364 1.118l1.036 3.19c.3.921-.755 1.688-1.538 1.118L10 13.347l-2.716 1.974c-.783.57-1.838-.197-1.538-1.118l1.036-3.19a1 1 0 00-.364-1.118L3.702 8.617c-.783-.57-.38-1.81.588-1.81h3.356a1 1 0 00.95-.69l1.036-3.19z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GridShowcase() {
  const categories = [
    {
      title: 'Printed Lawn Collection',
      image: 'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/20250723_0020_Floral_Dress_Elegance_remix_01k0t6ss6qfwnv5e6ydttn40dj.png?v=1753226835',
    },
    {
      title: 'Formal Luxury Ensemble',
      image: 'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/20250723_0019_Elegant_Dress_Display_remix_01k0t6rbhqevw9vshzem85jw1n.png?v=1753226835',
    },
    {
      title: 'Chic Daily Kurta',
      image: 'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/20250723_0024_Stylish_Dress_Showcase_remix_01k0t73039fvmaj325tga6d1df.png?v=1753226835',
    },
    {
      title: 'Signature Unstitched Prints',
      image: 'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/20250723_0022_Elegant_Patterned_Dress_remix_01k0t6ythzfyyb5yrggdnq04ra.png?v=1753226835',
    },
  ];

  const {ref, isVisible} = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-0 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {categories.map((category, index) => (
        <div key={index} className="relative group h-[400px] sm:h-[500px] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
            <p className="text-sm uppercase opacity-80 tracking-wide font-['Playfair_Display']">
              {category.title.split(' ')[0]}
            </p>
            <p className="text-lg sm:text-xl font-semibold tracking-wider font-['Playfair_Display']">
              {category.title.split(' ').slice(1).join(' ')}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

function BrandStatement() {
  const {ref, isVisible} = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`w-full flex justify-center pt-[12rem] pb-[24rem] px-4 bg-gradient-to-b from-[#fefefe] to-[#fbfaf7] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="text-center max-w-6xl">
        <h1 className="text-[8rem] sm:text-[10rem] font-['Playfair_Display'] text-gray-900 mb-16 leading-none">
          WK WEARS
        </h1>
        <p className="text-[3rem] sm:text-[3.5rem] text-gray-700 leading-snug">
          Crafting identity through elegance and grace. <br />
          Our collection redefines modest fashion with timeless silhouettes and refined detailing.
        </p>
      </div>
    </section>
  );
}

function CategoryShowcase() {
  const {ref, isVisible} = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`w-full py-24 bg-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0704/7908/5731/files/bluedress.webp?v=1753221040"
            alt="Women"
            className="w-full aspect-[3/4] object-cover mb-4 rounded-xl"
          />
          <div className="px-4 md:px-8">
            <h3 className="text-xl font-semibold uppercase mb-2 text-gray-900 tracking-wider font-['Playfair_Display'] text-[#d4af37]">
              Heritage Grace
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Embrace our signature womenswear steeped in tradition and tailored for modern elegance. From flowing silhouettes to artisanal details, each piece tells a story of grace, strength, and refined femininity.
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0704/7908/5731/files/white_dress.png?v=1753222198"
            alt="Men"
            className="w-full aspect-[3/4] object-cover mb-4 rounded-xl"
          />
          <div className="px-4 md:px-8">
            <h3 className="text-xl font-semibold uppercase mb-2 text-gray-900 tracking-wider font-['Playfair_Display'] text-[#d4af37]">
              Noble Form
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Discover menswear that redefines everyday sophistication. Thoughtfully designed with structure, comfort, and intention, our garments speak to the man who values presence over pretence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
