import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewForm = (props) => {
  const [getReviewData, setReviewData] = useState({})
  const [getRatingData, setRatingData] = useState([])
  const [getNotice, setNotice] = useState("")

  let storeId = props.match.params.storeId

  const handleRating = () => {
    document.addEventListener("DOMContentLoaded", function(){
      statusbar.forEach(function(star){
        star.addEventListener("click", setRating)
      });
      let rating = parseInt(document.querySelector(".stars").getAttribute("data-rating"));
      let target = stars[rating - 1];
      target.dispatchEvent(new MouseEvent("click"));
    });
    // setRatingData({
      function setRating(ev) {
        debugger
        let span = ev.currentTarget;
        let stars = document.querySelectorAll(".star");
        let match = false
        stars.forEach(function(star) {
          if(match) {
            star.classList.remove("rated");
          } else {
            star.classList.add("rated");
          }
          if(star === span) {
            match = true;
          };
        });
        document.querySelector(".stars").setAttribute("data-rating")
      };
    // });
  };

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

          <label>Rating</label>
          <div className="stars" data-rating="3" onClick={handleRating}>
            <span className="star">&nbsp;</span>
            <span className="star">&nbsp;</span>
            <span className="star">&nbsp;</span>
            <span className="star">&nbsp;</span>
            <span className="star">&nbsp;</span>
          </div>

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