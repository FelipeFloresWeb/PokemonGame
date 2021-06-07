import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {selectPokemon, getPokemonsThunk, getPokemonsInfoThunk} from './actions/pokeActions';
import PokemonInfo from './components/PokemonInfo';

class App extends Component {
constructor() {
  super();
  this.state = {
    limit: 20,
    offset: 0,
  }
}

  componentDidMount() {
    const { getPokemons } = this.props;
    const{ limit, offset } = this.state;
    getPokemons(limit, offset);
  }

  nextPokemons = async () => {
    const { getPokemons } = this.props;
    await this.setState((previousState) => ({
      offset: previousState.offset + 20,
    }));
    const { offset, limit } = this.state;
    getPokemons(limit, offset);
  }

  previousPokemons = async () => {
    const { getPokemons } = this.props;
    if (this.state.offset === 0) return true;
    await this.setState((previousState) => ({
      offset: previousState.offset - 20,
    }));
    const { offset, limit } = this.state;
    getPokemons(limit, offset);
  }

  pokemonsInfo = async (url) => {
    const { getPokemonsInfo } = this.props;
    getPokemonsInfo(url);
  }
  
  render() {
    const { pokemons, selectedPokemon, select, isLoading, pokemonsInfo, getInfoPokemons } = this.props;
    if (isLoading) return (
      <div className="App">
      <h2>Pokemon Wiki</h2>
      <h2>Loading Pokemons...</h2>
      </div>
    );
    return (
      <div className="App">
       <h2>Pokemon Wiki</h2>
       <h3>Pokemon selecionado: {selectedPokemon}</h3>
       <div className="card">
       <PokemonInfo info = {pokemonsInfo} />
       </div>
       <button type='button' onClick={() => this.previousPokemons()}>See previous pokemons...</button>
       <button type='button' onClick={() => this.nextPokemons()}>See next pokemons...</button>
       { pokemons.map((pokemon, index) => (
         <div key={index}>
         <div onClick={() => select(pokemon.name)}>{pokemon.name}</div>
         <button type="button" onClick={() => getInfoPokemons(pokemon.url) }>More Informations...</button>        
         </div>
       )) }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPokemons: (limit, offset) => dispatch(getPokemonsThunk(limit, offset)),
  select: (pokemon) => dispatch(selectPokemon(pokemon)),
  getInfoPokemons: (url) => dispatch(getPokemonsInfoThunk(url)),
});

const mapStateToProps = ({pokeReducer: { pokemons, selectedPokemon, isLoading, pokemonsInfo }}) => ({
  isLoading,
  pokemons,
  selectedPokemon,
  pokemonsInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
