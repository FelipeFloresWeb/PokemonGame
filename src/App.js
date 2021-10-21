import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import BattlePreparation from './pages/BattlePreparation';
import BattleCamp from './pages/BattleCamp';

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
            <Route
              exact
              path="/PokemonGame/BattleCamp"
              component={ BattleCamp }
            />
          </Switch>
        </BrowserRouter>
        <h2 style={ { marginTop: '5%' } }>Created By Felipe Flores</h2>
        <a href="https://github.com/FelipeFloresWeb/">GitHub</a>
        <p>Datas from: https://pokeapi.co/</p>
      </div>
    );
  }
}

export default App;
