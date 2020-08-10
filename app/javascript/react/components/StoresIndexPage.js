import React, { useState, useEffect } from 'react'

import StoresIndexTile from "./StoresIndexTile"

const StoresIndexPage = (props) => {
  const [getStores, setStores] = useState([]);
  useEffect(() => {
    fetch("/api/v1/stores")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setStores(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
    
  const listStores = getStores.map((store) => {
    return (
      <StoresIndexTile
        key={store.id}
        name={store.name}
        img_url={store.image_url}
        id={store.id}
      />
    );
  });

  return (
    <div>
      <h3>Stores Index</h3>
      <ul>{listStores}</ul>
    </div>
  );
};

export default StoresIndexPage