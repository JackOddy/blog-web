import React from 'react';
import styled from 'styled-components';
import {FeaturePane, FeatureBlurb} from '../Index/Feature/index';
import { compile } from '../../MarkDownCompiler';

const Header = styled.div`
  height: 600px;
  position: relative;
`;

const Title = styled.h1`
  margin: 10px;
  margin-bottom: -10px;
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
const MetaLine = styled(FeatureBlurb)`
  height: 30px;
  position: absolute;
  bottom: 40px;
  left: 40px;
  background-color: white;
  box-shadow: 20px 20px rgb(39,40,34);
  display: flex;
align-items: center;
justify-content: space-around;
`;

const Text = styled.p`
  color: rgb(39,40,34);
  font-family: nunito-extralight;
`;
const Body = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(255,255,255,0.7);
  transform: translate(10px,10px);
`

const Meta = ({label, data}) => (
  <Text>{label}: {data}</Text>
)
export default ({color, body}) =>(
  <div>
    <Header>
      <FeaturePane color={color}>
        <MetaLine>
          <Meta label="tag" data="opinion"/>
          <Meta label="published" data="jul 17"/>
        </MetaLine>
      </FeaturePane>
    </Header>
    <Body>
      {body && compile(body).tree}
    </Body>
  </div>
)
