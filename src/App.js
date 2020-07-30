import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import Photography from './Photography/Photography';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Photography></Photography>
    </div>
  );
}

export default App;
