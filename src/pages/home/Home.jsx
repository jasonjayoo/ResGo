import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
// import React from "react";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Select by Property Type</h1>
          <PropertyList />
          <h1 className="homeTitle">Popular Stays</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home