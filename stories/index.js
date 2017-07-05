import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import blogs from '../testData/testBlog';
import markDown from './mdExample';
import Feature from '../src/components/Index/Feature/index';
import Blog from '../src/components/Blog/index';
import { compile } from '../src/MarkDownCompiler';

const Box = styled.div`
  padding: 20px;
  width: 80%;
  height: 100%;
  position: absolute;
`;


storiesOf('Blog Feature Component', module)
  .add('List with multiple colors', () => (
    <Box>
      <Feature color="rgb(249,38,114)"/>
      <Feature color="rgb(102,217,239)"/>
      <Feature color="rgb(166,226,46)"/>
      <Feature color="rgb(253,151,31)"/>
      <Feature color="rgb(249,38,114)"/>
    </Box>
  ));

storiesOf('Blog View', module)
  .add('Blog Header', () => (
    <Box>
      <Blog color="rgb(102,217,239)" />
    </Box>
  ))
  .add('Blog with Body', () => (
    <Box>
      <Blog body={markDown} color="rgb(102,217,239)" />
    </Box>
  ));
storiesOf('Mark Down parsing', module)
  .add('Example', () => (
    <div>{compile(markDown).tree}</div>
  ))
  .add('<h1 />', () => (
    <div>{compile('# Testing a Header Component').tree}</div>
  ))
  .add('<h2 />', () => (
    <div>{compile('## Testing a Header Component').tree}</div>
  ))
  .add('<h3 />', () => (
    <div>{compile('### Testing a Header Component').tree}</div>
  ))
  .add('<h4 />', () => (
    <div>{compile('#### Testing a Header Component').tree}</div>
  ))
  .add('<h5 />', () => (
    <div>{compile('##### Testing a Header Component').tree}</div>
  ))
  .add('<h6 />', () => (
    <div>{compile('###### Testing a Header Component').tree}</div>
  ))
  .add('<hr />', () => (
    <div>
      {compile('# Title with Horizonal Rule\n ---').tree}
    </div>
  ))
  .add('<p />', () => (
    <div>
      {compile('simple p tag for simple text').tree}
    </div>
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
