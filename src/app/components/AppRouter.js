import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../routes';
import { MAIN_ROUTE } from '../utils/constants';

const AppRouter = () => {
  return (
    <Switch>
      {Routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
