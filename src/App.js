import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photography from './Photography/Photography';
import Film from './Film/Film';
// import Sculpture from './Sculpture/Sculpture';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Photography />} />
          <Route path="/film" exact component={() => <Film />} />
          {/* <Route path="/sculpture" exact component={() => <Sculpture />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;