import { check } from "express-validator";

const validateNewRestaurant = [
  check("name")
    .isLength({
      min: 3,
    })
    .withMessage("Please fill in a name of at least 3 characters."),
  check("location")
    .isLength({
      min: 3,
    })
    .withMessage("Please fill in a location of at least 3 characters."),
  check("price_range")
    .isNumeric()
    .withMessage("The price range should be between 1 - 5"),
];

export default validateNewRestaurant;
