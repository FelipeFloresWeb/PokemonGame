import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemonsError,
  getPokemonsSucess, selectPokemon } from '../actions/pokeActions';
import PokemonInfo from '../components/PokemonInfo';
import getAllPokemons from '../services/pokemonApi';
import Loading from '../components/Loading';

const POKEMONS_LENGTH = 20;

function Home(props) {
  const { apiError, getPokemons, allPokemonsArr,
    error, select, isLoading, selectedPokemon } = props;

  const [pokemonsOffset, setPokemonsOfSet] = (useState(0));
  const [pokemonsInScreen, setPokemonsInScreen] = (useState(POKEMONS_LENGTH));

  const POKEMONS_ARR_LENGTH = allPokemonsArr.length;
  const LIMIT_POKEMONS_SCREEN = pokemonsInScreen === POKEMONS_ARR_LENGTH;

  const showingPokemons = () => {
    const pokemons = [];
    for (let index = pokemonsOffset; index < pokemonsInScreen; index += 1) {
      pokemons.push(allPokemonsArr[index]);
    }
    return pokemons;
  };

  useEffect(() => {
    const load = async () => {
      try {
        const apiResult = await getAllPokemons();
        const sortResult = apiResult.sort((a, b) => a.id - b.id);
        await getPokemons(sortResult);
      } catch (err) {
        apiError(err);
      }
    };
    load();
  }, []);

  function selectCurrPokemon(event) {
    const { id } = event.target;
    const pokemonFound = allPokemonsArr.find((pokemon) => pokemon.name === id);
    if (pokemonFound) select(pokemonFound);
  }

  const nextPokemons = () => {
    setPokemonsOfSet(pokemonsOffset + POKEMONS_LENGTH);
    setPokemonsInScreen(pokemonsInScreen + POKEMONS_LENGTH);
  };

  const previousPokemons = () => {
    setPokemonsOfSet(pokemonsOffset - POKEMONS_LENGTH);
    setPokemonsInScreen(pokemonsInScreen - POKEMONS_LENGTH);
  };

  const nexPage = () => {
    ;
  };

  if (error) return <h2>{ error }</h2>;
  if (isLoading) return <h2><Loading /></h2>;
  return (
    <div>
      <h2>Welcome to Pokemon game!</h2>
      <h3>
        Here you will find a lot of information about each pokemon.
        We have a list of 500 pokemons.
      </h3>
      <h2>To start select a pokemon...</h2>
      <div className="card">
        <PokemonInfo pokemon={ selectedPokemon } />
      </div>
      <button type="button" onClick={ nexPage }>
        <Link to="/battlePreparation">
          Next!
        </Link>
      </button>
      <button
        type="button"
        disabled={ pokemonsOffset === 0 }
        className="pokeButton"
        onClick={ previousPokemons }
      >
        See previous pokemons...
      </button>
      <button
        type="button"
        disabled={ LIMIT_POKEMONS_SCREEN }
        className="pokeButton"
        onClick={ nextPokemons }
      >
        See next pokemons...
      </button>
      <div className="pokemon-cards">
        { showingPokemons().map((pokemon) => (
          <label key={ pokemon.name } htmlFor={ pokemon.name }>
            <div className="pokeCard">
              <div id="card-text">
                <input
                  className="input-radio pokeCard pokemons"
                  id={ pokemon.name }
                  onClick={ selectCurrPokemon }
                  name="selected"
                  type="radio"
                  value={ pokemon.name }
                />
                <h3>{`Click here to select ${pokemon.name}`}</h3>
              </div>
              <div id="card-image">
                <img
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                />
              </div>
            </div>
          </label>
        )) }
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPokemons: (payload) => dispatch(getPokemonsSucess(payload)),
  apiError: (payload) => dispatch(getPokemonsError(payload)),
  select: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const mapStateToProps = ({ pokeReducer:
  { isLoading, selectedPokemon, allPokemonsArr } }) => ({
  isLoading,
  selectedPokemon,
  allPokemonsArr,
});

Home.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
