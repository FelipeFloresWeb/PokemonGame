import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemonsError,
  getPokemonsSucess, selectPokemon } from '../actions/pokeActions';
import PokemonInfo from '../components/PokemonInfo';
import getAllPokemons from '../services/pokemonApi';
// import PokemonInfo from '../components/PokemonInfo';
// import getAllPokemons from '../services/pokemonApi';

function Home(props) {
  const { apiError, getPokemons, pokemonsInfo,
    error, select, isLoading } = props;
  // const [pokemons, setPokemons] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const apiResult = await getAllPokemons();
        console.log(apiResult);
        await getPokemons(apiResult);
      } catch (err) {
        apiError(err);
      }
    };
    load();
    // setLoading(false);
  }, []);
  function selectCurrPokemon(event) {
    const { id } = event.target;
    const pokemonFound = pokemonsInfo.find((pokemon) => pokemon.name === id);
    if (pokemonFound) return select(pokemonFound);
  }
  if (error) return <h2>{ error }</h2>;
  if (isLoading) return <h2>carregando...</h2>;
  return (
    <div>
      <h2>Welcome to Pokemon game!</h2>
      <h3>
        Here you will find a lot of information about each pokemon.
        We have a list of 500 pokemons.
      </h3>
      <h2>To start select a pokemon...</h2>
      <div className="card">
        <h3>
          Pokemon selecionado:
          <PokemonInfo info={ selectCurrPokemon } />
        </h3>
      </div>
      {/* <button type="button" className="page-button" onClick={ previousPokemons }>
          See previous pokemons...
        </button>
        <button type="button" className="page-button" onClick={ nextPokemons }>
          See next pokemons...
        </button> */}
      <div className="pokemon-cards">
        { pokemonsInfo.map((pokemon) => (
          <label key={ pokemon.name } htmlFor={ pokemon.name }>
            <div className="pokeCard">
              <input
                className="input-radio pokeCard pokemons"
                id={ pokemon.name }
                onClick={ selectCurrPokemon }
                name="selected"
                type="radio"
                value={ pokemon.name }
              />
              <h3>{`Click here to select ${pokemon.name}...`}</h3>
              <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
            </div>
          </label>
        )) }
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPokemons: (payload) => dispatch(getPokemonsSucess(payload)),
  apiError: (payload) => dispatch(getPokemonsError(payload)),
  select: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const mapStateToProps = ({ pokeReducer:
  { isLoading, selectedPokemon, pokemonsInfo } }) => ({
  isLoading,
  selectedPokemon,
  pokemonsInfo,
});

Home.propTypes = {
  info: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
