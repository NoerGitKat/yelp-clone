import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<i key={index} className="fas fa-star text-warning" />);
    } else if (index === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i key={index} className="fas fa-star-half-alt text-warning" />
      );
    } else {
      stars.push(<i key={index} className="far fa-star text-warning" />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
