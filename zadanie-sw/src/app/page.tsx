import "./globals.css";
import { fetchProducts } from "../../lib/api";
import PageFiltered from "../../components/layout/PageFiltered";

export default async function Page() {
  const products = await fetchProducts();

  return <PageFiltered products={products} currentPage={1} />;
}
