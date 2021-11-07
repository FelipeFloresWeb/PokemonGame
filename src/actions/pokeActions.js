export const GET_POKEMONS_SUCESS = 'GET_POKEMONS_SUCESS';
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';
export const SELECT_POKEMON = 'SELECT_POKEMON';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const SET_OPONENT = 'SET_OPONENT';
export const BATTLE_OK = 'BATTLE_OK';

export const battleOk = (payload) => ({
  type: BATTLE_OK,
  payload,
});

export const getPokemonsSucess = (payload) => ({
  type: GET_POKEMONS_SUCESS,
  payload,
});

export const getPokemonsError = (payload) => ({
  type: GET_POKEMONS_ERROR,
  payload,
});

export const selectPokemon = (payload) => ({
  type: SELECT_POKEMON,
  payload,
});

export const filterPokemons = (payload) => ({
  type: FILTER_POKEMONS,
  payload,
});

export const setOponent = (payload, payload2) => ({
  type: SET_OPONENT,
  payload,
  payload2,
});

// export const getPokemonsThunk = () => async (dispatch) => {
//   try {
//     const pokemons = await getAllPokemons();
//     dispatch(getPokemonsSucess(pokemons));
//   } catch (error) {
//     dispatch(getPokemonsError(error));
//   }
// };
