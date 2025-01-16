import React from "react";
import BrandName from "@/ui/components/brandName";
import NavLinks from "./barLink/list";
import BarAction from "./barActionWrapper";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenuCartList from "@/ui/components/menuCartItem/list";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-0 flex-row py-3">
      {/* nav link list */}
      <div>
        <NavLinks links={topNavLinks} />
      </div>
      {/* brand */}
      <div className="flex items-center">
        <BrandName />
      </div>
      {/* actions button */}
      <div className="flex gap-3 items-end">
        <BarAction icon={<UserOutlined style={{ fontSize: 25 }} />} />
        <BarAction icon={<HeartOutlined style={{ fontSize: 25 }} />} />
        <BarAction icon={<ShoppingCartOutlined style={{ fontSize: 25 }} />}>
          <MenuCartList
            list={[
              {
                productName: "shoe",
                price: 100,
                currency: "$",
                image: "string",
              },
            ]}
          />
        </BarAction>
      </div>
    </div>
  );
}

export default Navbar;

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
