import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import IntroAbout from "../../components/Header/IntroAbout/IntroAbout";
const Home = () => {
  return (
    <div className="home">
      <IntroAbout />
      {/* <Header /> */}
    </div>
  );
};

export default Home;
