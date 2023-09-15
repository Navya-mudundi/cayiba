import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Root.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import StickyNavbar from "./Components/Inc/StickyNavbar";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Slider from "react-slick";
// import Footer from "./Components/Inc/Footer";
// import PopularCategories from "./Components/Pages/PopularCategories";
// import imgGirl from "./Components/Pages/defaultImage.jpg";
// import SamplePrevArrow from "./Components/Pages/SamplePrevArrow";
// import SampleNextArrow from "./Components/Pages/SampleNextArrow";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import "./Components/Pages/SamplePrevArrow";
import "./Components/Pages/Arrows";
import Arrows from "./Components/Pages/Arrows";
import Layout from "./Components/Inc/Layout";

import './Components/Pages/Arrows.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
           
           <Route path="/" element={<Layout><Arrows /></Layout> }/> 
           <Route path="/login" element={<Layout><LoginPage /></Layout>}></Route>
           <Route path="/Register" element={<Layout><Register /></Layout>}></Route>
           <Route path="/home" element={<Home />}></Route> 

        </Routes>
      </div>
    </Router>
  );
}
export default App;

