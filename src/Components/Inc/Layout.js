import React from "react";
import StickyNavbar from "./StickyNavbar";
// import ProductDetails from "../Pages/ProductDetails";
// import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="app">
      <StickyNavbar /> 
      
       {children} 
      {/* <ProductDetails /> */} 
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
