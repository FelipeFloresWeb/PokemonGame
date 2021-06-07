import {
  GET_POKEMONS,
  GET_POKEMONS_SUCESS,
  GET_POKEMONS_ERROR,
  SELECT_POKEMON,
  GET_POKEMONS_INFO,
  GET_POKEMONS_INFO_SUCESS,
  GET_POKEMONS_INFO_ERROR,
  GET_POKEMONS_INFO_COMPLETE,
} from '../actions/pokeActions';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  pokemons: [],
  pokemonsInfo: [],
  selectedPokemon: {},
};

function pokeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {...state, isLoading: true};
      case GET_POKEMONS_SUCESS:
        return {...state, pokemons: action.payload.pokemons };
      case GET_POKEMONS_ERROR:
      return {...state, isLoading: false, error: action.payload.error };
      case GET_POKEMONS_INFO:
      return {...state, isLoading: true};
      case GET_POKEMONS_INFO_SUCESS:
      return {...state, pokemonsInfo: action.payload.pokemonsInfo };
      case GET_POKEMONS_INFO_ERROR:
      return {...state, isLoading: false, error: action.payload.error };
      case GET_POKEMONS_INFO_COMPLETE:
      return {...state, isLoading: false };
    case SELECT_POKEMON:
      return {...state, selectedPokemon: action.payload };
    default:
      return state;
  }
}

export default pokeReducer;