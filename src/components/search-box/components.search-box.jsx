import React from "react";
import "./components.search-box.styles.css";

export const SearchBox = ({ placeholder, handler }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handler}
  />
);
