import { fetchProducts } from "../../../../lib/api";
import PageFiltered from "../../../../components/layout/PageFiltered";
import { notFound } from "next/navigation";

interface PageProps {
    params: {page: string};
}

export default async function Page({params}: PageProps) {
    const page = parseInt(params.page);
    // if (isNaN(page) || page < 1 ) notFound();

    const products = await fetchProducts();

    return <PageFiltered products={products}  currentPage={page}/>;
}
