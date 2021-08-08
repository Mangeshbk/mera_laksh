import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "../components/navBar/Navbar";
import Home from "./Home";
import Footer from "../components/footer/Footer";
// import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import EducationPath from "./educatinoPath/EducationPath";
import RecommendedCollege from "./recommendecCollege/RecommendedCollege";
import Journy from "./journy/Journy";
import Navigation from "./recommendecCollege/Navigation";
import FootersSec from "./recommendecCollege/FootersSec";
import Chat from './chat/Chat';

export default function Routes() {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/education_path">
          <Navbar />
          <EducationPath />
          <Footer />
        </Route>
        <Route path="/education_path/:category">
          <Navigation />
          <Journy />
          <FootersSec />
        </Route>
        <Route exact path="/college_list/:college">
          <Navigation />
          <RecommendedCollege />
          <FootersSec />
        </Route>
        <Route exact path="/chat">
          <Navigation />
          {/* <RecommendedCollege /> */}
          <Chat />
          <FootersSec />
        </Route>
      </Switch>
    </>
  );
}
