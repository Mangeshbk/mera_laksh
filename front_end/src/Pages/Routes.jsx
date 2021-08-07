import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Home from "./Home";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import EducationPath from "./educatinoPath/EducationPath";
import RecommendedCollege from './recommendecCollege/RecommendedCollege';
import Journy from "./journy/Journy";

export default function Routes() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/education_path">
          <EducationPath />
        </Route>
        <Route path="/education_path/:category">
          <Journy />
        </Route>
        <Route exact path="/college_list/:college">
          <RecommendedCollege />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
