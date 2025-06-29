import { FC } from "react";
import { Rating } from "../ui/Rating";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface ProductCardProps {
  imageurl: string;
  name: string;
  rating: number;
  description: string;
  active: boolean;
  promotion: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  imageurl,
  name,
  rating,
  description,
  active,
  promotion,
}) => {
  return (
    <Card className="flex flex-col w-72 h-100 rounded-lg overflow-hidden shadow-none">
      {active ? (
        promotion ? (
          <div className="relative">
            <img
              src={imageurl}
              alt={name}
              className="w-full sm:h-42.5 object-cover"
            />
            <div className="absolute top-6.5 left-0 bg-[#F9A52B] text-white sm:w-18.75 sm:h-6 flex items-center justify-center">
              Promo
            </div>
          </div>
        ) : (
          <img
            src={imageurl}
            alt={name}
            className="w-full sm:h-42.5 object-cover "
          />
        )
      ) : promotion ? (
        <div className="relative">
          <img
            src={imageurl}
            alt={name}
            className="w-full sm:h-42.5 object-cover grayscale opacity-50"
          />
            <div className="absolute top-6.5 left-0 bg-[#F9A52B] text-white sm:w-18.75 sm:h-6 flex items-center justify-center">
              Promo
            </div>
        </div>
      ) : (
        <img
          src={imageurl}
          alt={name}
          className="w-full sm:h-42.5 object-cover grayscale opacity-50"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-lg text-[#1A1B1D] mb-1.75 leading-4.5">{name}</p>
        <p className="text-[#9194A5] flex-grow">{description}</p>
        <Rating rating={rating} />
        <div className="pt-4.5 flex justify-between items-center mt-auto">
          {active ? (
            <Button
              size="card"
              className="bg-[#4460F7] text-white border-0 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-400 mb-2"
              ariaLabel="Show details"
            >
              Show details
            </Button>
          ) : (
            <Button
              size="card"
              className="bg-[#9194A5] text-white border-0 mb-2"
              ariaLabel="Unavailable"
            >
              Unavailable
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
