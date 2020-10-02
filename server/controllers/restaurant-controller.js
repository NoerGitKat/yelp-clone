import db from "./../db";

const getRestaurants = async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT * FROM restaurant;");
    const restaurants = dbResponse.rows;

    return res.status(200).json({
      status: "success",
      results: restaurants.length,
      data: { restaurants },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err.message });
  }
};

const createRestaurant = async (req, res) => {
  try {
    // 1. Validate input fields

    // 2. Check if restaurant already exists

    // 3. If not exists, create new restaurant

    // 4. Send success response to client
    return res.status(201).json({});
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getSingleRestaurant = (req, res) => {
  const { id } = req.params;
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
