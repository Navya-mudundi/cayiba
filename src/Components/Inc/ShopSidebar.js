import React from 'react';
import './ShopSidebar.css'; // Import your CSS file for styling

const ShopSidebar = () => {
  return (
    <>
      <div className="shop-sidebar">
        <div className="category-box">
          <a href="#">Category 1</a>
          <ul className="sub-categories">
            <li><a href="#All-night drugstore">All-night drugstore</a></li>
            <li><a href="#Advertisement">Advertisement</a></li>
            <li><a href="#Restaurants">Restaurants & Bars</a></li>
            <li><a href="#Food">Food and fruits</a></li>
            <li><a href="#Phone">Phone</a></li>
            <li><a href="#Hotel">Hotel</a></li>
            <li><a href="#Real">Real estste</a></li>
            <li><a href="#hotel">hotel</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ShopSidebar;
