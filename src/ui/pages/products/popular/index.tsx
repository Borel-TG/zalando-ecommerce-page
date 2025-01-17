import React from "react";
import ProductCarousel from "@/ui/components/carousel";
import ProductCard from "@/ui/components/product/card";
import { popularProducts } from "../data";

export const PopularProducts: React.FC = () => {
  return (
    <div className="py-10">
      <div className="container mx-3 md:mx-10 mb-4">
        <h3 className="text-2xl font-bold mb-1">Nous vous recommandons</h3>
        <p className="text-2xl">Recommandations pour vous</p>
      </div>
      <ProductCarousel>
        {popularProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            currency={product.currency}
          />
        ))}
      </ProductCarousel>
    </div>
  );
};
