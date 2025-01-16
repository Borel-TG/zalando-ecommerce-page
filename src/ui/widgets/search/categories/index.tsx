"use client";
import React, { useState } from "react";
import NavLink from "@/ui/components/navLink";
import { ShoppingOutlined } from "@ant-design/icons";

function SearchCategories() {
  const [activeSubcategories, setActiveSubcategories] = useState<
    string[] | null
  >(null);

  const categoriesList = data.map((category) => ({
    label: category.name,
    subcategories: category.subcategories.flatMap((sub) => sub),
  }));

  return (
    <div className="group relative">
      {/* Categories Nav Links */}
      <div className="ml-10 flex flex-row gap-3 h-full py-2">
        {categoriesList.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setActiveSubcategories(item.subcategories)}
            // onMouseLeave={() => setActiveSubcategories(null)}
          >
            <NavLink url="#" label={item.label} />
          </div>
        ))}
      </div>

      {/* Sub-categories Container */}
      <div
        className={`absolute z-40 border-t top-full w-screen right-0 left-0  border-t-gray-300 overflow-hidden h-0 bg-white transition-all duration-300 ease-in-out
          group-hover:h-[180px]  group-hover:border-b border-b-black
        `}
      >
        {activeSubcategories && (
          <div className="p-4 text-white">
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
