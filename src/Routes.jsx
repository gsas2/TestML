import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ListItemsPage from './pages/ListItemsPage/ListItemsPage';
import ItemDetailsPage from './pages/ItemDetailsPage/ItemDetailsPage';

/**
 * @description Main route table for the website.
 */
const Routes = ({ errorPageTranslations }) => (
  <Switch>
    <Route exact path="/items" component={ListItemsPage} />
    <Route exact path="/items/:id" component={ItemDetailsPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export default Routes;
