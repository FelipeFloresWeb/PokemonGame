import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPokemons } from '../actions/pokeActions';

function getCurrPokemon(currpokemon, filter, allPokemonsArr) {
  const filterCurrPokemons = allPokemonsArr
    .filter((item) => item.name.includes((currpokemon)));
  filter(filterCurrPokemons);

  /* const filterCurrPokemons = allPokemonsArr
    .map((item) => item.name.includes(currpokemon));
  filter(filterCurrPokemons); */
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

FilterInput.propTypes = {
  filter: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
