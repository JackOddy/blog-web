import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FeatureTile } from '../src/components/Index/Showcase/Tile';
import blogs from '../testData/testBlog';
import Showcase from '../src/components/Index/Showcase/index';

const Box = styled.div`
  height: 500px;
  width: 500px;
`


storiesOf('Blog tile', module)
                  .add('with blog', () => (
                    <Box>
                      <FeatureTile blog={blogs[1]} />
                    </Box>
                  ))

storiesOf('Showcase', module)
  .add('with blog', () => <Showcase blog={blogs} />)
