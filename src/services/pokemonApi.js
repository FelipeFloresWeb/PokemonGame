// function sortArr(a, b) {
//   if (a.id - b.id) return 1;
//   if (b.id - a.id) return -1;
//   return 0;
// }

const getAllPokemons = async () => {
  try {
    const fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const getPokemons = await fetchPokemons.json();
    const { results } = getPokemons;
    const pokemonsInfo = results.map((pokemon) => pokemon.url);
    const pokemons = [];
    await Promise.all(pokemonsInfo.map(async (info) => {
      const fetchInfo = await fetch(`${info}`);
      const allData = await fetchInfo.json();
      pokemons.push(allData);
    }));
    return pokemons;
  } catch (error) {
    return error;
  }
};

export default getAllPokemons;
