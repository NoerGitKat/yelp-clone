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
import validateRestaurant from "../util/validation/validateRestaurant";

restaurantRouter
  .route("/")
  .get(getRestaurants)
  .post(validateRestaurant, createRestaurant);

restaurantRouter
  .route("/:id")
  .get(getSingleRestaurant)
  .put(validateRestaurant, updateSingleRestaurant)
  .delete(deleteSingleRestaurant);

export default restaurantRouter;
