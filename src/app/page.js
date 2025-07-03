"use client";
import { useState } from "react";
import productsData from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import ProductSkeleton from "@/components/ProductSkeleton";
import products from "@/data/products";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const loading=false;

  let filtered = [...productsData];

  
  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  
  if (sortOrder === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">🛍️ Products</h1>
      <FilterBar
        onSortChange={(val) => setSortOrder(val)}
        onCategoryChange={(val) => setCategory(val)}
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
    </main>
  
  );
}
