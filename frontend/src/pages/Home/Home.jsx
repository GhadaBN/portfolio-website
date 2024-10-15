import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import IntroText from "../../components/Header/IntroText/IntroText";
const Home = () => {
  return (
    <div className="home">
      <IntroText />
      {/* <Header /> */}
    </div>
  );
};

export default Home;
