import React from "react";
import { Link } from "react-router-dom"

const StoresIndexTile = ({ id, name, img_url, category, description, address, website_link }) => {
  return (
    <div className="index-tile">
      <div className="index-img"> 
        <img src={img_url}/>
      </div>
      <div className="index-info">
        <div className="category-info-review">
          <p>{category} Store</p>
          <Link to={`/stores/${id}`} id="link">Info and Reviews for {name}</Link>
        </div>
        <div className="location-info">
          <p>{address}</p>
          <a href={website_link} id="link">{website_link}</a>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default StoresIndexTile;