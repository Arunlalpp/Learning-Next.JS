"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  // Need to implement the function.
  const handleSearch = () => {};

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
