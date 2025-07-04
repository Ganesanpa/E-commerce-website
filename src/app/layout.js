import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import HeaderBar from "@/components/HeaderBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My E-commerce",
  description: "Product listing frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <CartProvider>
          <HeaderBar />
          <main className="p-4 max-w-7xl mx-auto">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
