"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import products from "@/data/products";
import { toast } from "react-hot-toast";
import {useCart} from "@/context/CartContext";
import Link from "next/link";
import Image from 'next/image';
export default function ProductPage({ params }) {
  const { id } = params;
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const found = products.find((p) => p.id.toString() === id);
      if (!found) {
        setProduct(null);
      } else {
        setProduct(found);
      }
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timeout);
  }, [id]);

  const handleAdd = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  if (loading) {
    return (
      <div className="p-4 max-w-4xl mx-auto animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-200 h-80 rounded-lg"></div>
          <div>
            <div className="h-4 w-1/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-20 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return notFound();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          ← Back to products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start bg-white shadow-md rounded-lg p-6">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <div>
          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-600 text-2xl font-semibold mb-4">
            ₹{product.price}
          </p>

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
