import React from "react";
import Header from "./../components/Header";
import AddRestaurant from "./../components/AddRestaurant";
import RestaurantList from "./../components/RestaurantList";

const Homepage = () => {
  return (
    <div>
      <Header headerText={"Restaurant Finder"} />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};
export default Homepage;
