import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";
import { useHistory } from "react-router-dom";

const ListRow = ({ id, name, location, price_range, rating }) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const history = useHistory();

  const handleDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`/${id}`);

      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant.id !== id
      );

      setRestaurants(filteredRestaurants);
    } catch (error) {
      console.error(error);
    }

    return;
  };

  const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(price_range)}</td>
      <td>{rating}</td>
      <td>
        <button className="btn btn-warning" onClick={() => handleUpdate(id)}>
          Update
        </button>
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
