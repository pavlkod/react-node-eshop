import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/const";

const Approuter = () => {
  const isAuthorized = false;
  return (
    <Switch>
      {isAuthorized
        ? authRoutes.map(({ Component, ...props }) => <Route key={props.path} {...props} component={Component} />)
        : publicRoutes.map(({ Component, ...props }) => <Route key={props.path} {...props} component={Component} />)}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default Approuter;
