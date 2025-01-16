import SearchBar from "@/ui/components/searchBar";
import React from "react";
import SearchCategories from "./categories";

function SearchWidget() {
  return (
    <div className="relative mt-1">
      {/* Categories  */}
      <div className="flex flex-row gap-16 items-end">
        <div className="flex-1">
          <SearchCategories />
        </div>
        <div className="flex-2 mr-10">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default SearchWidget;
