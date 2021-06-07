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
    // firstPokemons: 'There are no more pokemons...',
    // lastPokemons: 'There are no more pokemons...',
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
    }), async () => {
      if (this.state.offset > 480) {
        await this.setState({ offset: 480 })
      }
    });
    const { offset, limit } = this.state;
    getPokemons(limit, offset);
  }

  previousPokemons = async (event) => {
    const { target } = event;
    console.log(target);
    const { getPokemons } = this.props;
    if (this.state.offset === 0) {
      return true;
    }
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
    const pokemonFound = pokemonsInfo.find((pokemon) => {
      return pokemon.name === id
    });
    if (pokemonFound) select(pokemonFound);
    
  }
  
  render() {
    const { pokemons, selectedPokemon, isLoading, pokemonsInfo } = this.props;
    if (isLoading) return (
      <div className="App">
       <h2>Welcome to Pokemon game!</h2>       
       <h3>Here you will find a lot of information about each pokemon. We have a list of 500 pokemons.</h3>
       <h2>To start select a pokemon...</h2>
       <div className="card">
       <h3>Pokemon selecionado:<PokemonInfo info = {selectedPokemon} /></h3>
       </div>
       <h2>Loading Pokemons...</h2>
       </div>
    );
    return (
      <div className="App">
       <h2>Welcome to Pokemon game!</h2>       
       <h3>Here you will find a lot of information about each pokemon. We have a list of 500 pokemons.</h3>
       <h2>To start select a pokemon...</h2>
       <div className="card">
       <h3>Pokemon selecionado:<PokemonInfo info = {selectedPokemon} /></h3>
       </div>
       <button type='button' onClick={this.previousPokemons}>See previous pokemons...</button>
       <button type='button' onClick={this.nextPokemons}>See next pokemons...</button>
       { pokemonsInfo.map((pokemon) => (
         <label key={pokemon.name} htmlFor={pokemon.name}>
           <input className="input-radio pokeCard" id={pokemon.name} onClick={this.selectPokemon} name="selected" type="radio" value={pokemon.name}/>
         <div className="pokemons" key={pokemon.name}>
         <div className="pokeCard" >
           <h3>{`Click here to select ${pokemon.name}...`}</h3>
           <img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
