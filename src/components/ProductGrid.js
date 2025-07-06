"use client";

import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductGrid({products=[],loading=false}){
    return(
        <div className="grid grid-cols-1 sm:grid-cold-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
            ?Array.from({length}).map((_,i)=><ProductSkeleton key={i} />)
        :products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
        </div>
    )
}