import React from "react";
import MenuCartItem from ".";

interface Props {
  list: {
    productName: string;
    price: number;
    currency: string;
    image: string;
  }[];
}
function MenuCartList({ list }: Props) {
  return (
    <div>
      {list.map((item, i) => (
        <MenuCartItem key={i} />
      ))}
    </div>
  );
}

export default MenuCartList;
