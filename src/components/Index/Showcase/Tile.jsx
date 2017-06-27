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
  background-color: rgba(120, 120, 255, 0.5);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  border-radius: 0 0 3px 0;
  font-family: nunito-semibold;
  overflow: hidden;
`;

const Blurb = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  height: 20%;
  width: 100%;
  color: white;
  column-count: 2;
`;

const Teaser = styled.p`
  margin: 0;
  padding: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'josefin sans';
`

export default ({blog}) => (
  <ArbitrarySquare>
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
  </ArbitrarySquare>
)
