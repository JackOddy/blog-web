import React from 'react';
import { Route, Switch } from 'react-router';

import Index from './components/Index/index';

export default () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/skills" exact component={Skills} />
    <Route component={null} />
  </Switch>
);
