import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {selectPokemon, getPokemonsThunk} from './actions/pokeActions';
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

  previousPokemons   = async () => {
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

  selectPokemon = (event) => {
    const { pokemonsInfo, select } = this.props;
    const { id } = event.target;
    console.log(event.target);
    const pokemonFound = pokemonsInfo.find((pokemon) => {
      return pokemon.name === id
    });
    if (pokemonFound) select(pokemonFound);
    
  }
  
  render() {
    const { pokemons, selectedPokemon, isLoading } = this.props;
    if (isLoading) return (
      <div className="App">
      <h2>Pokemon Wiki</h2>
      <h3>Pokemon selecionado: {selectedPokemon.name}</h3>
      <div className="card">
      <PokemonInfo info = {selectedPokemon} />
      </div>
      <h2>Loading Pokemons...</h2>
      </div>
    );
    return (
      <div className="App">
       <h2>Pokemon Wiki</h2>
       <h3>Pokemon selecionado: {selectedPokemon.name}</h3>
       <div className="card">
       <PokemonInfo info = {selectedPokemon} />
       </div>
       <button type='button' onClick={() => this.previousPokemons()}>See previous pokemons...</button>
       <button type='button' onClick={() => this.nextPokemons()}>See next pokemons...</button>
       { pokemons.map((pokemon) => (
         <label key={pokemon.name} htmlFor={pokemon.name}>
           <input className="input-radio" id={pokemon.name} onClick={this.selectPokemon} name="selected" type="radio" value={pokemon.name}/>
         <div className="pokemons" key={pokemon.name}>
         <div className="pokeCard" >
           <p>{`Click here to select ${pokemon.name}...`}</p>
           </div>
         </div>
         </label>
       )) }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPokemons: (limit, offset) => dispatch(getPokemonsThunk(limit, offset)),
  select: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const mapStateToProps = ({pokeReducer: { pokemons, selectedPokemon, isLoading, pokemonsInfo }}) => ({
  isLoading,
  pokemons,
  selectedPokemon,
  pokemonsInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
