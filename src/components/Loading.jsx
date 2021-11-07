import React from 'react';
import image from '../images/loading.gif';

function Loading() {
  return (
    <div>
      <h1>Carregando Pokemons...</h1>
      <img src={ image } alt="pikachu" />
    </div>
  );
}

export default Loading;
