import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Tile from '../src/components/Index/Showcase/Tile';
import testBlog from '../testData/testBlog';


storiesOf('Blog tile', module)
  .add('with blog', () => <Tile blog={testBlog} />)
