import { FC } from "react";

/* SVG STARS USED FROM https://heroicons.com/ */
const StarDefinitions = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      {/* Empty star */}
      <symbol id="star-empty">
        <path
          fill="transparent"
          stroke="grey"
          strokeWidth="1"
          strokeLinejoin="round"
          paintOrder="stroke"
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z"
        />
      </symbol>
      <symbol id="star-full">
        <path
          fill="orange"
          stroke="grey"
          strokeWidth="1"
          strokeLinejoin="round"
          paintOrder="stroke"
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z"
        />
      </symbol>
      <symbol id="star-half">
        <use href="#star-full" />
        <path
          fill="white"
          d="M9.5 0v14.25l5.584 2.936-1.066-6.218 4.517-4.404-6.243-.907L9.5 0z"
        />
        <path
          stroke="grey"
          strokeWidth="1"
          strokeLinejoin="round"
          paintOrder="stroke"
          fill="transparent"
          d="M9.5 0v14.25l5.584 2.936-1.066-6.218 4.517-4.404-6.243-.907L9.5 0z"
        />
      </symbol>
    </defs>
  </svg>
);

/* Render single star */
const Star: FC<{ type: "full" | "half" | "empty" }> = ({ type }) => (
  <svg aria-hidden="true" focusable="false" className="w-5 h-5">
    <use href={`#star-${type}`} />
  </svg>
);

interface RatingProps {
  rating: number;
}

export const Rating: FC<RatingProps> = ({ rating }) => {
  const ratingInStars = (rating / 100) * 5;

  return (
    <>
      {/* Render stars definitions */}
      <StarDefinitions />
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((starNumber) => {
          let starType: "full" | "half" | "empty" = "empty";
          if (ratingInStars >= starNumber) {
            starType = "full";
          } else if (ratingInStars > starNumber - 1) {
            starType = "half";
          }
          return <Star key={starNumber} type={starType} />;
        })}
      </div>
    </>
  );
};
