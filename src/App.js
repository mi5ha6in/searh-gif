import React, { useState, useEffect } from "react";
import { getSearchedGIF } from "./services/TheGiphyApi";
import "./App.css";

export const App = () => {
  const [searchedGif, setSearchedGif] = useState("");
  const query = 'cat';

  const loadSearchedGif = async () => {
    try {
      const searchedGifArray = await  getSearchedGIF(query);
      setSearchedGif(searchedGifArray)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadSearchedGif()
  }, []);

  return (
    <>cat</>
  )
};
