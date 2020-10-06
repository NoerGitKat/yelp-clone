import React from "react";
import StarRating from "./StarRating";

const Review = ({ name, rating, reviewText }) => {
  return (
    <div
      className="card text-white bg-primary mb-3 mr-4"
      style={{ maxWidth: "30%" }}
    >
      <div className="card-header d-flex justify-content-between">
        <span>{name}</span>
        <span>
          <StarRating rating={rating} />
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
