import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import blogs from '../testData/testBlog';
import Feature from '../src/components/Index/Feature/index';
import Blog from '../src/components/Blog/index';

const Box = styled.div`
  padding: 20px;
  width: 90%;
  height: 100%;
  position: absolute;
`;


storiesOf('Blog Feature Component', module)
  .add('List with multiple colors', () => (
    <Box>
      <Feature color={"rgb(249,38,114)"}/>
      <Feature color={"rgb(102,217,239)"}/>
      <Feature color={"rgb(166,226,46)"}/>
      <Feature color={"rgb(253,151,31)"}/>
      <Feature color={"rgb(249,38,114)"}/>
    </Box>
  ));

storiesOf('Blog View', module)
  .add('Blog Header', () => (
    <Box>
      <Blog color="rgb(102,217,239)" />
    </Box>
  ));

storiesOf('Mark Down parsing', module)
  .add('Example', () => (
    <div> yet to be completed </div>
  ))
  .add('<h1 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<h2 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<h3 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<h4 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<h5 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<h6 />', () => (
    <div> yet to be completed </div>
  ))
  .add('<hr />', () => (
    <div> yet to be completed </div>
  ))
  .add('<p />', () => (
    <div> yet to be completed </div>
  ))
  .add('<ul />', () => (
    <div> yet to be completed </div>
  ))
  .add('<ol />', () => (
    <div> yet to be completed </div>
  ))
  .add('<li />', () => (
    <div> yet to be completed </div>
  ));
