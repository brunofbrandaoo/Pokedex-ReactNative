import * as React from 'react';


export const fetchPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=150', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => data.results) 
  .catch(error => console.error("Falha na requisição", error));
};


export const fetchPokemonTypes = (pokemonNumber) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => data.types)
  .catch(error => {
    console.error(`Falha na requisição do pokemon numero ${pokemonNumber}:`, error);
    return []; 
  });
};

export const fetchPokemonDetails = (pokemonNumber) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    return {
      stats: data.stats.map(stat => ({
        baseStat: stat.base_stat,
        name: stat.stat.name,
      })),
    };
  })
  .catch(error => {
    console.error(`Falha na requisição dos stats do pokemon numero ${pokemonNumber}:`, error);
    return {}; 
  });
};

export const fetchPokemonSize = (pokemonNumber) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    return {
      weight: data.weight,
      height: data.height,
    };
  })
  .catch(error => {
    console.error(`Falha na requisição do tamanho do pokemon numero ${pokemonNumber}:`, error);
    return {}; 
  });
};