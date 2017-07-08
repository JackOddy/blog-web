import React from 'react';
import styled, {injectGlobal, ThemeProvider}from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import blogs from '../testData/testBlog';
import markDown from './mdExample';
import mdCode from './mdCodeExample';
import goCode from './goExample';
import Feature from '../src/components/Index/Feature';
import Blog from '../src/components/Blog/index';
import NavButton from '../src/components/NavButton'
import {HomeItem, EmailItem, LinkedInItem, TwitterItem} from '../src/components/NavButton/NavItems';
import { compile } from '../src/MarkDownCompiler';

const LimitBox = styled.div`
  padding: 20px;
  width: 80%;
  height: 100%;
  position: absolute;
`;

const Box = ({children}) =>(
    <ThemeProvider theme={colors}>
        <LimitBox>
            {children}
        </LimitBox>
    </ThemeProvider>

);

injectGlobal`
  body{
    background-color: #CDC3B7;
  }
`;

const colors = {
    blue: 'rgb(102,217,239)'
  , pink: 'rgb(249,38,114)'
  , orange: 'rgb(253,151,31)'
  , green: 'rgb(166,226,46)'
  , grey: 'rgb(39,40,34)'
}

storiesOf('Nav Button', module)
    .add('Closed Nav', () => (
        <Box>
            <NavButton shadow={colors.grey} color={colors.pink} />
        </Box>
    ))
    .add('Open Nav', () => (
        <Box>
            <NavButton open shadow={colors.grey} color={colors.pink} />
        </Box>
    ))
    .add('HomeItem', () => (
        <Box>
            <HomeItem/>
        </Box>
    ))
    .add('MailItem', () => (
        <Box>
            <EmailItem/>
        </Box>
    ))
    .add('LinkedInItem', () => (
        <Box>
            <LinkedInItem/>
        </Box>
    ))
    .add('TwitterItem', () => (
        <Box>
            <TwitterItem/>
        </Box>
    ))

const NavBox = styled.div`
  width: 95%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

storiesOf('Blog Feature Component', module)
  .add('List with multiple colors', () => (
    <div>
      <NavBox>
        <NavButton open shadow={colors.grey} color={colors.pink} />
      </NavBox>
      <Box>
        <Feature color="rgb(249,38,114)"/>
        <Feature color="rgb(102,217,239)"/>
        <Feature color="rgb(166,226,46)"/>
        <Feature color="rgb(253,151,31)"/>
        <Feature color="rgb(249,38,114)"/>
      </Box>
    </div>
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
          {compile("`console.log('hello')`").tree}
      </div>
      ))
