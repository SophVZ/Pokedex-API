// pokemonService.js - Orquesta entre API y modelos
import { fetchPokemon } from '../api/pokeApi.js';
import Pokemon from '../models/Pokemon.js';

export async function getPokemonHtml(nameOrId){
  const data = await fetchPokemon(nameOrId);
  const pokemon = new Pokemon(data);
  return pokemon.render();
}
