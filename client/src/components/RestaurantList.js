import React, { useEffect, useContext } from "react";
import { RestaurantsContext } from "./../context/RestaurantsContext";
import axios from "./../util/http-request";

import ListRow from "./ListRow";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    async function fetchRestaurants() {
      const response = await axios.get("/");
      const { restaurants } = response.data.data;

      setRestaurants(restaurants);
    }

    fetchRestaurants();
  }, []);

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, i) => {
            return (
              <ListRow
                key={i}
                name={restaurant.name}
                location={restaurant.location}
                price_range={restaurant.price_range}
                rating={restaurant.rating}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
