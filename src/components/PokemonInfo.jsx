import React, { Component } from 'react';
import './pokemonInfo.css';

class PokemonInfo extends Component {
  render() {
    const { info } = this.props;
    if (!info.name) return <div>Select an Pokemon to see more information about it...</div>
    return (
      <div className="pokemon-card">
        <div>
         <p>{info.name}</p>
         <img src={info.sprites.front_default} alt={info.name} />
         <p>{`Base experience: ${info.base_experience} points`}</p>
         <p>{`Weight: ${info.weight}`}</p>
         {info.stats.map((pokemon) => (
           <p key={`${info.name}${pokemon.stat.name}`}>{`${pokemon.stat.name}: ${pokemon.base_stat} points`}</p>
         ))}
        </div>
      
      </div>
    );
  }
}

export default PokemonInfo;