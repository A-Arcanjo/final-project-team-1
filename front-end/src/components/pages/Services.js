import React from "react";
import Cards from "../../components/Cards/Cards.js";
import services from "../images/services.jpg";

const About = () => {
    return (
        <>
            <img style={{ padding: '60px' }} alt="" src={services} className="blueberry" />
            <Cards />
        </>

    );
};

export default About;