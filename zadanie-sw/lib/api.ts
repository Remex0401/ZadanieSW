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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/products`;

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
