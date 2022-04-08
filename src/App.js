import React, { useState, useEffect } from "react";
import { getSearchedGifArray } from "./services/TheGiphyApi";
import { SearchInput } from "./components/SearchInput";
import { List } from "./components/List";

const commandMap = {
  gif: "/gif ",
};

export const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [searchedGifArray, setSearchedGifArray] = useState([]);

  const loadSearchedGif = async (query) => {
    try {
      const responseSearchedGifArray = await getSearchedGifArray(query);
      setSearchedGifArray(responseSearchedGifArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchInput.startsWith(commandMap.gif)) {
      setQuery(searchInput.slice(commandMap.gif.length));
    }
  }, [searchInput]);

  useEffect(() => {
    if (query) {
      loadSearchedGif(query);
    }
  }, [query]);

  return (
    <>
      <div className="web-messenger">
        <div className="web-messenger__list">
          <List images={searchedGifArray} />
        </div>
        <div className="web-messenger__search">
          <SearchInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
      </div>
    </>
  );
};
