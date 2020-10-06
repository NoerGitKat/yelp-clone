import express from "express";

const restaurantRouter = express.Router();

// Controllers
import {
  getRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
  addReviewToRestaurant,
} from "./../controllers/restaurant-controller";

// Validators
import validateRestaurant from "../util/validation/validateRestaurant";
import validateReview from "../util/validation/validateReview";

restaurantRouter
  .route("/")
  .get(getRestaurants)
  .post(validateRestaurant, createRestaurant);

restaurantRouter
  .route("/:id")
  .get(getSingleRestaurant)
  .put(validateRestaurant, updateSingleRestaurant)
  .delete(deleteSingleRestaurant);

restaurantRouter
  .route("/:id/reviews")
  .post(validateReview, addReviewToRestaurant);

export default restaurantRouter;
