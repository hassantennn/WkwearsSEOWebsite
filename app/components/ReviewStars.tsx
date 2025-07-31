import {useState} from 'react';
import {motion} from 'framer-motion';

interface ReviewStarsProps {
  initialRating?: number;
  /**
   * Total number of reviews to display alongside the rating. When omitted, the
   * review count link is hidden.
   */
  reviewCount?: number;
}

export function ReviewStars({
  initialRating = 0,
  reviewCount,
}: ReviewStarsProps) {
  const [rating, setRating] = useState(Math.round(initialRating));
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
      {stars.map((star) => (
        <motion.span
          key={star}
          className={`cursor-pointer text-2xl ${
            (hover || rating) >= star ? 'text-[#FFD700]' : 'text-gray-300'
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(star)}
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.9}}
        >
          ★
        </motion.span>
      ))}
      {typeof reviewCount === 'number' && (
        <a href="#reviews" className="underline ml-2 text-sm">
          Read {reviewCount} Review{reviewCount === 1 ? '' : 's'}
        </a>
      )}
    </div>
  );
}
