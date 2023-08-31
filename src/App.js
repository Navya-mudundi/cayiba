import React ,{ useState } from 'react';
// import Slider from 'react-slick';
// import Home from './Components/Pages/Home';
// import StickyNavbar from './Components/Inc/StickyNavbar';
// // import {Route,Routes,BrowserRouter} from 'react-router-dom';
// import 
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
// // import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Slider from './Components/Inc/Slider';
 import './Style.css';




// function App() {
//   return (
//     // <BrowserRouter>
//     // <Routes>
//     //   <Route path='/' elements={<Home />}></Route>
//     //   <Route path='/Home' elements={<Home />}></Route>
//     //   <Route path='*' elements={<div>
//     //     <h1>404 Error Page Not Found</h1>
//     //   </div>}></Route>
//     // </Routes>
//     // </BrowserRouter>
//     <div>
//        <StickyNavbar/> 
//       <br/>
//       <br/>
//       <Slider/>
//       <Slider/>
//       <Slider/>
//       <Slider/>
//       <Slider/>
//       <Slider/>
//       <Slider/>

//       {/* <Home/> */}
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
import './App.css';
import   './Style.css';
// import React from 'react';
// import Home from './Components/pages/Home';
// import About from './Components/pages/About';
// import Navbar  from './Components/inc/Navbar';
// import StickyNavbar from './Components/inc/StickyNavbar';
// import { BrowserRouter as Route } from 'react-router-dom';
// // // import Button from 'react-bootstrap/Button';

//  function App() {
//   return (
    
        
//     <div>
//       <Navbar/>
//       <switch>
//         <Route exact path="/" >  
//          <Home/>
//         </Route>
     
//         <Route path="/About">  
//          <About/>
//         </Route>
//      </switch>    
//   </div>
   
//   ); 
//  }

//  export default App;
// import React from 'react';
 import ReactDOM from 'react-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import StickyNavbar from './Components/Inc/StickyNavbar';
 import Carousel from 'react-multi-carousel';
 import 'react-multi-carousel/lib/styles.css';
 import Slider from 'react-slick';
//  import Slider from './Components/Inc/Slider';
 import Footer from './Components/Inc/Footer';
 import PopularCategories from './Components/Inc/PopularCategories';
 import imgGirl from './Components/Images/defaultImage.jpg';



// import Footer from './Components/inc/Footer';
// import FooterPanel from './Components/inc/FooterPanel';


// const App = () => {
  // const responsive = {
  //   superLargeDesktop: {
      
  //     breakpoint: { max: 4000, min:1024  },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   }
  // };
  // return (
  //   <div>
  //     <StickyNavbar />
  //     <PopularCategories/>
  //     {/* <Carousel responsive={responsive}>
      // <Slider/>
      
      // <Slider/>
      // <Slider/>
      // <Slider/>
      // <Slider/>
      // <Slider/>
      // </Carousel> */}
      //  <Footer/>
      {/* <FooterPanel/>  */}
      {/* <BrowserRouter>
//     // <Routes>
//     //   <Route path='/' elements={<Home />}></Route>
//     //   <Route path='/Home' elements={<Home />}></Route>
//     //   <Route path='*' elements={<div>
//     //     <h1>404 Error Page Not Found</h1>
//     //   </div>}></Route>
//     // </Routes>
//     // </BrowserRouter> */}
//     <div></div>
  
//   </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
// export default App;
function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div className="App">
      <StickyNavbar />
      <span class="title">
          <h3>POPULAR CATEGORIES</h3>
          {/* <a href="#" class="no-underline">See Everything</a> */}
      </span>
      <span class="see">
          
          <a href="#" class="no-underline">See Everything</a>
      </span>
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
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}

      </Slider>
      <Footer/>
    </div>
  );
}

export default App;


