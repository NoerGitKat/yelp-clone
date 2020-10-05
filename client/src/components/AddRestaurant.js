import React, { useState, useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import axios from "./../util/http-request";

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPriceRange] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRestaurant = {
        name,
        location,
        price_range: parseInt(price_range),
      };

      await axios.post("/", newRestaurant);

      addRestaurant(newRestaurant);

      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              name="price_range"
              className="custom-select mr-sm-2"
              value={price_range}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
