import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import BattlePreparation from './pages/BattlePreparation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/PokemonGame" component={ Home } />
            <Route
              exact
              path="/PokemonGame/BattlePreparation"
              component={ BattlePreparation }
            />
          </Switch>
        </BrowserRouter>
        <h2>Created By Felipe Flores</h2>
        <p>Datas from: https://pokeapi.co/</p>
      </div>
    );
  }
}

export default App;
