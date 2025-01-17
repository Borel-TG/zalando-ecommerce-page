import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  currency: string;
}

export default function ProductCard({
  image,
  name,
  price,
  currency,
}: ProductCardProps) {
  return (
    <div className="bg-white space-y-1 mx-1 w-64 flex-shrink-0">
      <Image
        src={image}
        alt={name}
        className="h-[300px] w-full object-cover  mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {
          "La desciption du produit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      </p>
      <p className="text-sm text-black">
        {price} {currency}
      </p>
    </div>
  );
}
