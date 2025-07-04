"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Your cart is empty.</p>
        <Link href="/" className="text-blue-600 underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="space-y-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b pb-2 text-sm"
          >
            <div>
              <p>{item.name}</p>
              <p className="text-gray-500">Qty: {item.qty}</p>
            </div>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}
      </div>

      <div className="text-right mt-4 font-semibold text-lg">
        Total: ₹{total}
      </div>

      <button
        onClick={() => alert("Fake order placed!")}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Place Order
      </button>
    </div>
  );
}
