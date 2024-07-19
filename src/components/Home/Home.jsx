import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Footer from "../Footer";
import AboutData from "../AboutData";
import ContactData from "../ContactData";
import ProjectData from "../ProjectData";
import MoreProjectNav from "../MoreProjectNav";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home"><Banner /></section>
      <section id="about"><AboutData /></section>
      <section id="project"><ProjectData /></section>
      <MoreProjectNav />
      <section id="contact"><ContactData /></section>
      <Footer />
    </>
  );
}

export default Home;
