import React from "react";
import Review from "./Review";

const AllReviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  );
};

export default AllReviews;
