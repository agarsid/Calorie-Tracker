import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component"
import FoodItemsList from "./components/foodItems-list.component";
import EditFoodItem from "./components/edit-foodItem.component";
import AddFood from "./components/add-food.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={FoodItemsList} />
      <Route path="/edit/:id" component={EditFoodItem} />
      <Route path="/create" component={AddFood} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
 