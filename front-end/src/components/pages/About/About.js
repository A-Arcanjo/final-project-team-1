import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../Modal/modal.js';
import { GlobalStyle } from './globalStyles.js';
import Presentation from "../../Presentation/Presentation.js";
import "./About.css";

const Container = styled.div`
  display: flex;
  justify-content: ;
  align-items: center;
  height: 100vh;
  background-color:#31525b;;
`;

const Button = styled.button`
position: absolute;
  bottom: 10%;
  right:100px;
  width: 14%;
  height:7%;
  min-width: 100px;
  padding:8px 27px;
  border-radius: 4px;
  border: none;
  background-color: #ffa101;
  color:  #31525b;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 900px){
    position: absolute;
  bottom: 80px;
  left: 60px;
  width: 16%;
  height:8%;
    margin-bottom: 5px;
    font-size:15px;
  };
  @media screen and (max-width: 750px){
    position: absolute;
  bottom: 80px;
  left: 60px;
  width: 16%;
  height:8%;
      min-width: 100px;
      padding:4px 7px;
      border-radius: 4px;
      border: none;
      background-color: #ffa101;
      color:  #31525b;
      font-size: 12px;
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