import React, { Component } from 'react';

class PokemonInfo extends Component {
  render() {
    const { info } = this.props;
    if (!info.name) return <div>Loading informations...</div>
    return (
      <>
      <div>{info.name}</div>
      <img src={info.sprites.front_default} alt={info.name} />
      </>
    );
  }
}

export default PokemonInfo;