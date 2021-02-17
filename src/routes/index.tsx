import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigIn} />
    <Route path="/signup" component={SigUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
