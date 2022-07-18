import React from "react";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bär from "../../images/image5.jpg";

const Home = () => {
    return (
        <>
            <Carousel showArrows={true} showThumbs={false} autoPlay autoPlaySpeed="3000" infiniteLoop={true}>

                <img alt="" src={image1} className="slider-img" />
                <img alt="" src={image2} className="slider-img" />
                <img alt="" src={image3} className="slider-img" />
                <img alt="" src={image4} className="slider-img" />
                <img alt="" src={image5} className="slider-img" />

            </Carousel>
            <div className="services">
                <img alt="" src={bär} className="services_pic" />

            </div>
            <style jsx>{`
 .slider-img {
   width: 100%;
   height: 500px;
   object-fit: cover;
 }
`}</style>
        </>
    );
};

export default Home;