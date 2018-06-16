import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ListItemsPage from './pages/ListItemsPage/ListItemsPage';

/**
 * @description Main route table for the website.
 */
const Routes = ({ errorPageTranslations }) => (
  <Router>
    <Switch>
      <Route exact path="/items" component={ListItemsPage} />
      {/* <Route exact path="/items/:id" component={ItemDetailsPage} /> */}
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;
