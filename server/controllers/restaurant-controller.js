const getRestaurants = (req, res) => {
  return res.status(200).json({ restaurant: "Burger King" });
};

const createRestaurant = async (req, res) => {
  try {
    return res.status(201).json({});
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getSingleRestaurant = (req, res) => {};
const updateSingleRestaurant = (req, res) => {};
const deleteSingleRestaurant = (req, res) => {};

export {
  getRestaurants,
  createRestaurant,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
};
