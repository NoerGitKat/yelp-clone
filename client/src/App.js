import React from "react";
import "./App.css";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/restaurants/:id/update" component={UpdatePage} />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailsPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
