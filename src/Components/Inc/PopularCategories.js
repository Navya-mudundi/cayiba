 import React,{useState} from 'react';
 import Slider from 'react-slick';
// import defaultImage from './Components/Images/defaultImage.jpg';


const PopularCategories = [
    {
      id: 1,
      title: 'All-night drugstore',
      
      linkImg:
        '',
    },
    {
      id: 2,
      title: 'Advertisement',
      
      linkImg:
        '',
    
      id: 3,
      title: 'Objects found',
      
      linkImg:
        '',
    },
    {
      id: 4,
      title: 'Home Services',
      
      linkImg:
        '',
    },
    {
      id: 5,
      title: 'Restaurents & Bars',
      
      linkImg:
        '',
    },
    {
      id: 6,
      title: 'Food & fruits',
      
      linkImg:
        '',
    },
    {
      id: 7,
      title: 'Shopping(ready to wear)',
      
      linkImg:
        '',
    },
    {
      id: 8,
      title: 'Shopping(thrift store)',
      
      linkImg:
        '',
    },
  ];
  export default PopularCategories;

//   const [defaultImage, setDefaultImage] = useState({});
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

// // const handleErrorImage = (data) => {
// //     setDefaultImage((prev) => ({
// //       ...prev,
// //       [data.target.alt]: data.target.alt,
// //       linkDefault: imgGirl,
// //     }));

// // return (
// //     <div className="App">
// //         <h2>POPULAR CATEGORIES</h2>
// //      <Slider {...settings}>
// //         {PopularCategories.map((item) => (
// //           <div className="card">
// //              <div className="card-top">
// //                   <img
// //                       src={
// //                          defaultImage[item.title] === item.title
// //                          ? defaultImage.linkDefault
// //                          : item.linkImg
// //                        }
// //                           alt={item.title}
// //                           onError={handleErrorImage}
// //                    />
// //                     <h1>{item.title}</h1>
// //               </div>
// //             </div>
// //         ))}
// //      </Slider>
// //     </div>
// //  );
// // };
// // export default PopularCategories;
        