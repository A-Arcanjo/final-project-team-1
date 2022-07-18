import React from "react";
import { ComponentA } from "../../views/Carousel";
// import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";
// import image3 from "../images/image3.jpg";
// import image4 from "../images/image4.jpg";
// import { CarouselM } from "../../views/Carousel.jsx";

const Home = () => {
  return (
    <div>
      <ComponentA />
    </div>
  );
  //   return (
  //     <>
  //       <CarouselM autoPlay autoPlayInterval="3000">
  //         <img alt="" src={image1} className="slider-img" />
  //         <img alt="" src={image2} className="slider-img" />
  //         <img alt="" src={image3} className="slider-img" />
  //         <img alt="" src={image4} className="slider-img" />
  //       </CarouselM>
  //       <style jsx>{`
  //         .slider-img {
  //           width: 100%;
  //           height: 500px;
  //           object-fit: cover;
  //         }
  //       `}</style>
  //     </>
  //   );
};

export default Home;
