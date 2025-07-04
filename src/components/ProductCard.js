import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-green-600 font-bold">₹{product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
