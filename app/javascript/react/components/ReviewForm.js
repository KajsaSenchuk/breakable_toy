import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewForm = (props) => {
  const [getReviewData, setReviewData] = useState({})
  const [getNotice, setNotice] = useState("")

  let storeId = props.match.params.id

  const handleTextInputChange = (event) => {
    setReviewData({
      ...getReviewData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/api/v1/stores/${storeId}/reviews`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(getReviewData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  };

  return (
    <div>
      <h3>Submit a New Review</h3>
      <div>{getNotice}</div>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Rating 1-5
          <textarea
            name="rating"
            onChange={handleTextInputChange}
            value={getReviewData.rating}
          />
        </label>            
        <label>
          Comment (optional):
          <textarea
            name="comment"
            onChange={handleTextInputChange}
            value={getReviewData.comment}
          />
        </label>
    
        <button 
          type="submit" 
          value="Submit" 
          form="reviewForm"> 
          Submit Form
        </button>
      </form>

      <div>
        <Link to={`/stores/${storeId}`}>
          Return to Store
        </Link>
      </div>
    </div>
  )
};

export default ReviewForm