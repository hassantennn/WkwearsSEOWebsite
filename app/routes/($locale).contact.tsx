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
    <div className="w-full overflow-x-hidden font-sans bg-gradient-to-b from-[#fefefe] to-[#f8f8f5]">
      <section className="relative flex items-center justify-center h-[60vh]">
        <img
          src="https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed-2.png?v=1752944229"
          alt="Contact"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-6xl sm:text-7xl font-['Great_Vibes'] gold-gradient-text tracking-wider">
          Connect With Us
        </h1>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#f8f8f5] to-[#f5e9d7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-['Cinzel'] gold-gradient-text">We're here to help</h2>
            <p className="text-gray-700 leading-relaxed">
              Have a question about our collections, sizing, or a custom order? Reach out
              and our team will respond as soon as possible.
            </p>
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-[#d4af37] font-semibold">Phone:</span>
                <a href="tel:+921234567890" className="ml-2 hover:underline">+92 123 4567890</a>
              </p>
              <p>
                <span className="text-[#d4af37] font-semibold">Email:</span>
                <a href="mailto:info@wkwears.com" className="ml-2 hover:underline">info@wkwears.com</a>
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
          </div>
          <div>
            <form className="bg-white p-8 rounded-xl shadow-xl space-y-4">
              <h3 className="text-3xl font-['Playfair_Display'] mb-6 text-center">Send us a Message</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+92 123 4567890"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white rounded-md shadow-lg bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[50vh] relative">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1280&q=80"
          alt="Map"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>
    </div>
  );
}
