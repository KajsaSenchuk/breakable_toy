import React from "react";

const ReviewTile = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.comment}</td>
      <td>{props.rating}</td>
      <td>
        <button type="button" className="button">
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="alert button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewTile;