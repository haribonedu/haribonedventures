import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import aboutBackgroundImage from '../assets/images/about_background_image.png';
import Header from '../components/Header';

function About() {
    return (
        <>
            <Header />
            <Container>
                <LeftContainer>
                    <InformationContainer>
                        <Title>Education x Adventures</Title>
                        <Body>
                            Welcome to Haribon Edventures! We will
                            take you to fascinating places where
                            you will learn deeply about the Filipino
                            history, culture, and so much more!
                        </Body>
                        <EnquireNow to="mailto:jv128.haribonedventures@gmail.com">Tara! Pasyal Tayo!</EnquireNow>
                    </InformationContainer>
                </LeftContainer>
                <RightContainer />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    min-height: calc(100vh - 115px);

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff7f12;

    @media (max-width: 700px) {
        width: 100%;
    }

    @media (min-width: 701px) {
        width: 700px;
    }
`;

const InformationContainer = styled.div`
    padding: 40px;
`;

const Title = styled.p`
    color: #ffffff;
    margin-bottom: 20px;

    @media (max-width: 700px) {
        font-size: 38px;
    }

    @media (min-width: 701px) {
        font-size: 95px;
    }
`;

const Body = styled.p`
    color: #ffffff;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 20px;
`;

const EnquireNow = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    background-color: #49cbde;
    color: #ffffff;
    padding: 20px;
    border: 0;
    border-radius: 4px;
`;

const RightContainer = styled.div`
    flex: 1;
    background: url(${aboutBackgroundImage}) no-repeat center; 
    background-size: cover;
`;

export default About;
