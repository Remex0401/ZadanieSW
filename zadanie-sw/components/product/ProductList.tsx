"use client";
import { useRouter,useSearchParams } from "next/navigation";
import { FC, useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../lib/api";

import ReactPaginate from "react-paginate";

interface ProductListProps {
  products: Product[];
  filters: { active: boolean; promo: boolean, search: string };

  currentPage: number;
}
const items_per_page = 8;

export const ProductList: FC<ProductListProps> = ({
  products,
  filters,
  // search,
  currentPage = 1,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("active") === "true";
  const promo = searchParams.get("promo") === "true";
  const search = searchParams.get("search") || "";

  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [filters, search]);

  const filteredProducts = products.filter((product) => {
    if (filters.active && !product.active) return false;
    if (filters.promo && !product.promotion) return false;
    return true;
  });

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(searchedProducts.length / items_per_page));
  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const currentProducts = searchedProducts.slice(startIndex, endIndex);

 useEffect(() => {
  if (isClient && currentPage > totalPages) {
    router.push(`/page/${totalPages}?active=${filters.active}&promo=${filters.promo}&search=${filters.search}`);
  }
}, [isClient, currentPage, totalPages, router, filters]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-300 gap-4">
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
        <nav aria-label="Pagination" className="mt-3.75 flex justify-center w-72 h-4 mx-auto text-sm mb-6">
          <ul className="flex">
            <li>
              <button
                onClick={() => router.push(`/page/1?active=${filters.active}&promo=${filters.promo}&search=${search}`)}
                disabled={currentPage === 1}
                className=" disabled:text-gray-400"
              >
                First
              </button>
            </li>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={3}
              onPageChange={({ selected }) => router.push(`/page/${selected + 1}?active=${filters.active}&promo=${filters.promo}&search=${search}`)}
              forcePage={currentPage - 1}
              breakLabel="..."
              previousLabel=" "
              nextLabel=" "
              containerClassName="flex px-6.25"
              pageLinkClassName="px-2 text-black rounded-md pb-5 font-bold disabled:text-blue-500"
              activeLinkClassName="text-blue-500"
              disabledLinkClassName="text-gray-400"
              breakLinkClassName="px-2 text-black rounded-md pb-5 font-bold disabled:text-blue-500"
            />
            <li>
              <button
                className=" disabled:text-gray-400"
                disabled={currentPage === totalPages}
                onClick={() => router.push(`/page/${totalPages}?active=${filters.active}&promo=${filters.promo}&search=${search}`)}>
                Last
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
    
  );
};
