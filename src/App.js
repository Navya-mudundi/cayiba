import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Root.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation
} from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import "./Components/Pages/SamplePrevArrow";
import "./Components/Pages/Arrows";
import Arrows from "./Components/Pages/Arrows";
import Layout from "./Components/Inc/Layout";
import SellPage from "./Components/Pages/SellPage";
import "./Components/Pages/Arrows.css";
import Category_1 from "./Components/Inc/Category_1";
import ProductDetails from "./Components/Pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout><Arrows /></Layout> }/>    
          <Route path="/login" element={<Layout><LoginPage /></Layout>}></Route>
          <Route path="/Register"element={<Layout><Register /></Layout> } ></Route>
          <Route path="/sell" element={<Layout> <SellPage /></Layout> } ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Category_1" element={<Category_1 />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
