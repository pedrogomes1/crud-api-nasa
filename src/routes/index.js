import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import InterestList from '../pages/InterestList';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/interestlist" exact component={InterestList} />
      </Switch>
    </BrowserRouter>
  );
}
