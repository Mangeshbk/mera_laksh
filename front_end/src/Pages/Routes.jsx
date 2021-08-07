import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Home from "./Home";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import EducationPath from "./educatinoPath/EducationPath";
import Journy from "./journy/Journy";

export default function Routes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/education_path">
          <EducationPath />
        </Route>
        <Route exact path="/education_path:category">
          <Journy />
        </Route>
        <Route exact path="/:college">
          <Journy />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
