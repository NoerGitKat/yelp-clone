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

    if (restaurant.rows[0].name === name) {
      return res
        .status(422)
        .json({ status: "failed", data: "Restaurant already exists!" });
    }

    console.log("trigger 1", name);
    // 3. If not exists, create new restaurant
    const newRestaurant = await db.query(
      "INSERT INTO restaurant (name, location, price_range) VALUES ($1, $2, $3);",
      [name, location, price_range]
    );
    console.log("trigger 2", name);

    // 4. Send success response to client
    return res.status(201).json({
      status: "success",
      data: {
        restaurant: newRestaurant,
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getSingleRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const dbResponse = await db.query(
      "SELECT * FROM restaurant WHERE id = $1",
      [id]
    );
    const restaurant = dbResponse.rows[0];

    if (!restaurant) {
      return res
        .status(404)
        .json({ status: "failed", data: "No restaurant found..." });
    }

    return res.status(200).json({ status: "success", data: { restaurant } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", data: error.message });
  }
};

const updateSingleRestaurant = (req, res) => {
  const { id } = req.params;
};

const deleteSingleRestaurant = (req, res) => {
  const { id } = req.params;
};

export {
  getRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
};
