import React from 'react';
import Slider from 'react-slick';
// import '../Inc/Bannerslider.css';
import '../Pages/ProductDetails.css';

const ProductDetails = () => {
  const data = [
    {
      id: 1,
      image: "https://www.cayiba.com/uploads/listings/8ab56e736bc438aa950714d34cf4cb48.png",
    },
    {
      id: 2,
      image: "https://www.cayiba.com/uploads/listings/b01abb2eac74e38f475ba2af9490ed6f.png",
      title: ''
    },
    {
      id: 3,
      image: "https://www.cayiba.com/uploads/listings/5cb15c5c0e9c0af2783f4e2ac1e85938.png",
      title: ''
    },
    {
      id: 4,
      image: "https://www.cayiba.com/uploads/listings/b01abb2eac74e38f475ba2af9490ed6f.png",
      title: ''
    },
    {
      id: 5,
      image: "https://www.cayiba.com/uploads/listings/5cb15c5c0e9c0af2783f4e2ac1e85938.png",
      title: ''
    },
    {
      id: 6,
      image: "https://www.cayiba.com/uploads/listings/b01abb2eac74e38f475ba2af9490ed6f.png",
    },
    {
      id: 7,
      image: "https://www.cayiba.com/uploads/listings/5cb15c5c0e9c0af2783f4e2ac1e85938.png",
    },
    {
      id: 8,
      image: "https://www.cayiba.com/uploads/listings/b01abb2eac74e38f475ba2af9490ed6f.png",
    },
    {
      id: 9,
      image: "https://www.cayiba.com/uploads/listings/5cb15c5c0e9c0af2783f4e2ac1e85938.png",
    }
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className='banner'>
        <Slider className='banner' {...settings}>
          {data.map((item) => (
            <div className='imgcontainer1' key={item.id}>
              <img src={item.image}  alt='noimg' />
            </div>
          ))}
        </Slider>
      </div>

      <div className="content-container">
        <div className="left-side">
          <div className="horizontal-div1">
             <h3>All Night Drugstore

             </h3>
             <div className='flexbox2'>
               <div className="icon" >
                 <i className="fas fa-map-marker-alt" ></i>
               </div>
                <span >Italian</span>
                </div>
          </div>
         
          <div className="horizontal-div2">
          <h4 className="underline pink">Preview</h4>
          <span>Loincloth</span>
          </div>

          <div className="horizontal-div map">
          <p className="underline pink">Map </p>
          </div>
        </div>

        <div className="right-side">
          <div className="vertical-div seller-info">
            <div class="flexbox">


            <div className="icon">
             <i className="fas fa-user"></i></div> 
             <div>
                <h3 className="underline grey">Seller Information</h3>
                </div> 
                
                <span className='vertical-div-text'>Italian</span>
            </div>
            <ul>
              <li>
                <div className="icon">
                   <i className="fas fa-map-marker-alt"></i>
                   <span>CFA 8000</span></div>
               </li>
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Condition New</span></div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span >Location Abengourou,Italian Loincloth</span></div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Published:oct 19,2022</span> </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>alasanemare</span> </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-phone"></i>
                  <span>0554886830</span></div>
              </li>
              <li >
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>angelsalva202@gmail.com</span> </div>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
