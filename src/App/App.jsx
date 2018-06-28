import React from "react";
import "./App.css";
import Search from "../Search";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Redirect } from "react-router-dom";
import Login, { Callback } from "../Login";
import { history } from "../store";

const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const OnlyPublicRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const App = ({ loggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Search} loggedIn={loggedIn} />
        <OnlyPublicRoute path="/login" component={Login} loggedIn={loggedIn} />
        <OnlyPublicRoute
          path="/callback"
          component={Callback}
          loggedIn={loggedIn}
        />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default App;
