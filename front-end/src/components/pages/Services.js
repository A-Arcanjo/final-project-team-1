import React from "react";
import Cards from "../../components/Cards/Cards.js";
import services from "../images/services.jpg";

const About = () => {
    return (
        <>
            <img alt="" src={services} className="blueberry" />
            <Cards />
        </>

    );
};

export default About;