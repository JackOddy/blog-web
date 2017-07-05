import React from 'react';
import styled, {injectGlobal}from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import blogs from '../testData/testBlog';
import markDown from './mdExample';
import mdCode from './mdCodeExample';
import goCode from './goExample';
import Feature from '../src/components/Index/Feature/index';
import Blog from '../src/components/Blog/index';
import { compile } from '../src/MarkDownCompiler';

const Box = styled.div`
  padding: 20px;
  width: 80%;
  height: 100%;
  position: absolute;
`;

const colors = {
    blue: "rgb(102,217,239)"
  , pink: "rgb(249,38,114)"
  , orange: "rgb(253,151,31)"
  , green: "rgb(166,226,46)" 
}


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
  .add('Blue Blog with Body', () => (
    <Box>
      <Blog body={markDown} color={colors.blue}/>
    </Box>
  ))
  .add('Pink Blog with Body', () => (
    <Box>
      <Blog body={markDown} color={colors.pink} />
    </Box>
  ))
  .add('Orange Blog with Body', () => (
    <Box>
      <Blog body={markDown} color={colors.orange} />
    </Box>
  ))
  .add('Green Blog with Body', () => (
    <Box>
      <Blog body={markDown} color={colors.green} />
    </Box>
  ))
  .add('Green Blog with codeSnippet', () => (
    <Box>
      <Blog body={goCode} color={colors.green} />
    </Box>
  ))
  .add('Pink Blog with codeSnippet', () => (
    <Box>
      <Blog body={goCode} color={colors.pink} />
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

storiesOf('Code Highlighting', module)
  .add('Code Block (js)', () => (
      <div>
          {compile(mdCode).tree}
      </div>
      ))
  .add('Code Block (go)', () => (
      <div>
          {compile(goCode).tree}
      </div>
      ))
  .add('inline code', () => (
      <div>
          {compile("if you want to log something then type `console.log('hello')` into your program").tree}
      </div>
      ))
