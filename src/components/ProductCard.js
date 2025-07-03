import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-xs hover:scale-105 transition-transform cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-teal-600 font-bold mt-1">₹{product.price}</p>
      </div>
    </Link>
  );
}
