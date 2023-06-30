import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header() {
    return (
        <StyledHeader>
            <Wrapper>
                <Navigation>
                    <Logo src={logo} />
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                    <EnquireNow to="mailto:jv128.haribonedventures@gmail.com">Enquire Now!</EnquireNow>
                </Navigation>
            </Wrapper>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    background-color: #ffffff;
`;

const Wrapper = styled.div`
    max-width: 1240px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

const Navigation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    min-height: 115px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const StyledLink = styled(Link)`
    font-size: 25px;
    color: #5d6366;
    padding: 0px 20px;

    @media screen and (max-width: 600px) {
        margin-bottom: 20px;
    }
`;

const Logo = styled.img`
    height: 75px;
    margin-right: auto;

    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const EnquireNow = styled(Link)`
    font-size: 25px;
    background-color: #49cbde;
    padding: 10px;
    color: #ffffff;
    border-radius: 4px;
    margin-left: 20px;
`;

export default Header;
