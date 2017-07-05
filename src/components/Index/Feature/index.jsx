import styled from 'styled-components';
import React from 'react';

const FeatureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 80px;
`;

export const FeaturePane = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position; absolute;
  height: 90%;
  top: 0;
  box-shadow: 20px 20px rgb(39,40,34);
  background-color: ${props => props.color};
  background-image: url(http://i.imgur.com/dmSW8If.png);
  background-size: contain;
`;

export const FeatureBlurb = styled.div`
    height: 170px;
    width: 250px;
    position: absolute;
    bottom: 0;
    left: 40px;
    background-color:white; 
    `;

const BlurbShadow = styled(FeatureBlurb)`
    height: 60px;
    z-index: -1;
    box-shadow: 20px 20px rgb(39,40,34);
`
const BlurbTitle = styled.h3`
  margin: 10px;
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;

const BlurbTagLine = styled.p`
  margin: 10px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
`

const BlurbUnderline = styled.hr`
  width: 90%;
  margin: auto;
border: 1px solid rgb(39,40,34);
`;

const JauntyBorder = styled.div`
position: absolute;
  height: 100%;
  width: 100%;
  padding: 5px;
  margin: -5px; 
  border: solid 1px rgb(249, 38, 114);
  transform: rotate(5deg);
    &:nth-child(2){
      transform: rotate(-2deg)
      border-color: rgb(102, 217, 239)
    }
`;

export default ({color}) => (
  <FeatureWrapper>
    <FeaturePane color={color}/>
    <FeatureBlurb>
      <BlurbTitle>Lorem Ispum Dominus Ex Deus</BlurbTitle>
      <BlurbUnderline/>
      <BlurbTagLine>
        Lorem ispum speum shutelm seculum adol delore eufom lichaneum ipschan shaler malekar
      </BlurbTagLine>
    </FeatureBlurb>
    <BlurbShadow/>
  </FeatureWrapper>
)
