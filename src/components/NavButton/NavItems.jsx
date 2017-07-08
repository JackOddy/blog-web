import React from 'react';
import styled from 'styled-components';
import Home from 'react-icons/lib/fa/home'
import Mail from 'react-icons/lib/fa/envelope-o'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Twitter from 'react-icons/lib/fa/twitter'

const colors = {
    blue: 'rgb(102,217,239)'
  , pink: 'rgb(249,38,114)'
  , orange: 'rgb(253,151,31)'
  , green: 'rgb(166,226,46)'
  , grey: 'rgb(39,40,34)'
}
export const ItemBox = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${colors.grey};
  padding: 5px;
  border-radius: 100%;
  position: absolute;
  margin-left: 15px;
  transition: margin-top 0.3s;
  margin-top: ${props => props.offset}
`;

const HomeIcon = styled(Home)`
  color: ${colors.blue};
  height: 100%
  width: 100%;
`;

const EmailIcon = styled(Mail)`
  color: ${colors.green};
  height: 100%
  width: 100%;
  margin-top: -1px;
`;
const LinkedIn = styled(Linkedin)`
  color: ${colors.pink};
  height: 100%
  width: 100%;
`;
const TwitterIcon = styled(Twitter)`
  color: ${colors.orange};
  height: 100%
  width: 100%;
`;
const NavItem = (Props) => (
    <ItemBox offset={Props.offset}>
        <Props.icon /> 
    </ItemBox>
);

export const HomeItem = ({open}) => (
  <NavItem icon={HomeIcon} offset={ open ? '65px' : '15px'} />
);

export const EmailItem = ({open}) => (
  <NavItem icon={EmailIcon} offset={open ? '105px' : '15px'} />
);

export const LinkedInItem= ({open}) => (
  <NavItem icon={LinkedIn} offset={open ? '145px' : '15px'} />
);

export const TwitterItem = ({open}) => (
  <NavItem icon={TwitterIcon} offset={open ? '185px' : '15px'} />
)

export default [HomeItem, EmailItem, LinkedInItem, TwitterItem]
