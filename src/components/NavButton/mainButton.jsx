import styled from 'styled-components';
import React from 'react';

const ButtonFace = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};
  transition: transform 0.05s;
  &:active {
    transform: translate(10px, 10px);
  };
`;

const ClosingAnimation = 'transform 0.2s, visibility 0.5s 0.2s, margin 0.2s 0.2s';
const OpeningAnimation = 'transform 0.2s 0.2s, visibility 0.2s, margin 0.2s';
const BurgerLine = styled.div`
  width: 80%;
  height: 6px;
  background-color: white;
  transition: ${props => props.open ? OpeningAnimation : ClosingAnimation};
  margin: ${props => props.open? '-3px' : '3px'};
`;

const FirstBurgerLine = styled(BurgerLine)`
  transform: ${props => props.open ? 'rotate(45deg)' : 'none'}
`;
const MiddleBurgerLine = styled(BurgerLine)`
  visibility: ${props => props.open ? 'hidden' : 'visible'}
`;
const LastBurgerLine = styled(BurgerLine)`
  transform: ${props => props.open ? 'rotate(-45deg)' : 'none'}
`;

const BurgerBun = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const ButtonShadow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(39,40,34);
  margin-top: 10px;
  margin-left: 10px;
`;

const NavContainer = styled.div`
  position: relative;
  width: 60px;
`;

export default ({color, open, children, onClick}) => (
    <NavContainer>
        <ButtonShadow />
        {children}
        <ButtonFace onClick={onClick} color={color}>
            <BurgerBun>
                <FirstBurgerLine open={open} />
                <MiddleBurgerLine open={open}/>
                <LastBurgerLine open={open}/>
            </BurgerBun>
        </ButtonFace>
    </NavContainer>
)
