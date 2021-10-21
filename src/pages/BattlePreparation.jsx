/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setOponent } from '../actions/pokeActions';
import PokemonInfo from '../components/PokemonInfo';
import { setToLocalStorage } from '../store/storage';

const DISPLAY = 'display-off';
const POKEMON_LEVEL_3 = 3;
const MAX_LEVEL_OPONENT = 99;

function BattlePreparation(props) {
  const { setOpnt } = props;
  // const pokemonSelected = useSelector((pokemonSelected) => pokemonSelected.pokemonSelected);
  const pokemonSelected = useSelector((state) => state.pokeReducer.selectedPokemon);
  const allPokemons = useSelector((state) => state.pokeReducer.allPokemonsArr);
  const [takedPokemon, setTakedPodemon] = useState(false);
  const [battleOk, setBattleOk] = useState(false);
  const [oponent, setOponentHere] = useState({});
  const [oponentLvl, setOponentLvl] = useState();
  const [showOponent, setShowOponent] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function getRandomPokemon(lvl) {
    setOponentLvl(lvl);
    document.getElementById('BPText')
      .innerHTML = 'This is your oponent. Are you ready for the battle?';
    // document.getElementById('level 1').classList.add('display-off');
    // document.getElementById('level 2').classList.add('display-off');
    // document.getElementById('level 3').classList.add('display-off');
    const currPokemonBattle = allPokemons[Math.ceil(Math.random() * allPokemons.length)];
    const oponentOk = currPokemonBattle;
    setOponentHere(oponentOk);
    setBattleOk(true);
  }

  function battle(opnt) {
    setOpnt(opnt, oponentLvl);
    setRedirect(true);
  }

  if (redirect) return <Redirect to="/PokemonGame/BattleCamp" />;

  return (
    <>
      <Link to="/PokemonGame">Voltar</Link>
      <div>
        <h1>Battle Preparation</h1>
      </div>
      <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <h1>You selected:</h1>
        <PokemonInfo pokemon={ pokemonSelected } />
      </div>
      <h2>want to keep this pokemon and store your information?</h2>
      <h3 id="save-to-store" className="display-off">
        Congratulations now this pokemon is yours, take good care of it.
      </h3>
      <button
        type="button"
        onClick={ () => {
          setTakedPodemon(true);
          const THREE_SECONDS = 3000;
          const informationSave = document.getElementById('save-to-store');
          setToLocalStorage('myPokemon', pokemonSelected);
          informationSave.classList.remove(DISPLAY);
          setTimeout(() => {
            informationSave.classList.add(DISPLAY);
          }, THREE_SECONDS);
        } }
      >
        Yes I want!
      </button>
      <h1 id="BPText">Want to battle pokemons of which levels?</h1>
      <div className="pokemon-cards">
        { battleOk
          && <label htmlFor={ oponent.name }>
            <div className="pokeCard" style={ { backgroundColor: '#D2691E' } }>
              <div id="card-text">
                <input
                  id={ oponent.name }
                  className="input-radio pokeCard pokemons"
                  onClick={ () => battle(oponent) }
                  name="selected"
                  type="radio"
                  value={ oponent.name }
                />
                <h3>{`Click here to Battle with ${oponent.name} level ${oponentLvl}`}</h3>
              </div>
              <div id="card-image">
                <img
                  src={ oponent.sprites.front_default }
                  alt={ oponent.name }
                />
              </div>
            </div>
          </label>}
        <div>
          { showOponent && oponent.stats.map((stat) => (
            <p key={ `${stat.name}${stat.stat.name}` }>
              {`${stat.stat.name}: `}
              <strong>
                {`${stat.base_stat * oponentLvl} points`}
              </strong>
            </p>
          ))}
        </div>
      </div>
      <button
        id="level 1"
        className={ !takedPokemon ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(1) }
        type="button"
      >
        Level 1
      </button>
      <button
        id="level 2"
        className={ !takedPokemon ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(2) }
        type="button"
      >
        Level 2
      </button>
      <button
        id="level 3"
        className={ !takedPokemon ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(POKEMON_LEVEL_3) }
        type="button"
      >
        Level 3
      </button>
      <button
        id="checkOponent"
        className={ !takedPokemon ? DISPLAY : '' }
        onClick={ () => setShowOponent(!showOponent) }
        type="button"
      >
        CheckOponent
      </button>
      <h4
        className={ !takedPokemon ? DISPLAY : '' }
      >
        Set Oponent Level here (Max 99 if you can XD)
      </h4>
      <label
        className={ !takedPokemon ? DISPLAY : '' }
        htmlFor="oponentLvl"
      >
        <input
          id="oponentLvl"
          type="number"
          step="1"
          min="0"
          max="99"
        />
      </label>
      <button
        id="oponentLevelButton"
        className={ !takedPokemon ? DISPLAY : '' }
        onClick={ () => {
          let levelOponent = document.getElementById('oponentLvl').value;
          if (levelOponent > MAX_LEVEL_OPONENT) levelOponent = MAX_LEVEL_OPONENT;
          getRandomPokemon(levelOponent);
        } }
        type="button"
      >
        Set Oponent Level
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setOpnt: (payload, payload2) => dispatch(setOponent(payload, payload2)),
});

BattlePreparation.propTypes = {
  setOpnt: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(BattlePreparation);
