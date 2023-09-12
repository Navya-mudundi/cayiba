import React ,{ useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StickyNavbar from './Components/Inc/StickyNavbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import Footer from './Components/Inc/Footer';
import PopularCategories from './Components/Inc/PopularCategories';
import imgGirl from './Components/Images/defaultImage.jpg';
import SamplePrevArrow from './Components/Pages/SamplePrevArrow';
import SampleNextArrow from './Components/Pages/SampleNextArrow';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />, 
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
          Arrows:true,
        },
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
   <Router>
     <div className="app">
        <StickyNavbar />
        {/* <Home/> */}
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route> 
          <Route path="/Register" element={<Register/>}></Route> 
          <Route path="/Home" element={<Home/>}></Route>

        </Routes>
            <div className="app-slider-text">
            <h3 className={window.innerWidth <= 480 ? 'mobile-h3' : 'desktop-h3'}>
               POPULAR CATEGORIES
            </h3>
        </div>
        <div className="link">
           <a href="#" className={window.innerWidth <= 480 ? 'mobile-link-no-underline' : 'desktop-link-no-underline'}>
             See Everything
           </a>
        </div> 
       <Slider {...settings}>
          {PopularCategories.map((item) => (
            <div className="card">
              <div className="card-top">
               <img
                 src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                    }
                    alt={item.title}
                    onError={handleErrorImage}
                />
             </div>
              <h4 className="text-center" >{item.title}</h4>
          </div>
         ))}
       </Slider>
        {/* <Footer/> */}
     </div>
   </Router> 
  );
}
export default App;


