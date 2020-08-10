import React from "react";
import { Link } from "react-router-dom"

const StoresIndexTile = ({ id, name, img_url }) => {
  return (
    <div>
      <img src={img_url} />
      <Link to={`/stores/${id}`}>{name}</Link>
    </div>
  );
};

export default StoresIndexTile;