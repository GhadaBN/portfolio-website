import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import WebDev from "./pages/ProjectsCategory/WebDev";
import DesignDirection from "./pages/ProjectsCategory/DesignDirection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Project from "./pages/ProjectPage/Project";
import Contact from "./pages/Contact/Contact";

const App = () => {
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
