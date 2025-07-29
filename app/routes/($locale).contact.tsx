import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {motion} from 'framer-motion';
import {useInView} from '~/lib/useInView';

export const meta: MetaFunction = () => [
  { title: 'Hydrogen | Contact' }
];

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function ContactPage() {
  useLoaderData<typeof loader>();

  // in‑view refs for scroll animations
  const {ref: rightRef, isVisible: rightVisible} = useInView<HTMLDivElement>();
  const {ref: leftRef, isVisible: leftVisible} = useInView<HTMLDivElement>();
  const {ref: mapRef, isVisible: mapVisible} = useInView<HTMLDivElement>();
  const {ref: iconsRef, isVisible: iconsVisible} = useInView<HTMLDivElement>();

  return (
    <div className="w-full overflow-x-hidden m-0 bg-gradient-to-b from-[#fefefe] to-[#f8f8f5] font-sans contact-bg px-6 sm:px-12">
      {/* Form then Info */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-[#f8f8f5] to-[#f5e9d7]">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Form (now larger and full width) */}
          <motion.div
            ref={rightRef}
            initial={{opacity: 0, y: 20}}
            animate={rightVisible ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.1}}
            className="bg-white/80 backdrop-blur-lg p-16 rounded-3xl shadow-2xl ring-1 ring-[#d4af37]/30"
          >
            <form className="space-y-8">
              <h3 className="text-4xl font-['Playfair_Display'] mb-10 text-center tracking-wider">
                Send us a Message
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-6 border border-[#d4af37]/30 bg-white/80 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/80 px-2 rounded-full"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-6 border border-[#d4af37]/30 bg-white/80 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/80 px-2 rounded-full"
                  >
                    Email
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <input
                    id="phone"
                    type="tel"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-6 border border-[#d4af37]/30 bg-white/80 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/80 px-2 rounded-full"
                  >
                    Phone
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <textarea
                    id="message"
                    rows={6}
                    placeholder=" "
                    className="peer w-full rounded-3xl px-6 py-6 border border-[#d4af37]/30 bg-white/80 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-6 top-4 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/80 px-2 rounded-full"
                  >
                    Message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] hover:opacity-90 hover:animate-shimmer"
              >
                Send
              </button>
            </form>
          </motion.div>

          {/* Info below form */}
          <motion.div
            ref={leftRef}
            initial={{opacity: 0, y: 20}}
            animate={leftVisible ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8}}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-['Cinzel'] gold-gradient-text border-l-4 border-[#d4af37] pl-4">
              We're here to help
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Have a question about our collections, sizing, or a custom order? Reach out
              and our team will respond as soon as possible.
            </p>
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-[#d4af37] font-semibold">Phone:</span>
                <a href="tel:+921234567890" className="ml-2 hover:underline">
                  +92 123 4567890
                </a>
              </p>
              <p>
                <span className="text-[#d4af37] font-semibold">Email:</span>
                <a href="mailto:info@wkwears.com" className="ml-2 hover:underline">
                  info@wkwears.com
                </a>
              </p>
              <p>
                <span className="text-[#d4af37] font-semibold">Address:</span>
                <span className="ml-2">123 Fashion Avenue, Lahore, Pakistan</span>
              </p>
              <p>
                <span className="text-[#d4af37] font-semibold">Hours:</span>
                <span className="ml-2">Mon–Sat: 10am – 8pm</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <motion.section
        ref={mapRef}
        initial={{opacity: 0, y: 20}}
        animate={mapVisible ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.8}}
        className="h-[400px] w-full"
      >
        <iframe
          title="WK Wears Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217770.68256179918!2d74.1149412!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483f5c266c3%3A0x45a3f8d1e1e6d2f2!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1710100000000"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        />
      </motion.section>

      {/* Social Icons */}
      <motion.section
        ref={iconsRef}
        initial={{opacity: 0, y: 20}}
        animate={iconsVisible ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.8, delay: 0.1}}
        className="py-10 flex justify-center gap-8 bg-gradient-to-b from-[#f5e9d7] to-[#e7d8c7]"
      >
        {/* icons here */}
      </motion.section>
    </div>
  );
}
