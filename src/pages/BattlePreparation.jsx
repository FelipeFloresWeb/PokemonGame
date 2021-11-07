/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setOponent, battleOk } from '../actions/pokeActions';
import PokemonInfo from '../components/PokemonInfo';
import { setToLocalStorage } from '../store/storage';

const DISPLAY = 'display-off';
const POKEMON_LEVEL_3 = 3;
const MAX_LEVEL_OPONENT = 99;

function BattlePreparation(props) {
  const { setOpnt, setToBattle, okToBattle } = props;
  // const pokemonSelected = useSelector((pokemonSelected) => pokemonSelected.pokemonSelected);
  const pokemonSelected = useSelector((state) => state.pokeReducer.selectedPokemon);
  const allPokemons = useSelector((state) => state.pokeReducer.allPokemonsArr);
  const [oponent, setOponentHere] = useState({});
  const [oponentLvl, setOponentLvl] = useState();
  const [showOponent, setShowOponent] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [oponentStats, setOponentStats] = useState(false);

  function getRandomPokemon(lvl) {
    setOponentLvl(lvl);
    document.getElementById('BPText')
      .innerHTML = 'Este é seu Oponente está Pronto para a batalha?';
    // document.getElementById('level 1').classList.add('display-off');
    // document.getElementById('level 2').classList.add('display-off');
    // document.getElementById('level 3').classList.add('display-off');
    const currPokemonBattle = allPokemons[Math.ceil(Math.random() * allPokemons.length)];
    const oponentOk = currPokemonBattle;
    setOponentHere(oponentOk);
    setShowOponent(true);
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
        <h1>Preparação para a batalha</h1>
      </div>
      <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <h1>Voce Selecionou:</h1>
        <PokemonInfo pokemon={ pokemonSelected } />
      </div>
      <h2>Gostaria de selecionar este pokemon para voce e armazenar todos seus dados?</h2>
      <h3 id="save-to-store" className="display-off">
        Parabéns este pokemon agora é seu, trate-o com carinho :)
      </h3>
      <button
        type="button"
        onClick={ () => {
          // setTakedPodemon(true);
          const THREE_SECONDS = 3000;
          const informationSave = document.getElementById('save-to-store');
          setToLocalStorage('myPokemon', pokemonSelected);
          informationSave.classList.remove(DISPLAY);
          setTimeout(() => {
            informationSave.classList.add(DISPLAY);
          }, THREE_SECONDS);
          setToBattle(true);
        } }
      >
        Sim eu quero!
      </button>
      <h1
        className={ !okToBattle ? DISPLAY : '' }
        id="BPText"
      >
        Selecione o nível do seu oponente
      </h1>
      <div className="pokemon-cards">
        { showOponent
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
                <h3>
                  {`Clique aqui para lutar contra: ${oponent.name} nível ${oponentLvl}`}
                </h3>
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
          { oponentStats && oponent.stats.map((stat) => (
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
        className={ !okToBattle ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(1) }
        type="button"
      >
        Nível 1
      </button>
      <button
        id="level 2"
        className={ !okToBattle ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(2) }
        type="button"
      >
        Nível 2
      </button>
      <button
        id="level 3"
        className={ !okToBattle ? DISPLAY : '' }
        onClick={ () => getRandomPokemon(POKEMON_LEVEL_3) }
        type="button"
      >
        Nível 3
      </button>
      <button
        id="checkOponent"
        className={ !okToBattle ? DISPLAY : '' }
        onClick={ () => {
          if (!showOponent) return;
          setOponentStats(!oponentStats);
        } }
        type="button"
      >
        Ver status do Oponente
      </button>
      <h4
        className={ !okToBattle ? DISPLAY : '' }
      >
        Coloque o nível que quiser (Máximo 99 se voce conseguir XD)
      </h4>
      <label
        className={ !okToBattle ? DISPLAY : '' }
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
        className={ !okToBattle ? DISPLAY : '' }
        onClick={ () => {
          let levelOponent = document.getElementById('oponentLvl').value;
          if (levelOponent > MAX_LEVEL_OPONENT) levelOponent = MAX_LEVEL_OPONENT;
          getRandomPokemon(levelOponent);
        } }
        type="button"
      >
        Selecionar nível do oponente
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setOpnt: (payload, payload2) => dispatch(setOponent(payload, payload2)),
  setToBattle: (payload) => dispatch(battleOk(payload)),
});

const mapStateToProps = ({ pokeReducer: { okToBattle } }) => ({
  okToBattle,
});

BattlePreparation.propTypes = {
  setOpnt: PropTypes.object,
  setToBattle: PropTypes.object,
  okToBattle: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(BattlePreparation);
