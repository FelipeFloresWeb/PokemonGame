import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterPokemons } from '../actions/pokeActions';

function getCurrPokemon(currpokemon, filter, allPokemonsArr) {
  const filterCurrPokemons = allPokemonsArr
    .filter((item) => item.name.includes((currpokemon)));
  console.log(currpokemon);
  console.log(filterCurrPokemons);
  filter(filterCurrPokemons);
}

function FilterInput(props) {
  const [currpokemon, setCurrPokemon] = useState('');
  const { filter, allPokemonsArr } = props;

  useEffect(() => {
    if (!currpokemon) return;
    getCurrPokemon(currpokemon, filter, allPokemonsArr);
  }, [currpokemon]);

  return (
    <input type="text" onChange={ (e) => setCurrPokemon(e.target.value) } />
  );
}

const mapStateToProps = ({ pokeReducer: { allPokemonsArr } }) => ({
  allPokemonsArr,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (payload) => dispatch(filterPokemons(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
