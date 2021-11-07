import React from 'react';
import PropTypes from 'prop-types';
import '../css/pokemonInfo.css';

function PokemonInfoBattle(props) {
  const { pokemon, level } = props;
  if (!pokemon.name) {
    return (
      <div>
        Selecione um pokemon para ver mais informações sobre ele...
      </div>);
  }
  return (
    <div className="pokemon-card">
      <div className="card-selected">
        <h1>
          {`${pokemon.name[0].toUpperCase()}${pokemon.name
            .slice(1).toLowerCase()} ( level: ${level} )`}
        </h1>
        <img
          id="selectedPokemon"
          src={ pokemon.sprites.other.dream_world.front_default }
          alt={ pokemon.name }
        />
      </div>
      <div className="card-selected-text">
        <p>{`Base experience: ${pokemon.base_experience * level} points`}</p>
        <p>{`Weight: ${pokemon.weight}`}</p>
        {pokemon.stats.map((stat) => (
          <p key={ `${stat.name}${stat.stat.name}` }>
            {`${stat.stat.name}: ${stat.base_stat} points`}
          </p>
        ))}
      </div>
    </div>
  );
}

PokemonInfoBattle.propTypes = {
  pokemon: PropTypes.object,
}.isRequired;

export default PokemonInfoBattle;
