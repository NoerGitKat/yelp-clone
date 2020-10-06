import React from "react";
import StarRating from "./StarRating";

const AverageRating = ({ rating, count }) => {
  return (
    <>
      <StarRating rating={rating} />
      <span className="text-warning ml-1">({count})</span>
    </>
  );
};

export default AverageRating;
