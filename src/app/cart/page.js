"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart,increaseQty,decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Cart is empty.{" "}
          <Link href="/" className="text-blue-600 underline">
            Shop now
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div className="flex items-center gap-2">
  <button
    onClick={() => decreaseQty(item.id)}
    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
  >
    −
  </button>
  <span>{item.qty}</span>
  <button
    onClick={() => increaseQty(item.id)}
    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
  >
    +
  </button>
</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            Total: ₹{total}
          </div>

<Link
href="/cart/checkout"
className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
>
Proceed to Checkout
</Link>
        </div>
      )}
    </div>
  );
}
