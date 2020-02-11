import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";



import { isAuthenticated } from "./services/auth";
import UserLogged from "./components/UserLogged/index";
// import SignIn from "./components/SignIn/index";
import Inicio from "./components/Inicio/index";
import Dieta from "./components/Dieta/index";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserLogged} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <PrivateRoute path="/inicio" component={Inicio}  />
      <PrivateRoute path="/dieta" component={Dieta} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;