import { useState} from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home"
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

