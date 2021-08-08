import React from "react";

import Header from "../components/header/Header.jsx";
import Feature from "../components/features/Feature.jsx";
import Counting from "../components/counting/Counting.jsx";
import Details from "../components/details/Details.jsx";
import Gallery from "../components/gallery/Gallery.jsx";
import Team from "../components/team/Team.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import Contact from "../components/contact/Contact.jsx";
import Navbar from './../components/navBar/Navbar';


function Home() {
  return (
    <>
    <Navbar />
      <Header />

      <main id="main">
        <Feature />

        <Counting />

        <Details />

        <Gallery />

        <Team />

        <FAQ />

        <Contact />
      </main>
    </>
  );
}

export default Home;
