import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useParams } from "react-router-dom";
import axios from "./../util/http-request";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newReview = {
        name,
        rating,
        reviewText,
      };

      await axios.post(`/${id}/reviews`, newReview);

      setName("");
      setRating(1);
      setReviewText("");
    } catch (error) {
      console.error(error);
    }

    return;
  };

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rate...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            id="review"
            cols="30"
            rows="10"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
