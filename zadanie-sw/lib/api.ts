export async function fetchProducts(id: string) {
    const res = await fetch(
      `https://685596751789e182b37bc02b.mockapi.io/products/products/${id}`
    );
    return res.json();
  }
