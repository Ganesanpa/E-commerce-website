"use client";

import Link from "next/link";

export default function HeaderBar() {
  return (
    <div className="flex justify-between items-center p-4">
  <h1 className="text-xl font-bold">🛍 MyShop</h1>
  <div className="space-x-4 hidden md:flex">
    <Link href="/">Home</Link>
    <Link href="/cart">Cart</Link>
    <Link href="/orders">Orders</Link>
  </div>

 
  <div className="md:hidden">
    <button onClick={toggleMobileMenu}>☰</button>
  </div>
</div>

  );
}
