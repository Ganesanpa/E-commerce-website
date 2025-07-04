import allProducts from "@/data/products";

export async function fetchProducts({ page = 1, limit = 8, category = "all", search = "", sort = "default" }) {
  await new Promise((r) => setTimeout(r, 500)); 

  let filtered = [...allProducts];

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "lowToHigh") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  return {
    products: paginated,
    hasMore: end < filtered.length
  };
}
