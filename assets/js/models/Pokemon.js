// Pokemon.js - Modelo de dominio
// Contiene la representación del Pokémon y helpers para renderizarlo
export default class Pokemon {
  constructor(data){
    this.nombre = data.name;
    this.id = data.id;
    this.sprites = data.sprites;
    this.types = data.types;
    this.height = data.height;
    this.weight = data.weight;
    this.stats = data.stats;
    this.isDefault = data.is_default;
    this.abilities = data.abilities;
    this.moves = data.moves;
  }

  get imagen(){
    return this.sprites?.other?.['official-artwork']?.front_default || this.sprites?.front_default || '';
  }

  get tipos(){
    const listaTipos = (this.types || []).map(item => item.type.name);
    return `${listaTipos.join(', ')}.`;
  }

  get altura(){
    return this.height ? `${(this.height/10).toFixed(1)} m.` : '';
  }

  get peso(){
    return this.weight ? `${(this.weight/10).toFixed(1)} kg.` : '';
  }

  get estadisticas(){
    return (this.stats || []).reduce((acc, item) => {
      acc[item.stat.name] = item.base_stat;
      return acc;
    }, {});
  }

  get etiquetaEspecial(){
    return !this.isDefault ? `<span class="badge bg-warning text-dark">Forma Especial / Mega</span>` : "";
  }

  get habilidades(){
    const listaAbilities = (this.abilities || []).map(a => a.ability.name);
    return `${listaAbilities.join(' ,')}.`;
  }

  get movimientos(){
    const listaMovimientos = (this.moves || []).slice(0,4).map(m => m.move.name);
    return `${listaMovimientos.join(', ')}.`;
  }

  render(){
    return `
    <div class="card shadow-sm py-2" style="width: 30rem;">
        <img src="${this.imagen}" class="card-img-top p-3" alt="${this.nombre}">
        <div class="card-body">
            <h5 class="card-title text-capitalize text-center">${this.nombre} ${this.etiquetaEspecial} (#${this.id})</h5>
            <hr>
            <p class="card-text"><strong>Tipos:</strong> ${this.tipos}</p>
            <h6><strong>Físico:</strong></h6>
            <p class="card-text "><span class="fw-semibold">Peso:</span> ${this.peso}</p>
            <p class="card-text"><span class="fw-semibold">Altura:</span> ${this.altura}</p>
            <h6><strong>Estadísticas Base:</strong></h6>
            <div class="col-rows d-flex flex-column pb-3">
                <small class="col"><span class="fw-semibold">HP:</span> ${this.estadisticas.hp || '-'} | <span class="fw-semibold">ATK:</span> ${this.estadisticas.attack || '-' } | <span class="fw-semibold">DEF:</span> ${this.estadisticas.defense || '-'}</small>
                <small class="col"><span class="fw-semibold">ATK-SP:</span> ${this.estadisticas['special-attack'] || '-'} | <span class="fw-semibold">DEF-SP:</span> ${this.estadisticas['special-defense'] || '-'}</small>
                <small class="col"><span class="fw-semibold">VEL:</span> ${this.estadisticas.speed || '-'}</small>
            </div>
            <h6><strong>Habilidades:</strong></h6>
            <p class="card-text">${this.habilidades}</p>
            <h6><strong>Movimientos:</strong></h6>
            <p class="card-text">${this.movimientos}</p>
        </div>
    </div>`;
  }
}
