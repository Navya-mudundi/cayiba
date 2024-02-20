import React, { useState } from 'react';
import { dataDigitalBestSeller } from '../Product/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
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
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true
        },
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          dots: true
        },
      },
      {
        breakpoint: 425,
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
    <div className="product">
      <h3 classname="product-title">SHOPPING PRODUCTS (READY TO WEAR)</h3>
      <hr className='line' />
      <Slider {...settings}>
        {
        dataDigitalBestSeller.map((item) => (
          <div className="card --bs-breakpoint-sm" key={item.title}>
            <div className="card-top2">
              <img className='Card-top2-img' style={{position:"relative"}}
                src={defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg
                }
                alt={item.title}
                 onError={handleErrorImage} />
                <div classname="Cardtop3"style={{position:"absolute",
               top: '5px',
               left: '15px',
               padding: '2px',
               width: '90px',
               height: '25px',
               textAlign: 'center',
               paddingBottom: '1px',
               backgroundColor: 'var(--primary-color)',
               borderRadius: '16px',
               color: 'white',
               fontSize: '12px',
               fontWeight: '400',
               letterSpacing: '2.5px',}}>
                  <p> FEATURED </p>
                </div> 
              
                 <h1>{item.title}</h1>
              </div>
            
            <div className="card-bottom">
              <h3 style={{paddingLeft:"15px"}}>{item.price}</h3>
              <span className="category" >{item.category}</span>
              <div className="location" style={{paddingLeft:"15px"}}>
                <FontAwesomeIcon color='#fed700' icon={faMapMarker} />
                <span style={{paddingLeft:"10px"}}>{item.location}
                  San-Pédro, Bardot face wave agency not far from place ADO
                </span>
              </div>
              <div className="contact" style={{paddingLeft:"15px"}}>
                <FontAwesomeIcon color='#fed700' icon={faPhone}  />
                <span style={{paddingLeft:"10px"}}>{item.contact}</span>
                  CFA 275,000
              </div>
              <hr />
              <div className='bottom-line'>
                <a href="/productDetails"> <img src='https://cayiba.com/resources/images/no-image.jpeg'  width={'25px'} height={"25px"}/></a>
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