import React from "react";

const AddReview = () => {
  return (
    <div className="mb-2">
      <form>
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select name="rating" id="rating" className="custom-select">
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
          ></textarea>
        </div>
        <button className="btn btn-primary">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
