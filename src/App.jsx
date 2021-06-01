import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { E404 } from './pages/Errors';
import './styles/main.css';
import 'mana-font';

const App = () => {
  return (
    <section id="main">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route component={E404} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
