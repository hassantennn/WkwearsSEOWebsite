// app/routes/($locale).contact.tsx
import type { LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData, type MetaFunction } from 'react-router';
import { motion, Variants } from 'framer-motion';
import { useInView } from '~/lib/useInView';

export const meta: MetaFunction = () => [{ title: 'Hydrogen | Contact' }];

export async function loader(args: LoaderFunctionArgs) {
  return {};
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ContactPage() {
  useLoaderData<typeof loader>();

  // formRef now typed for a <form> element
  const { ref: formRef, isVisible: formVisible } = useInView<HTMLFormElement>();
  const { ref: infoRef, isVisible: infoVisible } = useInView<HTMLDivElement>();

  return (
    <div
      className="min-h-screen bg-[#f5e9d7] flex items-center justify-center p-6 mb-10"
      style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.125rem' }}
    >
      {/* Card wrapper at 80% width */}
      <motion.div
        className="w-4/5 max-w-screen-lg relative bg-white rounded-3xl border border-[#D3C0B0]/30 p-12 md:p-16 shadow-2xl overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Sheen overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Stable heading */}
        <motion.h2
          className="relative z-10 text-3xl md:text-5xl font-bold text-center text-[#4b3621] uppercase tracking-wide mb-3"
          initial="hidden"
          animate="show"
          variants={headingVariants}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="relative z-10 text-center text-gray-600 mb-10"
          variants={itemVariants}
        >
          Send us a message and we&apos;ll get back to you shortly.
        </motion.p>

        {/* Form */}
        <motion.form
          ref={formRef}
          className="space-y-8 relative z-10"
          variants={itemVariants}
        >
          {['name', 'email', 'phone', 'message'].map((field) => {
            const isTextarea = field === 'message';
            return (
              <motion.div
                key={field}
                className="w-full"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <label
                  htmlFor={field}
                  className="block text-base font-semibold text-[#C8B9A8] mb-2 uppercase"
                >
                  {field === 'name'
                    ? 'Name *'
                    : field === 'email'
                    ? 'Email *'
                    : field === 'phone'
                    ? 'Phone Number'
                    : 'What’s on your mind? *'}
                </label>
                {isTextarea ? (
                  <textarea
                    id={field}
                    rows={5}
                    placeholder="Type your message here..."
                    className="block w-full h-40 px-5 py-4 bg-white border-2 border-[#C8B9A8]/50 rounded-lg focus:outline-none focus:border-[#C8B9A8] transition resize-none"
                  />
                ) : (
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={
                      field === 'name'
                        ? 'Your full name'
                        : field === 'email'
                        ? 'you@example.com'
                        : '+92 123 4567890'
                    }
                    className="block w-full h-14 px-5 bg-white border-2 border-[#C8B9A8]/50 rounded-lg focus:outline-none focus:border-[#C8B9A8] transition"
                  />
                )}
              </motion.div>
            );
          })}

          {/* Submit button */}
          <motion.button
            type="submit"
            className="block w-full h-14 bg-gradient-to-r from-[#C8B9A8] via-[#E6DACE] to-[#C8B9A8] text-white font-semibold rounded-lg transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Info panel */}
        <motion.div
          ref={infoRef}
          className="mt-12 pt-6 border-t border-[#D3C0B0]/30 text-center relative z-10"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-[#C8B9A8] mb-2">
            Get in touch
          </h3>
          <p className="text-gray-700 mb-2">
            📞{' '}
            <a href="tel:+921234567890" className="hover:underline">
              +92 123 4567890
            </a>
            <br />
            ✉️{' '}
            <a href="mailto:info@wkwears.com" className="hover:underline">
              info@wkwears.com
            </a>
            <br />
            📍 123 Fashion Avenue, Lahore, Pakistan
          </p>
          <p className="mt-2 text-sm text-gray-500">
            We&apos;re here Monday&ndash;Saturday, 10 am&ndash;8 pm.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
