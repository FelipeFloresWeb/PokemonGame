import React, { Component } from 'react';
import './pokemonInfo.css';

class PokemonInfo extends Component {
  render() {
    const { info } = this.props;
    console.log(info);
    if (info.length < 1) return <div>No information request so far...</div>
    return (
      <div className="pokemon-card">
      {info.map((pokemon, index) => (
        <div key={index}>
         <p>{pokemon.name}</p>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
         <p>{`Base experience: ${pokemon.base_experience} points`}</p>
         <p>{`Wheight: ${pokemon.height * 10}Kg`}</p>
         {pokemon.stats.map((stat) => (
           <p>{`${stat.stat.name}: ${stat.base_stat} points`}</p>
         ))}
        </div>
      ))}
      </div>
    );
  }
}

export default PokemonInfo;