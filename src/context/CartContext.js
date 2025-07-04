"use client";
import toast from "react-hot-toast";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const addToCart = (product) => {
  const exists = cart.find((item) => item.id === product.id);
  if (exists) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
    toast.success("Added to cart");
  } else {
    setCart((prev) => [...prev, { ...product, qty: 1 }]);
    toast.success("Added to cart");
  }
};


  const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
  toast.error("Removed from cart");
};



  const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    
  );
  toast.success("Updated quantity");

};

const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0)
  );
  toast.success("Updated quantity");

};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,increaseQty,decreaseQty }}>
      {children}
    </CartContext.Provider>
  );

  
}

export const useCart = () => useContext(CartContext);
