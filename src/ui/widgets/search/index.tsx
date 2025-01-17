import SearchBar from "@/ui/components/searchBar";
import React from "react";
import SearchCategories from "./categories";

function SearchWidget() {
  return (
    <div className="relative">
      {/* Categories  */}
      <div className="flex flex-row gap-0 md:gap-16 items-end">
        <div className="flex-grow-0 md:flex-grow">
          <SearchCategories />
        </div>
        <div className="flex-grow md:flex-grow-0">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default SearchWidget;
