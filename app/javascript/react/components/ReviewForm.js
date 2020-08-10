import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewForm = (props) => {
  const [getReviewData, setReviewData] = useState({})
  const [getNotice, setNotice] = useState("")

  let storeId = props.match.params.storeId

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
      <div>{getNotice} <br/>
        <form onSubmit={handleSubmit}>
          <div>Rating</div>
            <label>Comment (optional):
              <textarea
                name="comment"
                onChange={handleTextInputChange}
                value={getReviewData.comment}
              />
            </label>
      
            <button 
              type="submit" 
              className="button primary" 
              value="Submit" 
              form="reviewForm"> 
              Submit Form
            </button>
        </form>

        <div>
          <Link to={{
            pathname:`/stores/${storeId}`,
          }} className="button primary">
            Return to Store
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ReviewForm