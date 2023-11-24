import React from "react";
import StickyNavbar from "./StickyNavbar";
import Bannerslider from "./Bannerslider";
// import Footer from "./Footer";


const Layout = ({children}) => {
  return (
    <div className="app">
      <StickyNavbar /> 
      <Bannerslider/>
      {children} 
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
