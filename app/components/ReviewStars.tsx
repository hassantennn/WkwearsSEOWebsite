import {useState} from 'react';
import {motion} from 'framer-motion';

interface ReviewStarsProps {
  initialRating?: number;
}

export function ReviewStars({initialRating = 0}: ReviewStarsProps) {
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
      <a href="#reviews" className="underline ml-2 text-sm">
        Read 27 Reviews
      </a>
    </div>
  );
}
