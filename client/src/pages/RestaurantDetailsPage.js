import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";

import StarRating from "./../components/StarRating";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const response = await axios.get(`/${id}`);
        const { restaurant } = response.data.data;
        setSelectedRestaurant(restaurant);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRestaurant();
  }, [setSelectedRestaurant, id]);

  return (
    <div>
      <StarRating rating={4} />
    </div>
  );
};
export default RestaurantDetailsPage;
