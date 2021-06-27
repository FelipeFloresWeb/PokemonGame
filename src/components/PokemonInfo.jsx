import React from 'react';
import PropTypes from 'prop-types';
import './pokemonInfo.css';

function PokemonInfo(props) {
  const { selectedPokemon } = props;
  if (!selectedPokemon) {
    return (
      <div>
        Select an Pokemon to see more information about it...
      </div>);
  }
  return (
    <div className="pokemon-card">
      <div>
        <p>{info.name}</p>
        <img src={ info.sprites.other.dream_world.front_default } alt={ info.name } />
        <p>{`Base experience: ${info.base_experience} points`}</p>
        <p>{`Weight: ${info.weight}`}</p>
        {info.stats.map((pokemon) => (
          <p key={ `${info.name}${pokemon.stat.name}` }>
            {`${pokemon.stat.name}: ${pokemon.base_stat} points`}
          </p>
        ))}
      </div>

    </div>
  );
}

PokemonInfo.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default PokemonInfo;
