import dotenv from "dotenv";
import express from "express";

// Activate env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routers
import restaurantRouter from "./routes/restaurant-router";

app.use("/api/restaurants", restaurantRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
