import React from 'react';
import './globals.css';
import Navbar from '../../components/layout/Navbar';
import { Card } from '../../components/ui/Card';
import { fetchProducts } from '../../lib/api';

export default async function Page() {
  const products = await fetchProducts('1');
  console.log(products);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="bg-gray-100 min-h-screen">
      
      </main>

    </div>
  )
}