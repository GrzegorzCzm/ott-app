import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

// import "./App.css";
import Player from "./components/player/Player";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Alert from "./components/alert/Alert";

interface RenderActionProps {
  location: string;
}

const PrivateRoute = ({ children, userAuthenticated, ...rest }: any) => {
  const render = ({ location }: RenderActionProps) =>
    userAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );

  return <Route {...rest} render={render} />;
};

const App = () => {
  const { userAuthenticated } = useSelector((state: any) => state.auth);

  return (
    <Router>
      <Alert />
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute
            path="/player/:id"
            userAuthenticated={userAuthenticated}
          >
            <Player />
          </PrivateRoute>
          <PrivateRoute path="/" userAuthenticated={userAuthenticated}>
            <Main />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
