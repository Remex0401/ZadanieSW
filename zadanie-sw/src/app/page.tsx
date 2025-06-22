import './globals.css';
import Navbar from '../../components/layout/Navbar';
import { fetchProducts } from '../../lib/api';
import { ProductCard } from '../../components/product/ProductCard';


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-15 xl:mt-10 xl:p-0">
            {products.map((product) => (
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
        )}
      </main>
    </div>
  )
}