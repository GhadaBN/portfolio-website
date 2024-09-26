import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import WebDev from "./pages/WebDev/WebDev";
import DesignDirection from "./pages/DesignDirection/DesignDirection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Project from "./pages/ProjectPage/Project";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    document.body.className = "";

    if (currentPath === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.add("project-page");
    }
  }, [location]);

  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/designdirection" element={<DesignDirection />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
