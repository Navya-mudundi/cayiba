import React from "react";
import StickyNavbar from "./StickyNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <StickyNavbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
