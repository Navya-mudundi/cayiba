import React from 'react';
import Slider from 'react-slick'
// import Slider1.jpg from '../Images/Slider1.jpg';

const Bannerslider = () => {
  const data = [
    {
        id: 1,
        image:"https://www.cayiba.com/uploads/pages/811835a8-f4b7-4f86-99c4-be778ab0978f.jpg",
        title:'',
        description:''
    },
    {
      id: 2,
      image:"https://www.cayiba.com/uploads/pages/principal_banniere_site_web_2.png",
      title:''
    },
    {
      id: 3,
      image:"https://www.cayiba.com/uploads/pages/Home_1.jpg",
      title:''
    },
    {
      id: 4,
      image:"https://www.cayiba.com/uploads/pages/logiciel_de_stock_banniere_site_web_2.png",
      title:''
    },
    {
      id: 5,
      image:"https://www.cayiba.com/uploads/pages/PHARMACIE_banniere_site_web_2.png",
      title:''
    },
    {
      id:6,
      image:"https://www.cayiba.com/uploads/pages/94f8d6c9bd22373caf9dna402ae38942a2.png",
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className='bannerslider'>
      <Slider className='bannerslider' {...settings}>
        {
          data.map((item)=>{
            return (
              <div className='imgcontainer' key={item.id}>
                <img src={item.image} alt = 'noimg'/>
              </div>
            )
          }
          )
        }

      </Slider>
    </div>

    </>
  );
};

export default Bannerslider;
