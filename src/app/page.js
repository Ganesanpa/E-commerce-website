"use client";

import { useState, useEffect } from "react";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { fetchProducts } from "@/lib/fakeApi";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = async (reset = false) => {
    const targetPage = reset ? 1 : page + 1;
    const isFirstPage = targetPage === 1;

    if (isFirstPage) setInitialLoading(true);
    else setLoadingMore(true);

    const { products: fetched, hasMore } = await fetchProducts({
      page: targetPage,
      limit: 8,
      category,
      search,
      sort
    });

    setProducts((prev) => (isFirstPage ? fetched : [...prev, ...fetched]));
    setPage(targetPage);
    setHasMore(hasMore);

    if (isFirstPage) setInitialLoading(false);
    else setLoadingMore(false);
  };

 
  useEffect(() => {
    loadProducts(true); 
  }, [category, search, sort]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <FilterBar
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initialLoading
          ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

      
        {loadingMore &&
          Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton key={`more-${i}`} />
          ))}
      </div>

      {!initialLoading && hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => loadProducts(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
