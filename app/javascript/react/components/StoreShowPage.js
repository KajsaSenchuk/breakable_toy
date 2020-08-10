import React, { useState, useEffect } from "react"
import StoreShowTile from "./StoreShowTile"

const StoreShowPage = (props) => {
  const [getStoreInfo, setStoreInfo] = useState([]);

  useEffect(() => {
    let storeId = props.match.params.id;
    fetch(`/api/v1/stores/${storeId}`)
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
        setStoreInfo(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div>
      <StoreShowTile
        key={getStoreInfo.id}
        name={getStoreInfo.name}
        img_url={getStoreInfo.img_url}
        description={getStoreInfo.description}
        address={getStoreInfo.address}
        website_link={getStoreInfo.website_link}
    /> 
    </div>   
  );
};

export default StoreShowPage