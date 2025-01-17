"use client";
import { useState } from "react";
import productData from "./data";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ProductGallery from "@/ui/widgets/productGallery";
import ProductImage from "@/ui/components/product/image";
import { StaticImageData } from "next/image";
import Accordion from "@/ui/components/accordion";
// context
import { useCart } from "@/context/cartContext";
import AppButton from "@/ui/components/appButton";

const product = productData[0];

export default function ProductPage() {
  // main product view
  const [mainImage, setMainImage] = useState<string | null | StaticImageData>(
    null
  );
  const [selectedVariant, setselectedVariant] = useState(
    product.variants[0].id
  );

  // cart-hook
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen my-7 mx-0 md:mx-10">
      {/* Main Content : max-w-7xl */}
      <div className="">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-32">
          {/* Image Gallery */}
          <div className="flex-2">
            <ProductGallery
              images={
                product.variants
                  .find((x) => x.id == selectedVariant)
                  ?.images.map((x) => x.url) || []
              }
              mainView={mainImage}
              tags={product.tags}
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4 px-3 md:px-0">
            <div className="cursor-pointer space-y-0">
              <p className="text-3xl  text-gray-800 hover:underline">
                {product.seller}
              </p>
              <h1 className="mt-1 font-bold text-3xl text-gray-900">
                {product.name}
              </h1>
            </div>
            {/* Price */}
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold text-gray-900">
                {product.price} {product.currency}
              </p>
              <p className="text-sm text-gray-500">
                {product.includedTax ? "TVA incluses" : "TVA non incluses"}
              </p>
            </div>
            {/* variant selector */}
            <p className="">
              <span className="">{"Couleur : "}</span>
              <span className="mr-1 font-bold">
                {product.variants.find((x) => x.id == selectedVariant)?.color ||
                  ""}
              </span>
            </p>

            <div className="flex flex-row gap-4 w-fit">
              {product.variants.map((item, i) => (
                <ProductImage
                  key={i}
                  width={70}
                  height={100}
                  image={item.images[0].url}
                  alt={`pdt-variant-${item.images[0].alt}`}
                  selected={selectedVariant == item.id}
                  onMouseEnter={() => {
                    setMainImage(item.images[0].url);
                  }}
                  onMouseLeave={() => {
                    setMainImage(null);
                  }}
                  onClick={() => {
                    setselectedVariant(item.id);
                  }}
                />
              ))}
            </div>
            {/* Actions */}
            <div className="space-y-4">
              {/* Add to Cart Button */}
              <AppButton
                label="Add to Cart"
                icon={<ShoppingCartOutlined />}
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.variants[0].images[0].url.src,
                    currency: product.currency,
                  })
                }
                className="w-full bg-black border border-black text-white hover:bg-gray-400"
              />

              {/* Add to Wishlist Button */}
              <AppButton
                label="Add to Wishlist"
                icon={<HeartOutlined />}
                onClick={() => console.log("Added to Wishlist")}
                className="w-full border border-gray-300 hover:bg-gray-50"
              />
            </div>

            {/* Product Details */}

            <Accordion title="Product Details">
              <>
                <p className="text-gray-600">{product.description}</p>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
