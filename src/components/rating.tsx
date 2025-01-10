"use client";

import { useState } from "react";
import RatingStarIcon from "@/components/icons/ratingstar";

interface RatingProps extends React.SVGProps<SVGSVGElement> {
  rating?: number; // initial rating
  interactive?: boolean; // if true, clicking stars changes the rating
  onRatingChange?: (newRating: number) => void; // renamed callback to avoid conflicts
}

const TOTAL_STARS = 5;

export default function Rating(props: RatingProps) {
  const {
    rating = 0,
    interactive,
    onRatingChange, // renamed prop
    className, // optional custom class
    ...rest
  } = props;

  const [currentRating, setCurrentRating] = useState<number>(rating);
  const stars = Array.from({ length: TOTAL_STARS }, (_, i) => i + 1);

  const handleStarClick = (value: number) => {
    if (!interactive) return;
    setCurrentRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className={`flex items-center gap-1`}>
      {stars.map((starValue) => (
        <button
          key={starValue}
          onClick={() => handleStarClick(starValue)}
          disabled={!interactive}
        >
          <RatingStarIcon
            className={className}
            {...rest}
            checked={starValue <= currentRating}
          />
        </button>
      ))}
    </div>
  );
}
