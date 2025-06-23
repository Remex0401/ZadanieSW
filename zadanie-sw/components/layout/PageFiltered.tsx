'use client';
import '../../src/app/globals.css';
import { useState } from 'react';
import Navbar from './Navbar';
import { ProductList } from '../product/ProductList';
import { Product } from '../../lib/api';

interface PageFilteredProps {
  products: Product[];
}

export default function PageFiltered({ products }: PageFilteredProps) {
  const [filters, setFilters] = useState({active: false, promo: false});
  const [search, setSearch] = useState('');

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleFilterChange = (filterName: string, value: boolean ) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar filters={filters} onFilterChange={handleFilterChange} search={search} onSearchChange={handleSearchChange} />

      {/* Main content */}
      <main className="pt-24 sm:pt-32 px-4 sm:px-0 mx-auto max-w-screen-xl">
        {(!products || products.length === 0) ? (
          <p className="text-center text-gray-500">Could not load products.</p>
        ) : (
          <ProductList products={products} filters={filters} search={search} />
        )}
      </main>
    </div>
  )
}