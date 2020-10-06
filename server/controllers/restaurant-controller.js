import db from "./../db";
import { validationResult } from "express-validator";

const getRestaurants = async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT * FROM restaurant;");
    const restaurants = dbResponse.rows;

    return res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: { restaurants },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

const createRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;

  // 1. Validate input fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "failed", data: errors });
  }

  try {
    // 2. Check if restaurant already exists
    const restaurant = await db.query(
      "SELECT * FROM restaurant WHERE name = $1;",
      [name]
    );

    if (restaurant.rows[0]) {
      return res
        .status(422)
        .json({ status: "failed", data: "Restaurant already exists!" });
    }

    // 3. If not exists, create new restaurant
    const newRestaurant = await db.query(
      "INSERT INTO restaurant (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
      [name, location, price_range]
    );

    // 4. Send success response to client
    return res.status(201).json({
      status: "success",
      data: {
        restaurant: newRestaurant.rows[0],
      },
    });
  } catch (err) {
    console.log("trigger error!", err);
    return res.status(500).json({ msg: err.message });
  }
};

const getSingleRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const dbResponse = await db.query(
      "SELECT * FROM restaurant WHERE id = $1;",
      [id]
    );

    const dbResponse2 = await db.query(
      "SELECT * FROM review WHERE restaurant_id = $1;",
      [id]
    );

    const restaurant = dbResponse.rows[0];
    const reviews = dbResponse2.rows;

    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "failed", data: "No restaurant found..." });
    }

    return res
      .status(200)
      .json({ status: "success", data: { restaurant, reviews } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

const updateSingleRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  const { id } = req.params;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "failed", data: errors });
  }

  try {
    const restaurantExists = await db.query(
      "SELECT * FROM restaurant WHERE id = $1;",
      [id]
    );

    if (restaurantExists.rows.length > 0) {
      const dbResponse = await db.query(
        "UPDATE restaurant SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *;",
        [name, location, price_range, id]
      );

      const updatedRestaurant = dbResponse.rows[0];

      return res
        .status(200)
        .json({ status: "success", data: { updatedRestaurant } });
    } else {
      return res
        .status(404)
        .json({ status: "failed", data: "Restaurant doesn't exist!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

const deleteSingleRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurantExists = await db.query(
      "SELECT * FROM restaurant WHERE id = $1;",
      [id]
    );

    if (restaurantExists.rows.length > 0) {
      const dbResponse = await db.query(
        "DELETE FROM restaurant WHERE id = $1;",
        [id]
      );

      return res.status(204).json({
        status: "success",
        data: "Restaurant has been successfully deleted!",
      });
    } else {
      return res
        .status(404)
        .json({ status: "failed", data: "Restaurant doesn't exist!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

const addReviewToRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, rating, reviewText } = req.body;

  // 1. Validate input fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "failed", data: errors });
  }

  try {
    const restaurantExists = await db.query(
      "SELECT * FROM restaurant WHERE id = $1;",
      [id]
    );

    if (restaurantExists.rows.length > 0) {
      const dbResponse = await db.query(
        "INSERT INTO review (restaurant_id, name, rating, reviewText) VALUES ($1, $2, $3, $4) RETURNING *;",
        [id, name, rating, reviewText]
      );

      return res.status(201).json({
        status: "success",
        data: {
          review: dbResponse.rows[0],
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

export {
  getRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
  addReviewToRestaurant,
};
