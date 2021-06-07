export const getAllPokemons = async (limit, offset) => {
  try {
    const getData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`);
    const getPokemons = await getData.json();
    return getPokemons;
  } catch(error) {
    return error;
  }
};

export const getInfoPokemons = async (url) => {
  try {
    const getData = await fetch(url);
    const getPokemons = await getData.json();
    return getPokemons;
  } catch(error) {
    return error;
  }
};

export const getInfosPokemons = async (url) => {
  const infos = [];
  try {
    url.forEach(async (data) => {
      const getData = await fetch(url);
      const getPokemons = await getData.json();
      infos.push(getPokemons);
    })
    return infos;

    // return getPokemons;
  } catch(error) {
    return error;
  }
};