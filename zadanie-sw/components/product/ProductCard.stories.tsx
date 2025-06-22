import { ProductCard } from './ProductCard';

export default {
  title: 'Product/ProductCard',
  component: ProductCard,
  argTypes: {
    rating: { control: { type: 'range', min: 0, max: 100 } },
  },
};

// Historia dla typowego produktu
export const Default = {
  args:{
    name:"Keyboard",
    description:"This keyboard lorem ipsum This keyboard lorem ipsumThis ipsumThis keyboard lorem ipsum",
    image:"https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png",
    rating:100, // 85% -> 4.25 gwiazdki
  },
};
