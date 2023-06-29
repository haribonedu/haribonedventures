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
                    <EnquireNow to="mailto:janetvelasco@yahoo.com">Enquire Now!</EnquireNow>
                </Navigation>
            </Wrapper>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    background-color: #ffffff;
`;

const Wrapper = styled.div`
    width: 65%;
    margin: 0 auto;
`;

const Navigation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

const StyledLink = styled(Link)`
    font-size: 25px;
    color: #5d6366;
    padding: 20px;
    margin-right: 20px;
`;

const Logo = styled.img`
    height: 75px;
    margin-right: auto;
`;

const EnquireNow = styled(Link)`
    font-size: 25px;
    background-color: #49cbde;
    padding: 10px;
    color: #ffffff;
`;

export default Header;
