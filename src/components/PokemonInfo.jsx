import React from 'react';
import PropTypes from 'prop-types';
import '../css/pokemonInfo.css';

function PokemonInfo(props) {
  const { pokemon } = props;
  if (!pokemon.name) {
    return (
      <div>
        Select an Pokemon to see more information about it...
      </div>);
  }
  return (
    <div className="pokemon-card">
      <div className="card-selected">
        <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h1>
        <img
          id="selectedPokemon"
          src={ pokemon.sprites.other.dream_world.front_default }
          alt={ pokemon.name }
        />
      </div>
      <div className="card-selected-text">
        <p>{`Base experience: ${pokemon.base_experience} points`}</p>
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

PokemonInfo.propTypes = {
  pokemon: PropTypes.object,
}.isRequired;

export default PokemonInfo;
