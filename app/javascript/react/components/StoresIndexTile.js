import React from "react";
import { Link } from "react-router-dom"

const StoresIndexTile = ({ id, name, img_url, category, description, address, website_link }) => {
  return (
    <div>
      <img src={img_url} />
      <p>{category} Store</p>
      <p>{address}</p>
      <a href={website_link}>{website_link}</a>
      <br/>
      <Link to={`/stores/${id}`}>Info and Reviews about {name}</Link>
    </div>
  );
};

export default StoresIndexTile;