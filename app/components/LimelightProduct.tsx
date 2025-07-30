import React from 'react';

export function LimelightProduct() {
  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
      {/* Wishlist Icon */}
      <button
        aria-label="Add to wishlist"
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>

      {/* Product Title */}
      <h2 className="text-xl font-extrabold mb-2">
        Limelight Yarn-Dyed Embroidered Shirt
      </h2>
      {/* Subtitle */}
      <p className="mb-4 text-gray-700">
        Hand-stitched pearl &amp; sequin accents on breathable yarn-dyed cotton.
      </p>

      {/* Add to Cart Button */}
      <button
        className="w-full py-3 font-bold text-white rounded-lg shadow-lg bg-gradient-to-r from-[#d4af37] via-[#f5e18a] to-[#d4af37] hover:opacity-90"
      >
        Add to Cart
      </button>

      {/* Shipping Notes */}
      <div className="mt-4 text-xs text-gray-600 space-y-1">
        <p>Free U.S. shipping on orders over $50</p>
        <p>Easy returns within 30 days</p>
      </div>
    </div>
  );
}
