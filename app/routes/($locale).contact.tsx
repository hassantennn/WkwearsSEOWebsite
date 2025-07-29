import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {motion} from 'framer-motion';
import {useInView} from '~/lib/useInView';

export const meta: MetaFunction = () => {
  return [{ title: 'Hydrogen | Contact' }];
};

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function ContactPage() {
  useLoaderData<typeof loader>();

  // in‑view refs for scroll animations
  const {ref: heroRef, isVisible: heroVisible} = useInView<HTMLDivElement>();
  const {ref: leftRef, isVisible: leftVisible} = useInView<HTMLDivElement>();
  const {ref: rightRef, isVisible: rightVisible} = useInView<HTMLDivElement>();
  const {ref: mapRef, isVisible: mapVisible} = useInView<HTMLDivElement>();
  const {ref: iconsRef, isVisible: iconsVisible} = useInView<HTMLDivElement>();

  return (
    <div className="w-full overflow-x-hidden m-0 p-0 bg-gradient-to-b from-[#fefefe] to-[#f8f8f5] font-sans contact-bg">

      {/* Hero */}
      <motion.section
        ref={heroRef}
        initial={{opacity: 0}}
        animate={heroVisible ? {opacity: 1} : {}}
        transition={{duration: 1}}
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0704/7908/5731/files/contact-hero.jpg?v=1753226835')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <motion.h1
          initial={{opacity: 0, y: -20}}
          animate={heroVisible ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 0.2}}
          className="relative text-5xl sm:text-8xl font-['Great_Vibes'] tracking-wider gold-gradient-text drop-shadow-lg"
        >
          Connect With Us
        </motion.h1>
      </motion.section>

      {/* Info + Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f8f8f5] to-[#f5e9d7] contact-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <motion.div
            ref={leftRef}
            initial={{opacity: 0, y: 20}}
            animate={leftVisible ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8}}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-['Cinzel'] gold-gradient-text border-l-4 border-[#d4af37] pl-4">We're here to help</h2>
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

          {/* Right Form */}
          <motion.div
            ref={rightRef}
            initial={{opacity: 0, y: 20}}
            animate={rightVisible ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.1}}
          >
            <form className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl ring-1 ring-[#d4af37]/30 space-y-6">
              <h3 className="text-3xl font-['Playfair_Display'] mb-8 text-center tracking-wider">
                Send us a Message
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-4 border border-[#d4af37]/30 bg-white/70 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/70 px-2 rounded-full"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-4 border border-[#d4af37]/30 bg-white/70 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/70 px-2 rounded-full"
                  >
                    Email
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <input
                    id="phone"
                    type="tel"
                    placeholder=" "
                    className="peer w-full rounded-full px-6 py-4 border border-[#d4af37]/30 bg-white/70 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/70 px-2 rounded-full"
                  >
                    Phone
                  </label>
                </div>
                <div className="relative sm:col-span-2">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    className="peer w-full rounded-3xl px-6 py-4 border border-[#d4af37]/30 bg-white/70 backdrop-blur-md placeholder-transparent focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-6 top-4 text-gray-500 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#d4af37] bg-white/70 px-2 rounded-full"
                  >
                    Message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white rounded-full shadow-lg bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] hover:opacity-90 hover:animate-shimmer"
              >
                Send
              </button>
            </form>
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
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-700 hover:text-[#d4af37] transition-colors hover:animate-shimmer"
        >
          {/* Instagram SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.75-.88a.88.88 0 1 1-1.75 0a.88.88 0 0 1 1.75 0Z" />
          </svg>
        </a>
        <a
          href="https://wa.me/921234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-gray-700 hover:text-[#d4af37] transition-colors hover:animate-shimmer"
        >
          {/* WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12.04 2c5.5 0 9.96 4.45 9.96 9.96c0 5.5-4.46 9.95-9.96 9.95a9.9 9.9 0 0 1-5.02-1.36L2 22l1.47-5.36A9.9 9.9 0 0 1 2.09 12A9.96 9.96 0 0 1 12.04 2Zm0 1.5a8.46 8.46 0 0 0-8.45 8.45c0 1.59.43 3.1 1.25 4.45l.2.34l-.87 3.17l3.3-.86l.32.19a8.48 8.48 0 0 0 4.25 1.17a8.46 8.46 0 0 0 8.45-8.46a8.46 8.46 0 0 0-8.45-8.45Zm4.65 5.32c.1.18.1.4.02.59c-.2.45-.55 1.25-1.05 1.77c-.15.16-.4.36-.62.57c-.3.26-.66.57-1.1.58c-.29 0-.57-.14-.83-.26c-.23-.1-.5-.21-.78-.34a6.54 6.54 0 0 1-2.37-2.04a7.27 7.27 0 0 1-1.45-3.02c-.04-.2-.02-.38.07-.55c.14-.28.3-.57.46-.84c.13-.23.28-.52.47-.68c.13-.11.3-.18.47-.18c.12 0 .24.04.35.08c.33.12.6.28.85.45c.2.14.4.3.53.53c.1.17.1.38.02.56c-.09.2-.2.4-.31.58l-.1.17c-.1.16-.2.33-.27.5c-.07.18-.05.35.02.53c.14.36.39.7.69 1.02a5.9 5.9 0 0 0 1.91 1.3c.19.1.37.15.55.05c.2-.11.41-.24.6-.37c.17-.11.34-.23.52-.32c.18-.09.37-.09.54.04c.2.15.39.32.55.52c.17.21.33.43.44.68Z" />
          </svg>
        </a>
        <a
          href="mailto:info@wkwears.com"
          aria-label="Email"
          className="text-gray-700 hover:text-[#d4af37] transition-colors hover:animate-shimmer"
        >
          {/* Email SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75A2.25 2.25 0 0 1 3.75 4.5Zm0 1.5A.75.75 0 0 0 3 6.75v.38l9 5.25l9-5.25v-.38a.75.75 0 0 0-.75-.75H3.75Zm16.5 3.02l-7.8 4.55a.75.75 0 0 1-.75 0L3 9.02v8.23c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V9.02Z" />
          </svg>
        </a>
      </motion.section>
    </div>
  );
}
