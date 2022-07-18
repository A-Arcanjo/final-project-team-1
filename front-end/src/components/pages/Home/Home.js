import React from "react";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import iceCream from "../../images/ice-cream.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chef from "../../images/chef.png";
import chef2 from "../../images/chef2.jpg";

const Home = () => {
    return (
        <>
            <Carousel showArrows={true} showThumbs={false} autoPlay autoPlaySpeed="3000" infiniteLoop={true}>

                <img alt="" src={image1} className="slider-img" />
                <img alt="" src={image2} className="slider-img" />
                <img alt="" src={image3} className="slider-img" />
                <img alt="" src={image4} className="slider-img" />
                <img alt="" src={image5} className="slider-img" />
                <img alt="" src={iceCream} className="slider-img" />

            </Carousel>
            <div className="services-container">
                <h2 className="text">Services</h2>
                <img alt="" src={chef} className="chef" />

                <div className="services">

                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>
                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>
                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>

                </div>

            </div>
            <div className="services-container">
                <div className="services">

                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>
                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>
                    <div className="box">
                        <p> ipsedixit
                        </p>
                    </div>

                </div>

                <img alt="" src={chef2} className="chef2" />
            </div>
            <style jsx>{`
 .slider-img {
   width: 100%;
   height: 500px;
   object-fit: cover;
 }

 .services{
    height: 100%;
          width: 400px;
          display: flex;
          justify-content: space-around;
          flex-direction:column;
         
 }

 .chef{
    width: 20%;
   height: 200px;
   object-fit:fit;
 }

 .chef2{
    
    width: 30%;
   height: 200px;
   object-fit:fit;
 }


 }

 .text{
    color:#31525b;
    text-align: center;
 }

    .services-container {
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content:space-around;
    margin: auto;
    margin-top:30px;
    padding:15px 10px;
    flex: 1 1;
    width: 100%;
}

.box {
    width: 400px;
    border: 1px solid #31525b;
    padding: 20px;
    margin-top:10px;
    margin-bottom:10px;
    border-radius: 5px;
    background: #fae6b1;
    alignItems: center;
}
 }
`}</style>
        </>
    );
};

export default Home;