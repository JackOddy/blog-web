import React from 'react';
import styled from 'styled-components';

const ArbitrarySquare = styled.div`
  width: 500px;
  height: 500px;
@import url('https://fonts.googleapis.com/css?family=Nunito');
`;

const TileBox = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 1px grey;
  position: relative;
  background-image: url(${props => props.image});
  background-position: center;
  transition: background-size 0.5s;
  background-size: 180%;
  &:hover{
  transition: background-size 1s;
    background-size: 186%;
    cursor: pointer;
  }
`;

const TileTitle = styled.h2`
  padding: 5px 10px 5px 10px ;
  background-color: rgba(30, 144, 255, 0.5);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  margin-top: -5px;
  border-radius: 0 0 3px 0;
  font-family: nunito-semibold;
  overflow: hidden;
`;

const Blurb = styled.div`
  padding-top: 5px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  transition: height 1s;
  height: 20%;
  width: 100%;
  color: white;
  column-count: 2;
    &:hover{
      transition: height 1s;
      height: 30%;
    }
`;

const Teaser = styled.p`
  margin: 0;
  padding: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'josefin sans';
`

export const FeatureTile =  ({blog}) => (
    <TileBox image={blog.meta.cover}>
      <Blurb>
        <TileTitle>
          {blog.meta.title}
        </TileTitle>
        <Teaser>
        {blog.content}
        </Teaser>
      </Blurb>
    </TileBox>
)


const Blurb2 = styled(Blurb)`
column-count: 1;
height: 35px;
    &:hover{
      transition: height 1s;
      height: 100px;
    }
`;


const TileTitle2 = styled(TileTitle)`
  height:auto;
`

export const Tile =  ({blog}) => (
    <TileBox image={blog.meta.cover}>
      <Blurb2>
        <TileTitle2>
          {blog.meta.title}
        </TileTitle2>
        <Teaser>
        {blog.content}
        </Teaser>
      </Blurb2>
    </TileBox>
)
