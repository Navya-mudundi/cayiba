import React, { useState } from 'react';
import { dataDigitalBestSeller } from '../Product/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
// import defaultImage from './Components/Images/defaultImage.png';
import '../Product/Productcard.css';
import Slider from 'react-slick';
function Productcard() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          dots: true
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:true
        },
      },
    ],
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: defaultImage,
    }));
  };
  return (
    <>
    <div className="App">
      <h3>SHOPPING PRODUCTS (READY TO WEAR)</h3>
      <hr className='line' />
      <Slider {...settings}>
        {
        dataDigitalBestSeller.map((item) => (
          <div className="card --bs-breakpoint-sm" key={item.title}>
            <div className="card-top">
              <img
                src={defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage} />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
              <div className="location">
                <FontAwesomeIcon color='#fed700' icon={faMapMarker} />
                <span>{item.location}
                  San-Pédro, Bardot face wave agency not far from place ADO
                </span>
              </div>
              <div className="contact">
                <FontAwesomeIcon color='#fed700' icon={faPhone} />
                <span>{item.contact}</span>
                CFA 275,000
              </div>
              <hr />
              <div className='bottom-line'>
                <a>Shopping ready to wear</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Productcard;