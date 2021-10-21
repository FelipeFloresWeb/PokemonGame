import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect /* useHistory */ } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPokemonsError,
  getPokemonsSucess, selectPokemon } from '../actions/pokeActions';
import PokemonInfo from '../components/PokemonInfo';
import getAllPokemons from '../services/pokemonApi';
import Loading from '../components/Loading';
import { getItemFromLocalStorage } from '../store/storage';
// import FilterInput from '../components/FilterInput';

const POKEMONS_LENGTH = 10;

function Home(props) {
  const { apiError, getPokemons, allPokemonsArr,
    error, select, isLoading, selectedPokemon, isSelected } = props;

  const [pokemonsOffset, setPokemonsOfSet] = useState(0);
  const [pokemonsInScreen, setPokemonsInScreen] = useState(POKEMONS_LENGTH);
  const [redirect, setRedirect] = useState(false);

  const POKEMONS_ARR_LENGTH = allPokemonsArr.length;
  const LIMIT_POKEMONS_SCREEN = pokemonsInScreen === POKEMONS_ARR_LENGTH;
  // const IS_SELECTEED = selectedPokemon.name;

  const pokemons = [];
  const showingPokemons = () => {
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
    /* if (localStorage.myPokemon) {
      const savedPokemon = getItemFromLocalStorage('myPokemon');
      select(savedPokemon);
    } */
  }, []);

  function selectCurrPokemon(event) {
    // const nextpageButton = document.getElementById('next-page');
    // nextpageButton.classList.remove('display-off');
    const { id } = event.target;
    const pokemonFound = pokemons.find((pokemon) => pokemon.name === id);
    console.log(pokemonFound);
    if (selectedPokemon.name === id) return;
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

  const nextPage = () => {
    setRedirect(true);
  };

  const recoverPokemon = () => {
    const savedPokemon = getItemFromLocalStorage('myPokemon');
    select(savedPokemon);
  };

  const getPokemonType = (pokemon) => {
    const type = pokemon.types[0].type.name;
    switch (type) {
    case 'water':
      return 'rgb(26, 218, 147)';
    case 'fire':
      return 'red';
    case 'normal':
      return 'rgb(195, 192, 63)';
    case 'bug':
      return 'green';
    case 'electric':
      return 'rgb(255, 158, 0)';
    case 'ground':
      return 'rgb(115, 81, 53)';
    case 'poison':
      return 'rgb(34, 210, 13)';
    case 'grass':
      return 'rgb(146, 223, 46)';
    case 'fighting':
      return 'rgb(155, 166, 162)';
    case 'psychic':
      return 'rgb(105, 29, 144)';
    case 'rock':
      return 'rgb(94, 93, 92)';
    case 'dark':
      return 'rgb(72, 24, 72)';
    case 'fairy':
      return 'rgb(236, 61, 166)';
    default:
      break;
    }
  };

  if (error) return <h2>{ error }</h2>;
  if (isLoading) return <h2><Loading /></h2>;
  if (redirect) return <Redirect to="/PokemonGame/BattlePreparation" />;

  return (
    <div id="main">
      <h2>Welcome to Pokemon game!</h2>
      <h3>
        Here you will find a lot of information about each pokemon.
        We have a list of 500 pokemons.
      </h3>
      <h2>To start select a pokemon...</h2>
      {localStorage.myPokemon && !isSelected
        ? (
          <div id="recover-pokemon">
            <h2>Do you already have a pokemon that is in training want to keep it?</h2>
            <button type="button" onClick={ recoverPokemon }>Yes I want!</button>
          </div>
        )
        : '' }
      <div className="card">
        <PokemonInfo pokemon={ selectedPokemon } />
      </div>
      {/* <FilterInput /> error component */}
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
      <button
        id="next-page"
        className={ !isSelected ? 'display-off' : '' }
        onClick={ nextPage }
        type="button"
      >
        Prepare for battle...
      </button>
      <div className="pokemon-cards">
        { showingPokemons().map((pokemon) => (
          <label key={ pokemon.name } htmlFor={ pokemon.name }>
            <div
              style={ { backgroundColor: getPokemonType(pokemon) } }
              className="pokeCard"
            >
              <div id="card-text">
                { }
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
  { isLoading, selectedPokemon, allPokemonsArr, isSelected } }) => ({
  isLoading,
  selectedPokemon,
  allPokemonsArr,
  isSelected,
});

Home.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
