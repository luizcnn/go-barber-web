import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import { AuthProvider } from '../hooks/AuthContext';

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthProvider>
        <Route path="/" exact component={SignIn} />
      </AuthProvider>
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
  );
};

export default Routes;
