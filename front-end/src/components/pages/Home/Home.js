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
import cow from "../../images/cow.png";
import "./Home.css";


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
            <div className="home-container">
            <h2 className="Text">Services</h2>

<div className="services-container">

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

<div className="services-container">
    <img alt="" src={cow} className="cow" />

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
            </div>

            <div className="partner-container">
                <h2 className="Text">Partners</h2>
                <div className="partners">

                    <div className="box-partner">
                        <p> Partner
                        </p>
                    </div>
                    <div className="box-partner">
                        <p> Partner
                        </p>
                    </div>
                    <div className="box-partner">
                        <p> Partner
                        </p>
                    </div>
                    <div className="box-partner">
                        <p> Partner
                        </p>
                    </div>
                    <div className="box-partner">
                        <p> Partner
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;