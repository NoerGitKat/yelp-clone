import express from "express";

const restaurantRouter = express.Router();

// Controllers
import {
  getRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
} from "./../controllers/restaurant-controller";

// Validators
import validateNewRestaurant from "./../util/validation/validateNewRestaurant";

restaurantRouter
  .route("/")
  .get(getRestaurants)
  .post(validateNewRestaurant, createRestaurant);

restaurantRouter
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateSingleRestaurant)
  .delete(deleteSingleRestaurant);

export default restaurantRouter;
