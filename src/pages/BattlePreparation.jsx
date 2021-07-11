import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonInfo from '../components/PokemonInfo';
import { setToLocalStorage } from '../store/storage';

function BattlePreparation() {
  // const pokemonSelected = useSelector((pokemonSelected) => pokemonSelected.pokemonSelected);
  const pokemonSelected = useSelector((state) => state.pokeReducer.selectedPokemon);
  return (
    <>
      <Link to="/PokemonGame">Voltar</Link>
      <div>
        <h1>Battle Preparation</h1>
      </div>
      <div>
        <h1>You selected:</h1>
        <PokemonInfo pokemon={ pokemonSelected } />
      </div>
      <h2>want to keep this pokemon and store your information?</h2>
      <h3 id="save-to-store" className="display-off">
        Congratulations now this pokemon is yours, take good care of it.
      </h3>
      <button
        type="button"
        onClick={ () => {
          const THREE_SECONDS = 3000;
          const informationSave = document.getElementById('save-to-store');
          setToLocalStorage('myPokemon', pokemonSelected);
          informationSave.classList.remove('display-off');
          setTimeout(() => {
            informationSave.classList.add('display-off');
          }, THREE_SECONDS);
        } }
      >
        Yes I want!
      </button>
      <h1>Want to battle pokemons of which levels?</h1>

    </>
  );
}

export default BattlePreparation;
