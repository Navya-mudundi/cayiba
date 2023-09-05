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

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    // prev arrows:true,
    // next arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <div className="App">
      <StickyNavbar />
      <div className="slider-text">
          <h3>POPULAR CATEGORIES</h3>
           {/* <a href="#" class="no-underline">See Everything</a>  */}
      </div>
      <div className="link">
          
          <a href="#" class="link-no-underline" >See Everything</a>
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
               
              <h1>{item.title}</h1>
            </div>
            
          </div>
        ))}

      </Slider>
      <Footer/>
    </div>
  );
}

export default App;


