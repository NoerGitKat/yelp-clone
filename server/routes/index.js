import restaurantRouter from "./restaurant-router";

const mountRoutes = (app) => {
  app.use("/api/restaurants", restaurantRouter);
};

export default mountRoutes;
