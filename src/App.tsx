import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Game />
      </div>
    </div>
  );
}

export default App;
