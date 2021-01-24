import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigIn} />
    <Route path="/signup" component={SigUp} />
  </Switch>
);

export default Routes;
