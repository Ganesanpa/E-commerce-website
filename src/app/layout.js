import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My E-commerce",
  description: "Product listing frontend",
};

export default function RootLayout({ children }) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
         <ThemeWrapper>
        <Toaster position="top-right" />
        <AuthProvider>
        <CartProvider>
          
           
          <Navbar/>
          
          <main className="p-4 max-w-7xl mx-auto">{children}</main>
      
        </CartProvider>
        </AuthProvider>
       </ThemeWrapper>
      </body>
    </html>
  );
}
