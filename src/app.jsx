import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home-page.component";
import Vendors from "./pages/vendors/vendors-page.component";
// CSS
import "./app.styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/vendors">
          <Vendors />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
