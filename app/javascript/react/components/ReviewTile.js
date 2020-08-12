import React from "react";

const ReviewTile = (props) => {
  return (
    <tr>
      <td>{props.data.username}</td>
      <td>{props.data.comment}</td>
      <td>{props.data.rating}</td>
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