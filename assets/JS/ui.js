// ============================================
// UI.JS - LÓGICA DE INTERFAZ (POKÉDEX)
// Rol: Diseñador UI
// ============================================

// Mostrar mensaje de carga en la pantalla Pokédex
function mostrarCargando() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-danger" role="status"></div>
            <p class="mt-2">Buscando Pokémon...</p>
        </div>
    `;
}

// Mostrar mensaje de error amigable
function mostrarError(mensaje) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <div class="alert alert-danger text-center">
            ${mensaje}
        </div>
    `;
}

// Limpiar la pantalla Pokédex
function limpiarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

// Efecto visual simple tipo "pantalla encendida"
function efectoPantalla() {
    const pantalla = document.querySelector(".pantalla");

    if (!pantalla) return;

    pantalla.classList.add("pantalla-activa");

    setTimeout(() => {
        pantalla.classList.remove("pantalla-activa");
    }, 300);
}

// Escuchar la tecla ENTER para buscar
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("pokemonInput");

    if (!input) return;

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            efectoPantalla();
            mostrarCargando();
            buscarPokemon();
        }
    });
});

// ============================================
// 🎨 ui.js — Diseñador UI
// “El archivo ui.js gestiona la interacción con 
// el usuario y la manipulación del DOM, 
// proporcionando retroalimentación visual, 
// efectos de interfaz y control de eventos, 
// manteniendo separada la lógica de presentación 
// del modelo y del acceso a datos.”
// ============================================