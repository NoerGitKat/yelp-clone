import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurant }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
