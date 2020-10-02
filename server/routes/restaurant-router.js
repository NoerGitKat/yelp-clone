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

restaurantRouter.route("/").get(getRestaurants).post(createRestaurant);

restaurantRouter
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateSingleRestaurant)
  .delete(deleteSingleRestaurant);

export default restaurantRouter;
