"use client";
import { useState } from "react";
import productData from "./data";

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ProductGallery from "@/ui/widgets/productGallery";
import ProductImage from "@/ui/components/product/image";
import { StaticImageData } from "next/image";

const product = productData[0];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  // main product view
  const [mainImage, setMainImage] = useState<string | null | StaticImageData>(
    null
  );
  const [selectedVariant, setselectedVariant] = useState(
    product.variants[0].id
  );

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
            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black rounded-md"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full bg-black text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <ShoppingCartOutlined className="w-5 h-5" />
                <span>Add to Bag</span>
              </button>
              <button className="w-full border border-gray-300 px-6 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <HeartOutlined className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>
            {/* Product Details */}
            <div className="border-t pt-6">
              <button
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-medium">Product Details</span>
                {isDetailsOpen ? (
                  <ArrowDownOutlined className="w-5 h-5" />
                ) : (
                  <ArrowUpOutlined className="w-5 h-5" />
                )}
              </button>
              {isDetailsOpen && (
                <div className="mt-4 space-y-4">
                  <p className="text-gray-600">{product.description}</p>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
