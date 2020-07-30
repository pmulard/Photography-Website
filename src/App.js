import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import Photography from './Photography/Photography';

function App() {
  return (
    <div className="App">
      <div class="navbar-container justify-content-center">
        <NavBar></NavBar>
      </div>
      <div class="photography-container justify-content-center">
        <Photography></Photography>
      </div>
    </div>
  );
}

export default App;
