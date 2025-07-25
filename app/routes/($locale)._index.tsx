import { type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData, type MetaFunction, Link } from 'react-router';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
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
      <BannerCarousel />
      <ReviewSection />
      <GridShowcase />
      <BrandStatement />
      <CategoryShowcase />
    </div>
  );
}


function BannerCarousel() {
  const images = [
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-3.png?v=1753231620',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-2.png?v=1753231621',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed_1ecf8b5e-7812-4640-aed0-e384d50e5e94.png?v=1753231622',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/Vihaan_Kumar_photographs_your_most_special_day_with_style_and_finesse.-4-2.png?v=1753231623',
    'https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed-2.png?v=1752944229',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <section
      className="relative w-full m-0 overflow-hidden"
      style={{minHeight: '90vh'}}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-16 right-1 -translate-x-1/2">
        <Link
          to="/collections/all"
          className="px-12 py-6 text-white rounded-full shadow-lg bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] hover:opacity-90"
        >
          Explore Collection
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
      city: 'Lahore, PK',
      image: 'https://placehold.co/80x80.png?text=AP',
      review:
        'Absolutely in love with the stitching and detail. It fits like a dream and the fabric feels premium!',
    },
    {
      name: 'Fatima Khan',
      title: 'Loyal Customer',
      city: 'Karachi, PK',
      image: '',
      review:
        'WKwears never disappoints. Classy, modest, and stylish — every piece is a gem.',
    },
    {
      name: 'Sarah Nawaaz',
      title: 'First Time Buyer',
      city: 'Islamabad, PK',
      image: 'https://placehold.co/80x80.png?text=SN',
      review:
        'Received so many compliments. Fast delivery, luxurious feel — definitely shopping again!',
    },
  ];

  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative w-full bg-gradient-to-b from-[#f5e9d7] to-[#e7d8c7] px-8 pt-[16rem] pb-[32rem] ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEwIDEwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiUyM2VhZDljNiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik0wIDBMMTAgMTBNMTAgMEwwIDEwIi8+PC9zdmc+')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M50 0C65 20 80 20 95 50C80 80 65 80 50 100C35 80 20 80 5 50C20 20 35 20 50 0Z" fill="#d4af37" />
      </svg>

      {/* Inner content */}
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-[0.2em] leading-tight uppercase font-['Great_Vibes'] gold-gradient-text">
              Our Clients Speak
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl italic font-['Great_Vibes']">
              Words from the women who wear WK with pride, elegance, and grace.
            </p>
          </div>

          <div className="overflow-x-auto px-2 mt-20">
            <motion.div
              className="flex justify-center gap-6 sm:gap-8 md:gap-10 snap-x snap-mandatory"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center group bg-[#f8e8e4] border border-[#d4af37]/40 rounded-[12px] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  <div className="flex justify-center mb-5">
                    {review.image ? (
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border border-[#d4af37] shadow"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-50 border border-[#d4af37] text-[#d4af37] font-semibold shadow">
                        {review.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 text-center">
                    <p className="text-xl tracking-widest uppercase font-['Playfair_Display'] text-gray-800">
                      {review.name}
                    </p>
                    <p className="text-sm italic text-[#bfae80] font-['Playfair_Display']">{review.title}</p>
                  </div>

                  <div className="relative quote-mark mb-6">
                    <p className="relative text-gray-700 text-lg leading-relaxed italic text-center">
                      {review.review}
                    </p>
                  </div>

                  <div className="flex justify-center gap-1 hover:animate-shimmer">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className="w-6 h-6"
                        fill={`url(#gold-gradient-${index}-${starIdx})`}
                        viewBox="0 0 20 20"
                      >
                        <defs>
                          <linearGradient id={`gold-gradient-${index}-${starIdx}`} x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#d4af37" />
                            <stop offset="100%" stopColor="#f5e18a" />
                          </linearGradient>
                        </defs>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.036 3.19a1 1 0 00.95.69h3.356c.969 0 1.371 1.24.588 1.81l-2.716 1.974a1 1 0 00-.364 1.118l1.036 3.19c.3.921-.755 1.688-1.538 1.118L10 13.347l-2.716 1.974c-.783.57-1.838-.197-1.538-1.118l1.036-3.19a1 1 0 00-.364-1.118L3.702 8.617c-.783-.57-.38-1.81.588-1.81h3.356a1 1 0 00.95-.69l1.036-3.19z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 italic font-['Playfair_Display'] mt-2">{review.city}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
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
      className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {categories.map((category, index) => (
        <div
          key={index}
          style={{backgroundImage: `url(${category.image})`}}
          className="relative group rounded-xl overflow-hidden aspect-[3/4] bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/60" />
          <div className="absolute bottom-4 left-4 drop-shadow-lg">
            <p className="text-sm uppercase tracking-wide font-['Playfair_Display'] gold-gradient-text">
              {category.title.split(' ')[0]}
            </p>
            <p className="text-lg sm:text-xl font-semibold tracking-wider font-['Playfair_Display'] text-white">
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
      className={`w-full m-0 flex justify-center pt-[16rem] pb-[32rem] bg-gradient-to-b from-[#fefefe] to-[#fbfaf7] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="text-center max-w-6xl px-4">
        <h1 className="text-[10rem] sm:text-[13rem] font-['Cinzel'] gold-gradient-text mb-8 leading-none">
          WK WEARS
        </h1>
        <h2 className="text-[4rem] sm:text-[5rem] font-['Alex_Brush'] text-[#bfae80] mb-8">
          Elegance in Every Stitch
        </h2>
        <p className="text-[2rem] sm:text-[2.5rem] text-gray-700 leading-snug font-['Playfair_Display']">
          Crafting identity through elegance and grace. <br />
          Our collection redefines modest fashion with timeless silhouettes and refined detailing.
        </p>
        <svg
          className="mx-auto mt-12 w-32 h-auto"
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 C40 0 60 20 100 10 S160 0 200 10"
            stroke="#d4af37"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}

function CategoryShowcase() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`w-full m-0 py-0 bg-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Left side - Heritage Grace */}
        <div className="w-full flex flex-col items-center text-center pb-12">
          <img
            src="https://cdn.shopify.com/s/files/1/0704/7908/5731/files/bluedress.webp?v=1753221040"
            alt="Women"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover mb-4 rounded-xl"
          />
          <div>
            <h3 className="text-xl font-semibold uppercase mb-2 text-gray-900 tracking-wider font-['Playfair_Display'] text-[#d4af37]">
              Heritage Grace
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Embrace our signature womenswear steeped in tradition and tailored for modern elegance. From flowing silhouettes to artisanal details, each piece tells a story of grace, strength, and refined femininity.
            </p>
          </div>
        </div>

        {/* Right side - Noble Form */}
        <div className="w-full flex flex-col items-center text-center pb-12">
          <img
            src="https://cdn.shopify.com/s/files/1/0704/7908/5731/files/white_dress.png?v=1753222198"
            alt="Men"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover mb-4 rounded-xl"
          />
          <div>
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