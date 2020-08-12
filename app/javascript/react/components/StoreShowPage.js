import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import StoreShowTile from "./StoreShowTile"
import ReviewTile from "./ReviewTile"

const StoreShowPage = (props) => {
  const [getStoreInfo, setStoreInfo] = useState([]);
  const [getReviewsData, setReviewsData] = useState([]);
  let storeId = props.match.params.id;

  useEffect(() => {
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
        setStoreInfo(body.store);
        setReviewsData(body.store.reviews)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let reviewList = getReviewsData.map((review) => {
    return (
    <ReviewTile 
      key={review.id} 
      props={review} 
    />
    );
  });

  return (
    <div>
      <StoreShowTile
        key={getStoreInfo.id}
        id={getStoreInfo.id}
        name={getStoreInfo.name}
        img_url={getStoreInfo.img_url}
        category={getStoreInfo.category}
        description={getStoreInfo.description}
        address={getStoreInfo.address}
        website_link={getStoreInfo.website_link}
    /> 
    <div>
      <Link to={{
        pathname: `/stores/${storeId}/reviews`, 
        reviewProps: { storeId },}}
        className="button primary">
          New Review
      </Link>
      </div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Comment</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{reviewList}</tbody>
        </table>
    </div>   
  );
};

export default StoreShowPage