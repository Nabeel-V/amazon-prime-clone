import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AmazonPrime from "./AmazonPrime";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Kids from './Components/Pages/Kids/Kids'
import Movies from "./Components/Pages/Movies/Movies";
import TvShows from "./Components/Pages/TvShows/TvShows";
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <AmazonPrime />
          </Route>
          <Route path="/home">
            <AmazonPrime />
          </Route>
          <Route path="/kids">
            <Kids />
          </Route>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
