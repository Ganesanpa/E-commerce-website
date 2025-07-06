"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
   
    setOrders(storedOrders.reverse());
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧾 Order History</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">No previous orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="border p-4 rounded shadow-sm bg-white">
              <div className="mb-2">
                <span className="font-semibold">Order ID:</span> #{order.orderId}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(order.timestamp).toLocaleString()}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Total:</span> ₹{order.total}
              </div>

              <div>
                <span className="font-semibold">Items:</span>
                <ul className="list-disc pl-5">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} × {item.qty} = ₹{item.qty * item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Shopping
        </Link>
      </div>
    </div>
  );
}
