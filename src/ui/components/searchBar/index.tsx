import { SearchOutlined } from "@ant-design/icons";
import React from "react";

function SearchBar() {
  return (
    <div className="border border-black p-2 flex flex-row gap-3">
      <SearchOutlined style={{ fontSize: 20 }} className="text-gray-400" />
      <input
        className="border-none focus:border-none active:border-none outline-none ring-0"
        placeholder="Rechercher"
      />
    </div>
  );
}

export default SearchBar;
