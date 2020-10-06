import { check } from "express-validator";

const validateReview = [
  check("name")
    .isLength({
      min: 3,
    })
    .withMessage("Please fill in a name of at least 3 characters."),
  check("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be a number between 1 and 5"),
  check("reviewText")
    .isLength({ min: 3 })
    .withMessage("Please give a valid review!"),
];

export default validateReview;
