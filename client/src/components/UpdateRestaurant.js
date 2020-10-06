import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "./../util/http-request";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = {
      name,
      location,
      price_range: priceRange,
    };
    try {
      await axios.put(`/${id}`, updatedRestaurant);
    } catch (error) {
      console.error(error);
    }

    history.push("/");
  };

  useEffect(() => {
    async function fetchRestaurant(id) {
      const response = await axios.get(`/${id}`);
      const { name, location, price_range } = response.data.data.restaurant;

      setName(name);
      setLocation(location);
      setPriceRange(price_range);
    }

    fetchRestaurant(id);
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price_range">Price Range</label>
        <input
          type="number"
          id="price_range"
          className="form-control"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          min={1}
          max={5}
        />
      </div>
      <button className="btn btn-primary">Update</button>
    </form>
  );
};

export default UpdateRestaurant;
