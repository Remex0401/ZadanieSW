"use client";
import "../../src/app/globals.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ProductList } from "../product/ProductList";
import { Product } from "../../lib/api";
import { useSearchParams, useRouter } from "next/navigation";

interface PageFilteredProps {
  products: Product[];
  currentPage?: number;
}

export default function PageFiltered({ products, currentPage = 1 }: PageFilteredProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState({
    active: false,
    promo: false,
    search: "",
  });

  // Synchronizuj stan z URL
  useEffect(() => {
    setFilters({
      active: searchParams.get("active") === "true",
      promo: searchParams.get("promo") === "true",
      search: searchParams.get("search") || "",
    });
  }, [searchParams]);

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    if (filters.active) params.set("active", "true"); else params.delete("active");
    if (filters.promo) params.set("promo", "true"); else params.delete("promo");
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleFilterChange = (filterName: string, value: boolean) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredProducts = products.filter((product) => {
    if (filters.active && !product.active) return false;
    if (filters.promo && !product.promotion) return false;
    return true;
  });

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(filters.search.toLowerCase()),
  );

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar
        filters={filters}
        onFilterChange={handleFilterChange}
        search={filters.search}
        onSearchChange={handleSearchChange}
      />

      {/* Main content */}
      <main className="flex flex-col sm:flex-row sm:justify-center items-center pt-54.5 sm:pt-33.5 flex mx-auto max-w-screen-xl xl:w-300 ">
        {!products || products.length === 0 ? (
          <p className="text-center leading-4">Could not load products.</p>
        ) : (
          <ProductList products={searchedProducts} filters={filters} currentPage={currentPage} />
        )}
      </main>
    </div>
  );
}
