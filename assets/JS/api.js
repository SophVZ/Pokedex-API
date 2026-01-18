// ============================================
// API.JS - LÓGICA DE CONSUMO DE API (POKÉDEX)
// Rol: Ingeniero de datos
// ============================================

import {Pokemon} from './clase-pokemon.js';

async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Cargando Pokémon...";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const data = await response.json();

        console.log("📦 Datos crudos de la API:", data);

        const pokemon = new Pokemon(data);

        console.log("🎯 Objeto Pokemon:", pokemon);

        resultado.innerHTML = pokemon.render();

    } catch (error) {
        resultado.innerHTML = `
            <div class="alert alert-danger">
                Pokémon no encontrado ❌
            </div>
        `;
        console.error(error);
    }
}
//codigo en caso de que sea evento onclick en el html
window.buscarPokemon = buscarPokemon;

// ============================================
//🌐 api.js — Ingeniero de Datos
//“El archivo api.js se encarga exclusivamente 
// de la comunicación con la PokeAPI, implementando 
// la lógica de consumo del servicio mediante fetch, 
// manejo de asincronía con async/await y control 
// de errores cuando el Pokémon no existe.”

// ============================================

