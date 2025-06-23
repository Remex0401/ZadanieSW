'use client';
import { FC, useState, useEffect} from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../lib/api';
import { Navbar } from '../layout/Navbar';

interface ProductListProps {
    products: Product[];
    filters: {active: boolean, promo: boolean};
    search: string;
}
const items_per_page = 8;

export const ProductList: FC<ProductListProps> = ({ products, filters, search }) => {
    const [currentPage, setCurrentPage] = useState(1);    
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    
    const filteredProducts = products.filter(product  => {
        if (filters.active && !product.active) return false;
        if (filters.promo && !product.promotion) return false; 
        return true;
    })

    const searchedProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredProducts.length / items_per_page);
    const startIndex = (currentPage - 1) * items_per_page;
    const endIndex = startIndex + items_per_page;
    const currentProducts = searchedProducts.slice(startIndex, endIndex);



    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-15 xl:mt-10 xl:p-0">
            {currentProducts.map((product) => (
            <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                imageurl={product.imageUrl}
                rating={product.rating}
                active={product.active}
                promotion={product.promotion}
            />

            ))}
        </div>

        {isClient && totalPages > 1 && (
            <nav aria-label='Pagination' className='mt-10 flex justify-center'>
                <ul className='flex gap-2'>
                    <li>
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 disabled:text-gray-400">
                            First
                        </button>
                    </li>
                    {Array.from({length: totalPages}, (_, index) => (
                        <li key={index}>
                            <button className=' text-black px-4 py-2 rounded-md pb-5 font-bold disabled:text-blue-500'
                                    disabled={currentPage === index + 1}
                                    onClick={() => setCurrentPage(index + 1)}>
                                    {index + 1}
                            </button>
                        </li>
                    ))}
                    <li> 
                        <button className="px-4 py-2 pb-5 disabled:text-gray-400" 
                                 disabled={currentPage === totalPages}
                                 onClick={() => setCurrentPage(totalPages)}>
                                Last 
                        </button>
                    </li>
                </ul>
            </nav>
        )}
      </div>
    );  
};