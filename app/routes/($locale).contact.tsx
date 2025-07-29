import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction, Link} from 'react-router';
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

  const {ref: infoRef, isVisible: infoVisible} = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f8f8f5] flex items-center justify-center p-6 font-sans">
      {/* Card wrapper */}
      <motion.div
        className="w-full max-w-4xl bg-white rounded-3xl border border-[#D3C0B0]/30 p-12 md:p-16 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#C8B9A8] uppercase tracking-wide mb-3">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10 text-base md:text-lg">
          Send us a message and we'll get back to you shortly.
        </p>

        <form className="space-y-8 w-full">
          {/* Name */}
          <div className="w-full">
            <label htmlFor="name" className="block w-full text-sm md:text-base font-semibold text-[#C8B9A8] mb-2 uppercase">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="block w-full h-14 px-5 bg-white border-2 border-[#C8B9A8]/25 rounded-lg transition focus:outline-none focus:border-[#C8B9A8]"
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label htmlFor="email" className="block w-full text-sm md:text-base font-semibold text-[#C8B9A8] mb-2 uppercase">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="block w-full h-14 px-5 bg-white border-2 border-[#C8B9A8]/25 rounded-lg transition focus:outline-none focus:border-[#C8B9A8]"
            />
          </div>

          {/* Phone */}
          <div className="w-full">
            <label htmlFor="phone" className="block w-full text-sm md:text-base font-semibold text-[#C8B9A8] mb-2 uppercase">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+92 123 4567890"
              className="block w-full h-14 px-5 bg-white border-2 border-[#C8B9A8]/25 rounded-lg transition focus:outline-none focus:border-[#C8B9A8]"
            />
          </div>

          {/* Message */}
          <div className="w-full">
            <label htmlFor="message" className="block w-full text-sm md:text-base font-semibold text-[#C8B9A8] mb-2 uppercase">
              What's on your mind? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Type your message here..."
              className="block w-full h-40 px-5 py-4 bg-white border-2 border-[#C8B9A8]/25 rounded-lg transition focus:outline-none focus:border-[#C8B9A8] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="block w-full h-14 bg-gradient-to-r from-[#C8B9A8] via-[#E6DACE] to-[#C8B9A8] text-white font-semibold rounded-lg transition hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={infoRef}
        initial={{opacity: 0, y: 20}}
        animate={infoVisible ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.5, ease: 'easeOut', delay: 0.2}}
        className="w-full max-w-4xl mt-12 mx-auto text-center space-y-4 animate-fade-in-scale"
      >
        <h3 className="text-2xl font-semibold gold-gradient-text">Get in touch</h3>
        <p className="text-gray-700">
          Phone:{' '}
          <a href="tel:+921234567890" className="underline hover:no-underline">
            +92 123 4567890
          </a>
        </p>
        <p className="text-gray-700">
          Email:{' '}
          <a href="mailto:info@wkwears.com" className="underline hover:no-underline">
            info@wkwears.com
          </a>
        </p>
        <p className="text-gray-700">123 Fashion Avenue, Lahore, Pakistan</p>
      </motion.div>
    </div>
  );
}
