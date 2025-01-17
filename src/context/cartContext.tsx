"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // One image
  currency: string;
}

interface CartItem extends Product {
  quantity: number; // Track quantity of each product in the cart
}

interface CartContextType {
  cartItems: CartItem[];
  articleCount: number;
  totalCost: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // method : calc. total number of articles
  const articleCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // method : calc. the total cost of items in the cart
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // method : add product to the cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // increment quantity if product already exists in cart
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Otherwise, add a new item
      return [...prev, { ...product, quantity }];
    });
  };

  // method : remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // remove items with zero quantity
    );
  };

  // Provide context data
  const value: CartContextType = {
    cartItems,
    articleCount,
    totalCost,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
