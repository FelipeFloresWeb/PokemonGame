/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';

import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonInfo from '../components/PokemonInfo';
import PokemonInfoBattle from '../components/PokemonInfoBattle';
// import { setToLocalStorage } from '../store/storage';

const MIN_DMG_PERCENT = 0.1;
const MAX_DMG_PERCENT = 0.3;

function BattleCamp() {
  const oponent = useSelector((state) => state.pokeReducer.oponent.stats);
  const level = useSelector((state) => state.pokeReducer.oponent.level);
  const pokemonSelected = useSelector((state) => state.pokeReducer.selectedPokemon);

  const [thisOponent, setOponentStats] = useState(oponent);
  // const [attacks, setAttacks] = useState(0);
  const [redirect, setRedirect] = useState(false);
  // const [me, setMe] = useState(pokemonSelected);
  // setOponentStats(oponent);

  useEffect(() => {
    setOponentStats({ ...thisOponent,
      thisOponent: thisOponent.stats.forEach((s) => {
        s.base_stat *= level;
      }) });
  }, []);

  function attack() {
    const minAttack = pokemonSelected.stats[1].base_stat * MIN_DMG_PERCENT;
    const maxAttack = pokemonSelected.stats[1].base_stat * MAX_DMG_PERCENT;
    const myAttack = Math.ceil(Math.random() * -(minAttack - maxAttack));

    setOponentStats({ ...thisOponent,
      thisOponent: thisOponent.stats[0].base_stat -= myAttack });
    // const oponentHp = oponent.stats[0].base_stat;
    // setOponentStats(thisOponent.stats[0].base_stat.concat(-myAttack));
  }

  useEffect(() => {
    if (thisOponent.stats[0].base_stat < 1) {
      setRedirect(true);
    }
  }, [thisOponent]);

  return (
    <div>
      <Link to="/PokemonGame/BattlePreparation">Back To BattlePreparation</Link>
      <PokemonInfo pokemon={ pokemonSelected } />
      {!redirect
        ? <button type="button" onClick={ attack }>Attack!</button>
        : ''}
      {!redirect
        ? <PokemonInfoBattle pokemon={ thisOponent } level={ level } />
        : <div>
          <Link
            style={ {
              fontSize: '26px',
              textDecoration: 'none',
              margin: '6em',
              color: 'black',
              fontWeight: '700' } }
            to="/PokemonGame/BattlePreparation"
          >
            Congratulations you Win!
            Click here to Back --BattlePreparation--
          </Link>
        </div>}
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   getPokemons: (payload) => dispatch(getPokemonsSucess(payload)),

// });

export default connect(null, null)(BattleCamp);
