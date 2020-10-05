import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";

const ListRow = ({ id, name, location, price_range, rating }) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const handleDeleteRestaurant = async (id) => {
    await axios.delete(`/${id}`);

    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.id !== id
    );

    console.log("filtered", filteredRestaurants);

    setRestaurants(filteredRestaurants);

    return;
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(price_range)}</td>
      <td>{rating}</td>
      <td>
        <button className="btn btn-warning">Update</button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteRestaurant(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListRow;
