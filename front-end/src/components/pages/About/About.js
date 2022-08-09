import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../modal.js';
import { GlobalStyle } from './globalStyles.js';
import Presentation from "../../Presentation/Presentation.js";
import "./About.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:#31525b;;
`;

const Button = styled.button`
position:relative;
right:57%;
top:27%;
  min-width: 100px;
  padding:4px 7px;
  border-radius: 4px;
  border: none;
  background-color: #ffa101;
  color:  #31525b;
  font-size: 24px;
  cursor: pointer;
  @media screen and (max-width: 750px){
    position:relative;
    right:47%;
    top:37%;
      min-width: 100px;
      padding:4px 7px;
      border-radius: 4px;
      border: none;
      background-color: #ffa101;
      color:  #31525b;
      font-size: 24px;
      cursor: pointer;
    
}
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

export default About;