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

                <h2 className="Text">Services</h2>

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
            <style jsx>{`
.slider-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.services{
    height: 100%;
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

.cow{
    width: 20%;
    height: 200px;
    object-fit:fit;
}

}

.Text{
    color:#31525b;
    text-align: center;
    margin-top:50px;
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
    padding: 20px;
    margin-top:10px;
    margin-bottom:10px;
    border-radius: 5px;
    background: #fae6b1;
    alignItems: center;
}

.partner-container {
    width:100%;
    margin: auto;
    margin-top:30px;
    padding:15px 10px;
    flex: 1 1;
    width: 100%;
}

.box-partner {
    display:flex;
    justify-content:space-around;
    align-items:center;
    width: 200px;
    height: 200px;
    padding: 20px;
    margin-top:10px;
    margin-bottom:10px;
    border-radius: 5px;
    background: #fae6b1;
}

.partners{
    height: 100%;
    margin: 10px 20px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
}

/*Responsive Start*/
@media screen and (max-width: 900px){
.box{
    width: 20rem;
    right: 8%;
}

.services-container {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top:30px;
    padding:25px 50px;
    flex: 1 1;
    width: 100%;
}


.partner-container {
    width:100%;
    margin: auto;
    margin-top:30px;
    padding:15px 10px;
    flex: 1 1;
    width: 100%;
}

.box-partner {
   display:flex;
   justify-content:space-around;
   align-items:center;
   width: 100px;
   height: 100px;
   padding: 20px;
   margin-top:10px;
   margin-bottom:10px;
   border-radius: 5px;
   background: #fae6b1;
}

.partners{
    height: 100%;
    margin: 10px 20px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
        
}
}
@media screen and (max-width: 600px){
.chef{
    width: 40%;
    height: 200px;
    margin-right:20px;
    object-fit:fit;
}

.chef2{
    width: 50%;
    height: 200px;
    object-fit:fit;
}

.cow{
    width: 30%;
    height: 100px;
    margin-right:10px;
    object-fit:fit;
 }

.box{
    width: 10rem;
}

.services-container {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top:30px;
    padding:25px 50px;
    flex: 1 1;
    width: 100%;
}

.partner-container {
   
   width:100%;
   margin: auto;
   margin-top:30px;
   padding:15px 10px;
   flex: 1 1;
   width: 100%;
}

.box-partner {
   display:flex;
   justify-content:space-around;
   align-items:center;
   width: 60px;
   height: 60px;
   padding: 20px;
   margin-top:10px;
   margin-bottom:10px;
   border-radius: 5px;
   background: #fae6b1;
}

.partners{
    height: 100%;
    margin: 10px 20px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content: space-around;
        
}
}
@media screen and (max-width: 300px){

.chef{
    width: 50%;
    height: 200px;
    margin-right:20px;
    object-fit:fit;
}

.chef2{
    
    width: 50%;
    height: 100px;
    object-fit:fit;
}

.cow{
    width: 40%;
    height: 100px;
    margin-right:10px;
    object-fit:fit;
}

.box{ 
        width: 10rem;
    }

.services-container {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-top:30px;
    padding:25px 50px;
    flex: 1 1;
    width: 100%;
}


.partner-container {
   
   width:100%;
   margin: auto;
   margin-top:30px;
   padding:15px 10px;
   flex: 1 1;
   width: 100%;
}

.box-partner {
   display:flex;
   justify-content:space-around;
   align-items:center;
   width: 40px;
   height: 40px;
   padding: 20px;
   margin-top:10px;
   margin-bottom:10px;
   border-radius: 5px;
   background: #fae6b1;
}

.partners{
    height: 100%;
    margin: 10px 20px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
        
}
}

`}</style>
        </>
    );
};

export default Home;