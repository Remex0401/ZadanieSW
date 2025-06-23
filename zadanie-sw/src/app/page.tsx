import './globals.css';
import Navbar from '../../components/layout/Navbar';
import { fetchProducts } from '../../lib/api';
import { ProductCard } from '../../components/product/ProductCard';
import { ProductList } from '../../components/product/ProductList';


export default async function Page() {
  const products = await fetchProducts();

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 sm:pt-32 px-4 sm:px-0 mx-auto max-w-screen-xl">
        {(!products || products.length === 0) ? (
          <p className="text-center text-gray-500">Could not load products.</p>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  )
}