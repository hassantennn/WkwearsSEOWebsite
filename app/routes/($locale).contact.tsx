import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from 'react-router';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Contact'}];
};

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

export default function ContactPage() {
  useLoaderData<typeof loader>();

  return (
    <div className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="w-full max-w-4xl border border-gray-200 p-12 rounded-md bg-white shadow-md">
        <h1 className="text-3xl font-bold uppercase text-center mb-6">Contact Us</h1>
        <p className="text-base text-gray-600 text-center mb-10">
          Send us a message and we’ll get back to you as quickly as possible.
        </p>

        <form className="space-y-8 max-w-2xl mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700 after:content-['*'] after:text-red-500"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="mt-2 w-full p-5 text-lg bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700 after:content-['*'] after:text-red-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full p-5 text-lg bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+92 123 4567890"
              className="mt-2 w-full p-5 text-lg bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-base font-medium text-gray-700 after:content-['*'] after:text-red-500"
            >
              What’s on your mind?
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Type your message here..."
              className="mt-2 w-full p-5 text-lg bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
