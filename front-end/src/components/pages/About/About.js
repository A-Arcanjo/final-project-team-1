import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../Modal/modal.js';
import { GlobalStyle } from './globalStyles.js';
import Presentation from "../../Presentation/Presentation.js";
import "./About.css";

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
height: 100vh;
background-color:#31525b;
`;

const Button = styled.button`
position: relative;
bottom:10px;
width:80%;
min-width: 100px;
margin:10rem;
padding:8px 12px;
border-radius: 4px;
border: none;
background-color: #ffa101;
color:  #31525b;
font-size: 18px;
cursor: pointer;

`;

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Presentation />
        <Button onClick={openModal}>More about us</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default About;;