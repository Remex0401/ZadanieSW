"use client";
import "../../src/app/globals.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { ProductList } from "../product/ProductList";
import { Product } from "../../lib/api";

interface PageFilteredProps {
  products: Product[];
}

export default function PageFiltered({ products }: PageFilteredProps) {
  const [filters, setFilters] = useState({ active: false, promo: false });
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleFilterChange = (filterName: string, value: boolean) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar
        filters={filters}
        onFilterChange={handleFilterChange}
        search={search}
        onSearchChange={handleSearchChange}
      />

      {/* Main content */}
      <main className="flex flex-col sm:flex-row sm:justify-center items-center pt-54.5 sm:pt-33.5 flex mx-auto max-w-screen-xl xl:w-300 ">
        {!products || products.length === 0 ? (
          <p className="text-center leading-4">Could not load products.</p>
        ) : (
          <ProductList products={products} filters={filters} search={search} />
        )}
      </main>
    </div>
  );
}
