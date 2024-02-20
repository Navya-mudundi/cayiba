import React from "react";
import StickyNavbar from "../Inc/StickyNavbar";
// import Footer from "../Inc/Footer";
import Arrows from "./Arrows";
import Bannerslider from '../Inc/Bannerslider';
import Productcard from '../Product/Productcard';

function Home() {
  return (
    <div>
      <StickyNavbar />
      <Bannerslider /> 
      <Arrows/>
      <Productcard/>
      <Productcard/> 
      <Productcard/> 
      <Productcard/>    
       {/* <Footer/>    */}
    </div>
  );
}
export default Home;
