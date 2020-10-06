import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";

import AllReviews from "./../components/AllReviews";
import AddReview from "./../components/AddReview";

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
    <div className="mt-3">
      <AllReviews />
      <AddReview />
    </div>
  );
};
export default RestaurantDetailsPage;
