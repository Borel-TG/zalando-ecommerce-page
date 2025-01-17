import React from "react";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";

export interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  onRemove?: (id: string) => void;
}

function MenuCartItem(props: CartItemProps) {
  const { id, image, name, price, currency, quantity, onRemove } = props;
  return (
    <div className="flex flex-row gap-3">
      <div>
        <div className="border border-black">
          <Image src={image} alt="cart-img" width={70} height={100}></Image>
        </div>
      </div>
      <div className="flex-grow pt-10">
        <span className="text-md block">{name}</span>
        <span className="font-bold block">{`${price} ${currency}`}</span>
        <span className="font-bold block">{`Qte: ${quantity}`}</span>
      </div>
      {/* remove */}
      <div
        onClick={onRemove ? () => onRemove(id) : undefined}
        className="absolute p-2 right-3 top-3 hover:bg-gray-200 text-gray-500"
      >
        <CloseOutlined />
      </div>
    </div>
  );
}

export default MenuCartItem;
