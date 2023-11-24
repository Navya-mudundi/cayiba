import React,{usestate} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Root.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes,useLocation} from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import "./Components/Pages/SamplePrevArrow";
import "./Components/Pages/Arrows";
import Arrows from "./Components/Pages/Arrows";
import Layout from "./Components/Inc/Layout";
import SellPage from "./Components/Pages/SellPage";
import ProductDetails from "./Components/Pages/ProductDetails";
import './Components/Pages/Arrows.css';
import Bannerslider from "./Components/Inc/Bannerslider";
// import categories from "./Components/Pages/categories";
import multipleimages from './Components/Pages/multipleimages'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<Layout><Arrows /></Layout> }/>   
           <Route path="/login" element={<Layout><LoginPage /></Layout>}></Route>
           <Route path="/Register" element={<Layout><Register /></Layout>}></Route>
           <Route path="/sell" element={<Layout><SellPage /></Layout>}></Route>
           {/* <Route path="/home" element={<Home />}></Route>
           <Route path="/" element={<Layout><Bannerslider /></Layout>} /> */}
               
        </Routes>
            <ProductDetails/>     
           
      </div>
    </Router>
  );
}
export default App;

