import React from 'react';
import styled from 'styled-components';

import blogs from '../../../../testData/testBlog';
import {Tile, FeatureTile} from './Tile';

const ShowBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
`;

const TileBox = styled.div`
  width: 100%;
  flex: 1;
  &:nth-child(even){
    flex: 2
  }
`;

const FeaturedBox = styled.div`
  height: 100%;
  width: 100%;
`;

const Column = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  &:nth-child(1){
    width:50%;
  };
  &:nth-child(3) {
  flex-direction: column-reverse;
  };
`;

export default ({}) => (
  <ShowBox>
    <Column>
      <FeaturedBox>
        <FeatureTile blog={blogs[1]} />
      </FeaturedBox>
    </Column>
    <Column>
      <TileBox>
        <Tile blog={blogs[2]} />
      </TileBox>
      <TileBox>
        <Tile blog={blogs[3]} />
      </TileBox>
    </Column>
    <Column>
      <TileBox>
        <Tile blog={blogs[0]} />
      </TileBox>
      <TileBox>
        <Tile blog={blogs[4]} />
      </TileBox>
    </Column>
  </ShowBox>
)
