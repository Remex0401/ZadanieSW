import { FC } from 'react';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ProductCardProps {
  imageurl: string;
  name: string;
  rating: number;
  description: string;
  active: boolean;
  promotion: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ imageurl, name, rating, description, active, promotion}) => {
  return (
    <Card className="flex flex-col">
      {active ? (
        promotion ? (
          <div className="relative">
            <img src={imageurl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="absolute top-10 left-0 bg-orange-400 text-white px-4 py-1 p-5">Promo</div>
          </div>
        ) : (
          <img src={imageurl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
        )
      ) : (
        promotion ? (
          <div className="relative">
            <img src={imageurl} alt={name} className="w-full h-48 object-cover rounded-t-lg grayscale opacity-50" />
            <div className="absolute top-10 left-0 bg-orange-300 text-white px-4 py-1 p-5">Promo</div>
          </div>
        ) : (
          <img src={imageurl} alt={name} className="w-full h-48 object-cover rounded-t-lg grayscale opacity-50" />
        )
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <Rating rating={rating} />
        <p className="text-sm text-gray-600 my-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <Button size="card" className="bg-blue-500 text-white border-0" ariaLabel="Show details">
            Show details
          </Button>
        </div>
      </div>
    </Card>
  );
};