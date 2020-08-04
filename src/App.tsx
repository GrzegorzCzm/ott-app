import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Player from "./components/player/Player";
import VideoList from "./components/videoList/VideoList";
import Splash from "./components/splash/Splash";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Video list</Link>
            </li>
            <li>
              <Link to="/player">Player</Link>
            </li>
            <li>
              <Link to="/splash">Splash</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/player">
            <Player />
          </Route>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/">
            <VideoList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
