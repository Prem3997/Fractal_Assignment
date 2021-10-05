import React from "react";
import "./SearchBar.css";
export default function SearchBar() {
  return (
    <div className="search__bar">
      <div className="search__bar__container">
        <input
          className="search__bar__input"
          type="text"
          placeholder="What do you want to ask?"
        />
        <button className="search__bar__button">Ask</button>
      </div>
    </div>
  );
}
