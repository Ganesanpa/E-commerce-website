"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";


export default function SuccessPage() {
  const { cart, clearCart } = useCart();
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);
  const orderId = Math.floor(100000 + Math.random() * 900000);
  useEffect(() => {
    setOrderItems(cart);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotal(totalPrice);
    const newOrder = {
      orderId,
      items: cart,
      total: totalPrice,
      timestamp: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existing, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    clearCart();
  }, []);
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Thank You for Your Order!</h1>
      <p className="text-gray-700 mb-2">Your order has been placed successfully.</p>
      <p className="text-gray-500 mb-6">Order ID: <span className="font-semibold">#{orderId}</span></p>
      <h2 className="text-xl font-semibold mb-3">🧾 Order Summary</h2>
      <div className="divide-y divide-gray-200 mb-4">
        {orderItems.map((item) => (
          <div key={item.id} className="py-2 flex justify-between">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <div className="text-right font-bold text-lg mb-6">
        Total: ₹{total}
      </div>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        🛍️ Continue Shopping
      </Link>
    </div>
  );
}
