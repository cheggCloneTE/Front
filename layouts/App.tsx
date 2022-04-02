import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = loadable(() => import('@pages/HomePage'));

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
