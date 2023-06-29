import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeBackgroundImage from '../assets/images/home_background_image.png';

function Home() {
  return (
    <BackgroundImageContainer>
      <StripeAndButtonContainer>
        <Stripe>Education x Adventures</Stripe>
        <Button to="/about">Tara! Pasyal Tayo!</Button>
      </StripeAndButtonContainer>
    </BackgroundImageContainer>
  );
}

const BackgroundImageContainer = styled.div`
    background: url(${homeBackgroundImage}) no-repeat bottom center; 
    background-size: cover;
    width: 100%;
    height: calc(100vh - 140px);
`;

const StripeAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Stripe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 100%;
    background-color: #ff7f12;
    margin-bottom: 20px;
    font-size: 45px;
    letter-spacing: 10px;
    padding: 20px 0;
`;

const Button = styled(Link)`
    background-color: #5d6366;
    padding: 10px 40px;
    border: 0;
    color: #ffffff;
    font-size: 40px;
`;

export default Home;
