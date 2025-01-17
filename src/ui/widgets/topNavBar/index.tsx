"use client";
import React, { memo } from "react";
import BrandName from "@/ui/components/brandName";
import NavLinks from "./barLink/list";
import BarAction from "./barActionWrapper";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenuCartList from "@/ui/components/menuCartItem/list";
// context
import { useCart } from "@/context/cartContext";
import { Badge } from "antd";
import AppButton from "@/ui/components/appButton";

function Navbar() {
  //
  console.log("navbar");
  // cart hook
  const { articleCount = 8, cartItems, removeFromCart } = useCart();

  return (
    <div className="w-full flex justify-between items-center p-0 flex-row py-3">
      {/* nav link list */}
      <div className="hidden md:block">
        <NavLinks links={topNavLinks} />
      </div>
      {/* brand */}
      <div className="flex items-center">
        <BrandName />
      </div>
      {/* actions button */}
      <div className="flex gap-3 items-end">
        <BarAction icon={<UserOutlined className="text-[25px]" />} />
        <BarAction icon={<HeartOutlined className="text-[25px]" />} />
        <BarAction
          icon={
            <Badge color="red" count={articleCount}>
              <ShoppingCartOutlined className="text-[25px]" />
            </Badge>
          }
        >
          <>
            <MenuCartList
              list={cartItems}
              onRemove={(id: string) => removeFromCart(id)}
            />
            <div className="p-4 text-center space-y-2 bg-gray-200">
              <p>Vous ne savez pas par où commencer ?</p>
              <AppButton
                label="Voir les nouveautés"
                icon={<ShoppingCartOutlined />}
                onClick={undefined}
                className="w-full bg-black border border-black text-white hover:bg-gray-400"
              />
            </div>
          </>
        </BarAction>
      </div>
    </div>
  );
}

export default memo(Navbar);

// navlinks
const topNavLinks = [
  {
    id: 1,
    label: "Femme",
    url: "#",
    active: true,
  },
  {
    id: 2,
    label: "Homme",
    url: "#",
    active: false,
  },
  {
    id: 2,
    label: "Enfants",
    url: "#",
    active: false,
  },
];
