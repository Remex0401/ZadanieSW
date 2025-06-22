export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  active: boolean;
  promotion: boolean;
}



export async function fetchProducts(): Promise<Product[]> {
  const apiUrl = "https://685596751789e182b37bc02b.mockapi.io/products/products";
  
  try {
    const reponse = await fetch(apiUrl);
    if (!reponse.ok) {
      throw new Error("Failed to fetch products");
    }

    const products: Product[] = await reponse.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
