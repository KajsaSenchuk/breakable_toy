import React from "react";

const StoreShowTile = ({ name, img_url, description, address, website_link }) => {
  return (
    <div>
      <img src={img_url} />
      <h3>{name}</h3>
      <p>{address}</p>
      <a href={website_link}>{website_link}</a>
      <p>{description}</p>
    </div>
  );
};

export default StoreShowTile