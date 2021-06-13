import { getAllPokemons, getInfoPokemons } from '../services/pokemonApi';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_SUCESS = 'GET_POKEMONS_SUCESS';
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';
export const SELECT_POKEMON = 'SELECT_POKEMON';
export const GET_POKEMONS_INFO = 'GET_POKEMONS_INFO';
export const GET_POKEMONS_INFO_SUCESS = 'GET_POKEMONS_INFO_SUCESS';
export const GET_POKEMONS_INFO_ERROR = 'GET_POKEMONS_INFO_ERROR';
export const GET_POKEMONS_INFO_COMPLETE = 'GET_POKEMONS_INFO_COMPLETE';

export const getPokemons = () => ({
  type: GET_POKEMONS,
});

export const getPokemonsSucess = (payload) => ({
  type: GET_POKEMONS_SUCESS,
  payload
});

export const getPokemonsError = (payload) => ({
  type: GET_POKEMONS_ERROR,
  payload,
});

export const getPokemonsInfo = () => ({
  type: GET_POKEMONS_INFO,
});

export const getPokemonsInfoSucess = (payload) => ({
  type: GET_POKEMONS_INFO_SUCESS,
  payload
});

export const getPokemonsInfoError = (payload) => ({
  type: GET_POKEMONS_INFO_ERROR,
  payload
});

export const getPokemonsInfoComplete = () => ({
  type: GET_POKEMONS_INFO_COMPLETE,
});



export const getPokemonsThunk = (limit, offset) => (dispatch) => {
  // is loading true
  dispatch(getPokemons());
  const responseApi = [];
  // chama a api
  getAllPokemons(limit, offset)
    .then((res) => { // deu certo a chamada da api
      const { results } = res;
      dispatch(getPokemonsSucess({
        pokemons: results,
      })); // atualizar o estado global
      results.forEach((pokemon) => {
        getInfoPokemons(pokemon.url)
        .then((res) => { // deu certo a chamada da api
          responseApi.push(res)
          if(responseApi.length > 19) {
            dispatch(getPokemonsInfoSucess({
              pokemonsInfo: responseApi,
            })); // atualizar o estado global
            dispatch(getPokemonsInfoComplete());
          }
          })
      })
    })
    .catch(() => { getPokemonsError(); }); // atualizar o estado global com erro
};

//  const getPokemonsInfoThunk = (url) => (dispatch) => {
//   // is loading true
//   // dispatch(getPokemons());

//   // chama a api
//   getInfoPokemons(url)
//   .then((res) => { // deu certo a chamada da api
//       dispatch(getPokemonsInfoSucess({
//         pokemonsInfo: res,
//       })); // atualizar o estado global
//     })
//     .catch(() => { getPokemonsError(); }); // atualizar o estado global com erro
// };


export const selectPokemon = (payload) => ({
  type: SELECT_POKEMON,
  payload,
});
