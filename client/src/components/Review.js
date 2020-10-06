import React from "react";
import StarRating from "./StarRating";

const Review = () => {
  return (
    <div
      className="card text-white bg-primary mb-3 mr-4"
      style={{ maxWidth: "30%" }}
    >
      <div className="card-header d-flex justify-content-between">
        <span>Karel</span>
        <span>
          <StarRating rating={4} />
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">This restaurant was amazing</p>
      </div>
    </div>
  );
};

export default Review;
