import React from "react";
import "./App.css";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import UpdatePage from "./pages/UpdatePage";

// Context
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailsPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
