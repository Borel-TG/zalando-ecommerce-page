import React from "react";
import MenuCartItem, { CartItemProps } from "./index";

interface Props {
  list: CartItemProps[];
  onRemove: (id: string) => void;
}
function MenuCartList({ list, onRemove }: Props) {
  if (list.length > 0) {
    return (
      <div className="p-4">
        {list.map((item, i) => (
          <MenuCartItem
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            currency={item.currency}
            quantity={item.quantity}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="p-4 space-y-2 text-center">
      <h5 className="font-bold">Votre panier est vide !</h5>
      <p>Remplissez-le avec la nouvelle collection</p>
    </div>
  );
}

export default MenuCartList;
