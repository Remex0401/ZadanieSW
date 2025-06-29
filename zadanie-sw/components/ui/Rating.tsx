import { FC } from "react";

/* SVG STARS USED FROM https://heroicons.com/ */
const StarDefinitions = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      {/* Empty star */}
      <symbol id="star-empty" viewBox="0 0 19 18">
        <path
          fill="transparent"
          stroke="#B1B5C9"
          strokeWidth="1"
          strokeLinejoin="round"
          paintOrder="stroke"
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z"
        />
      </symbol>
      <symbol id="star-full" viewBox="0 0 19 18">
        <path
          fill="orange"
          stroke="#F9A52B"
          strokeWidth="1"
          strokeLinejoin="round"
          paintOrder="stroke"
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z"
        />
      </symbol>
      <symbol id="star-half" viewBox="0 0 19 18">
        <use href="#star-full" />
        <path
          fill="white"
          d="M9.5 0v14.25l5.584 2.936-1.066-6.218 4.517-4.404-6.243-.907L9.5 0z"
        />
        <path
          stroke="#B1B5C9"
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
  <svg aria-hidden="true" focusable="false" className="w-4 h-4 pt-1 pr-0.25">
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
      <div className="flex items-center space-x-2 pl-0.25 ">
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
