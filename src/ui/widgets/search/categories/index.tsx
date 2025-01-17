"use client";
import React, { useState } from "react";
import NavLink from "@/ui/components/navLink";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

function SearchCategories() {
  const [activeSubcategories, setActiveSubcategories] = useState<
    string[] | null
  >(null);

  const [open, setOpen] = useState(false);

  const categoriesList = data.map((category) => ({
    label: category.name,
    subcategories: category.subcategories.flatMap((sub) => sub),
  }));

  return (
    <>
      {/*  WEB VIEW */}
      <div className="group relative hidden md:block">
        {/* Categories Nav Links */}
        <div className="flex flex-row gap-3 h-full py-2">
          {categoriesList.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActiveSubcategories(item.subcategories)}
            >
              <NavLink url="#" label={item.label} />
            </div>
          ))}
        </div>

        {/* Sub-categories Container */}
        <div
          className={`absolute z-20 border-t top-full w-[calc(100vw-30px)] bg-white right-0 -left-10  border-t-gray-300 overflow-hidden h-0  transition-all duration-300 ease-in-out
          group-hover:h-[180px]  group-hover:border-b border-b-black
        `}
        >
          {activeSubcategories && (
            <div className="px-10 p-4 text-white">
              <ul className="flex flex-col gap-2">
                {activeSubcategories.map((subcategory, index) => (
                  <NavLink
                    icon={<ShoppingOutlined />}
                    key={index}
                    url="#"
                    label={subcategory}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="block md:hidden">
        <div
          onClick={() => setOpen(!open)}
          className="border cursor-pointer h-[45px] w-[45px] border-gray-400 p-2 flex justify-center items-center gap-3"
        >
          <MenuOutlined />
        </div>
        <Drawer
          title="Parcourir par catégorie"
          placement="left"
          onClose={() => setOpen(!open)}
          open={open}
        >
          <div className="grid grid-cols-2 gap-4">
            {categoriesList.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer p-2 h-[100px] bg-gradient-to-b from-gray-100 to-yellow-50"
              >
                <NavLink url="#" label={item.label} />
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default SearchCategories;

// Data
const data = [
  {
    name: "Soldes",
    subcategories: [
      "Vêtements d'hiver",
      "Vêtements d'été",
      "Accessoires",
      "Chaussures",
    ],
  },
  {
    name: "Vêtements",
    subcategories: ["T-shirts", "Pantalons", "Chemises", "Vestes"],
  },
  {
    name: "Chaussures",
    subcategories: ["Bottes", "Sneakers", "Mocassins", "Chaussures de ville"],
  },
  {
    name: "Sport",
    subcategories: [
      "Vêtements de sport",
      "Chaussures de sport",
      "Accessoires de sport",
      "Équipement de fitness",
    ],
  },
];
