// pokeApi.js - funciones para comunicarse con la PokeAPI
// Responsabilidad: realizar llamadas HTTP y devolver datos crudos
import { BASE_URL } from '../config/constants.js';

export async function fetchPokemon(idOrName){
  const url = `${BASE_URL}/pokemon/${encodeURIComponent(idOrName)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error('Pokémon no encontrado');
    err.status = res.status;
    throw err;
  }
  return res.json();
}
