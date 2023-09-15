import React, { useState } from "react";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
import PopularCategories from "./PopularCategories";
import imgGirl from "./defaultImage.jpg";
import Slider from "react-slick";
import "./Arrows.css";

function Arrows() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          Arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
    <div className="app">
      <div className="app-slider-text">
        <h3 className={window.innerWidth <= 480 ? "mobile-h3" : "desktop-h3"}>
          POPULAR CATEGORIES
        </h3>
      </div>
      <div className="link">
        <a
          href="#"
          className={
            window.innerWidth <= 480
              ? "mobile-link-no-underline"
              : "desktop-link-no-underline"
          }
        >
          See Everything
        </a>
      </div>
      <Slider {...settings}>
        {PopularCategories.map((item) => (
          <div className="card" key={item.title}>
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
            <h4 className="text-center">{item.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Arrows;
