// ui.js - Manejo de la interfaz y eventos
// Responsabilidad: manipulación del DOM y UX, sin lógica de negocio ni fetch
import { getPokemonHtml } from '../services/pokemonService.js';

function mostrarCargando(){
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <div class="text-center">
      <div class="spinner-border text-danger" role="status"></div>
      <p class="mt-2">Buscando Pokémon...</p>
    </div>
  `;
}

function mostrarError(mensaje){
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <div class="alert alert-danger text-center">
      ${mensaje}
    </div>
  `;
}

async function handleBuscar(){
  const input = document.getElementById('pokemonInput');
  const value = (input?.value || '').trim().toLowerCase();
  if (!value) return;

  try{
    mostrarCargando();
    const html = await getPokemonHtml(value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = html;
  }catch(err){
    mostrarError('Pokémon no encontrado ❌');
    console.error(err);
  }
}

export default function initUI(){
  const input = document.getElementById('pokemonInput');
  const btn = document.getElementById('buscarBtn');

  if (btn) btn.addEventListener('click', () => handleBuscar());

  if (input){
    input.addEventListener('keypress', (e)=>{
      if (e.key === 'Enter') handleBuscar();
    });
  }

  // efecto pantalla
  const pantalla = document.querySelector('.pantalla');
  if (pantalla) pantalla.classList.add('pantalla-activa');
  setTimeout(()=>{ if (pantalla) pantalla.classList.remove('pantalla-activa'); }, 300);
}
