import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        <h2>Created By Felipe Flores</h2>
        <p>Datas from: https://pokeapi.co/</p>
      </div>
    );
  }
}

export default App;
