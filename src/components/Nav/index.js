import React from 'react';
import styled from 'styled-components';
import logoFile from '../../../static/logo-transparent.png'

const NavContainer = styled.div`
  width: 100%;
  height: ${({shrink}) => shrink ? 120 : 350}px;
  background: white;
  transition: height 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: solid #565656;
`

const NavList = styled.ul`
    margin: 15px;
    margin-bottom: 5px;
    padding: 10px;
    padding-bottom: 5px;
    font-family: 'Fredoka One';
    font-size: x-large;
    list-display-type: none;
`;

const NavItem = styled.li`
  display: inline;
  margin: 0px 20px 0px 20px;
  color: #565656;
`

const LogoContainer = styled.div`
    border-radius: 100%;
    border: solid #565656;
    background: white;
    width: 200px;
    height: 200px;
    bottom: 0;
    align-self: flex-end;
    margin-bottom: -100px;
position: relative;
`
const Logo = styled.img`
  height: 125%;
  width: 125%;
position: absolute;
top: -12.5%;
left: -12.5%;
`

export default () =>
        (
                <NavContainer>
                <NavList left>
                {['Cooking', 'Coding'].map(item => <NavItem>{item}</NavItem>) }
                </NavList>
                    <LogoContainer>
                        <Logo src={logoFile} />
                    </LogoContainer>
                <NavList>
                {['About', 'Contact'].map(item => <NavItem>{item}</NavItem>) }
                </NavList>
                </NavContainer>
        )
