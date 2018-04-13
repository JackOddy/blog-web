import React from 'react';
import styled, {injectGlobal, ThemeProvider}from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navbar from '../src/components/Nav'
import Page from '../src/components/Page'

storiesOf('Navbar', module)
    .add('Initial', () => (
        <div>
        <Navbar>
        </Navbar>
        <Page/>
        </div>
    ))
