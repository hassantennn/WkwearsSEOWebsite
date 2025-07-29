import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';
import {motion} from 'framer-motion';

export const meta: MetaFunction = () => {
  return [{ title: 'Hydrogen | Contact' }];
};

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function ContactPage() {
  useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      {/* Decorative outer frame */}
      <div className="p-1 rounded-3xl bg-gradient-to-r from-gray-200 via-white to-gray-200">
        {/* Actual card */}
        <motion.div
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10 border border-gray-200 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-bold uppercase text-center text-gray-900 mb-2 tracking-wide">
            Contact Us
          </h1>
          <p className="text-sm text-center text-gray-600 mb-8 leading-relaxed tracking-wide">
            Send us a message and we’ll get back to you as quickly as possible.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide after:content-['*'] after:ml-1 after:text-red-500"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-5 py-4 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:shadow-lg transition tracking-wide"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide after:content-['*'] after:ml-1 after:text-red-500"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-5 py-4 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:shadow-lg transition tracking-wide"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+92 123 4567890"
                className="w-full px-5 py-4 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:shadow-lg transition tracking-wide"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1 tracking-wide after:content-['*'] after:ml-1 after:text-red-500"
              >
                What’s on your mind?
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Type your message here..."
                className="w-full px-5 py-4 text-base border border-gray-300 rounded-lg bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 focus:shadow-lg transition tracking-wide"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 text-base font-semibold bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-md hover:scale-[1.01] transition tracking-wide"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
