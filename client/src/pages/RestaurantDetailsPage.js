import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";

import AllReviews from "./../components/AllReviews";
import AddReview from "./../components/AddReview";
import Header from "./../components/Header";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const response = await axios.get(`/${id}`);
        const { data } = response.data;
        setSelectedRestaurant(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRestaurant();
  }, [selectedRestaurant, setSelectedRestaurant, id]);

  return (
    <div className="mt-3">
      {selectedRestaurant && (
        <Header headerText={selectedRestaurant.restaurant.name} />
      )}
      {selectedRestaurant && (
        <AllReviews reviews={selectedRestaurant.reviews} />
      )}
      <AddReview />
    </div>
  );
};
export default RestaurantDetailsPage;
