import React from "react";

export const SearchInput = ({ searchInput, setSearchInput }) => {
  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={searchInput}
      onChange={handleSearchInput}
      placeholder="Напишите сообщение"
      aria-label="Напишите сообщение"
    />
  );
};
