import {
  GET_POKEMONS_SUCESS,
  GET_POKEMONS_ERROR,
  SELECT_POKEMON,
} from '../actions/pokeActions';

const INITIAL_STATE = {
  error: null,
  isLoading: true,
  allPokemonsArr: [],
  selectedPokemon: {},
};

function pokeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_POKEMONS_SUCESS:
    return { ...state, isLoading: false, allPokemonsArr: action.payload };
  case GET_POKEMONS_ERROR:
    return { ...state, error: action.payload };
  case SELECT_POKEMON:
    return { ...state, selectedPokemon: action.payload };
  default:
    return state;
  }
}

export default pokeReducer;
