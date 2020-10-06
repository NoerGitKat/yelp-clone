import React from "react";
import Review from "./Review";

const AllReviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <Review
            key={review.id}
            name={review.name}
            rating={review.rating}
            reviewText={review.reviewtext}
          />
        );
      })}
    </div>
  );
};

export default AllReviews;
