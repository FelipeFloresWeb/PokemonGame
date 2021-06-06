import React, { Component } from 'react';

class PokemonInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
      <div>{info.name}</div>
      <img src={info.sprites.front_default} alt="" />
      </>
    );
  }
}

export default PokemonInfo;