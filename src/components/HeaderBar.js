"use client";
import { Menu } from "antd";
import Link from "next/link";

export default function HeaderBar() {
  return (
    <div className="bg-white shadow px-6 py-3 mb-4">
      <Menu
        mode="horizontal"
        items={[
          {
            key: "home",
            label: <Link href="/">Home</Link>,
          },
          {
            key: "cart",
            label: <Link href="/cart">Cart</Link>,
          },
        ]}
      />
    </div>
  );
}
