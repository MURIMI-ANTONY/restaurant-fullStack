
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./Header";
import Restaurant from "./Restaurant";
import Home from "./Home";
import RestaurantPizzaForm from "./RestaurantPizzaForm";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Router>
          <Route exact path="/restaurant_pizzas/new">
            <RestaurantPizzaForm />
          </Route>
          <Route exact path="/restaurants/:id">
            <Restaurant />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;