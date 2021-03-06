// React dependencies
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components and Routing
import Photography from './Photography/Photography';
import Film from './Film/Film';
// import Sculpture from './Sculpture/Sculpture';
import ShoppingPack from './ShoppingPack/ShoppingPack';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux components
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Photography />} />
            <Route path="/film" exact component={() => <Film />} />
            {/* <Route path="/sculpture" exact component={() => <Sculpture />} /> */}
            <Route path="/pack" exact component={() => <ShoppingPack />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;