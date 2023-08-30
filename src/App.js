import React from 'react';
import Home from './Components/Pages/Home';
import StickyNavbar from './Components/Inc/StickyNavbar';
// import {Route,Routes,BrowserRouter} from 'react-router-dom';
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' elements={<Home />}></Route>
    //   <Route path='/Home' elements={<Home />}></Route>
    //   <Route path='*' elements={<div>
    //     <h1>404 Error Page Not Found</h1>
    //   </div>}></Route>
    // </Routes>
    // </BrowserRouter>
    <div>
       <StickyNavbar/> 
      <br/>
      <br/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
