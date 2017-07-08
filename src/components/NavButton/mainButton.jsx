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

const BurgerLine = styled.div`
  width: 80%;
  height: 6px;
  margin: 3px;
  background-color: white;
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

export default ({color, children, onClick}) => (
    <NavContainer>
        <ButtonShadow />
        {children}
        <ButtonFace onClick={onClick} color={color}>
            <BurgerBun>
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />
            </BurgerBun>
        </ButtonFace>
    </NavContainer>
)
