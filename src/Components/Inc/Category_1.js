import React from "react";
import StickyNavbar from "./StickyNavbar";
// import Arrows from "../Pages/Arrows";
// import ProductDetails from "../Pages/ProductDetails";
// import Bannerslider from '../Inc/Bannerslider';
// import Productcard from '../Product/Productcard';
import ShopSidebar from './ShopSidebar';
import Category from './Category';

function Category_1() {
  return (
    <div>
      <StickyNavbar />     
      <ShopSidebar />
      <Category />
    </div>
  );
}
export default Category_1;