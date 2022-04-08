import React from "react";

export const ListItem = ({ value, alt }) => {
  const img = <img className="list__img" src={value} alt={alt} />;
  return <li className="list__item">{img}</li>;
};
