import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";
import { useHistory } from "react-router-dom";
import AverageRating from "./AverageRating";

const ListRow = ({
  id,
  name,
  location,
  price_range,
  count,
  average_rating,
}) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const history = useHistory();

  const handleDeleteRestaurant = async (e, id) => {
    e.stopPropagation();
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

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <tr onClick={() => handleRestaurantSelect(id)}>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(price_range)}</td>
      <td>
        {count > 0 ? (
          <AverageRating rating={average_rating} count={count} />
        ) : (
          <span className="text-warning">0 reviews</span>
        )}
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={(e) => handleUpdate(e, id)}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={(e) => handleDeleteRestaurant(e, id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListRow;
