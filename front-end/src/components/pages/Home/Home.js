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
import partner1 from "../../images/partner-1.png";
import partner2 from "../../images/partner-2.png";
import partner3 from "../../images/partner-3.png";
import partner4 from "../../images/partner-4.png";
import partner5 from "../../images/partner-5.png";
import partner6 from "../../images/partner-6.png";
import partner7 from "../../images/partner-7.png";
import partner8 from "../../images/partner-8.png";
import partner9 from "../../images/partner-9.png";
import partner10 from "../../images/partner-10.png";
import partner11 from "../../images/partner-11.png";
import partner12 from "../../images/partner-12.png";
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
            {/* Start Partner Section */}
            <div className="partners">
                <h2>Our Partners</h2>
                <div className="partners-container">
                    <div className="partners-box">
                        <img alt="" src={partner1} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner2} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner3} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner4} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner5} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner6} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner7} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner8} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner9} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner10} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner11} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={partner12} />
                    </div>     
                </div>
            </div>
            {/* End Partner Section */}
        </>
    );
};

export default Home;