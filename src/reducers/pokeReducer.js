import {
  GET_POKEMONS_SUCESS,
  GET_POKEMONS_ERROR,
  SELECT_POKEMON,
  FILTER_POKEMONS,
  SET_OPONENT,
} from '../actions/pokeActions';

const INITIAL_STATE = {
  error: null,
  isLoading: true,
  allPokemonsArr: [],
  isSelected: false,
  selectedPokemon: {},
  oponent: {
    stats: {},
    level: '',
  },
};

function pokeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_POKEMONS_SUCESS:
    return { ...state, isLoading: false, allPokemonsArr: action.payload };
  case GET_POKEMONS_ERROR:
    return { ...state, error: action.payload };
  case SELECT_POKEMON:
    return { ...state, isSelected: true, selectedPokemon: action.payload };
  case FILTER_POKEMONS:
    return { ...state, allPokemonsArr: action.payload };
  case SET_OPONENT:
    return { ...state, oponent: { stats: action.payload, level: action.payload2 } };
  default:
    return state;
  }
}

export default pokeReducer;
