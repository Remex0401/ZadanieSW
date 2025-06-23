'use client';
import { FC, useState, useEffect} from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../lib/api';

interface ProductListProps {
    products: Product[];
}
const items_per_page = 8;

export const ProductList: FC<ProductListProps> = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / items_per_page);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    
    const startIndex = (currentPage - 1) * items_per_page;
    const endIndex = startIndex + items_per_page;
    const currentProducts = products.slice(startIndex, endIndex);

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
                    {(currentPage === 1) ? (
                    <li> <button className="px-4 py-2 pb-5 text-gray-400" onClick={() => setCurrentPage(1)}> First </button></li>
                    ) : (
                    <li> <button className="px-4 py-2 pb-50 " onClick={() => setCurrentPage(1)}> First </button></li>
                    )}
                    {Array.from({length: totalPages}, (_, index) => (
                        (currentPage === index + 1) ? (
                        <li key={index}>
                            <button className=' text-blue-500 px-4 py-2 rounded-md pb-5 font-bold' onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                            </li>
                        ) : (
                        <li key={index}>
                            <button className='text-black px-4 py-2 rounded-md pb-5 font-bold' onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                            </li>
                        )
                    ))}
                        {(currentPage === totalPages) ? (
                    <li> <button className="px-4 py-2 pb-5 text-gray-400" onClick={() => setCurrentPage(totalPages)}> Last </button></li>
                    ) : (
                    <li> <button className="px-4 py-2 pb-5 " onClick={() => setCurrentPage(totalPages)}> Last </button></li>
                    )}
                </ul>
            </nav>
        )}
      </div>
    );  
};