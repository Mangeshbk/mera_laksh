import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Home from "./Home";
import Footer from "../components/footer/Footer";

export default function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/a"></Route>
        <Route exact path="/ac"></Route>
      </Switch>
      <Footer />
    </>
  );
}
