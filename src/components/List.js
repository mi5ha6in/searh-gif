import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ images }) => {
  return (
    <ul className="list">
      {images.map((image) => (
        <ListItem key={image.id} value={image.url} alt={image.title} />
      ))}
    </ul>
  );
};
