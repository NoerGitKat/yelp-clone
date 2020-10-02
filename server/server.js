import dotenv from "dotenv";
import express from "express";
import mountRoutes from "./routes";


// Activate env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routers
import restaurantRouter from "./routes/restaurant-router";

// Middlewares
app.use(express.json());

// Mount routes
mountRoutes(app);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
