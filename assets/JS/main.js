class Pokemon {
    constructor(data){
        //principal
        this.nombre=data.name;
        this.id=data.id;
        this.sprites=data.sprites;
        this.types=data.types;
        //fisico-stats
        this.height=data.height;
        this.weight=data.weight;
        this.stats=data.stats;
        //datos identificacion
        this.isDefault=data.is_default;
        this.order=data.order;
        //avanzadas
        this.abilities=data.abilities;
        this.moves=data.moves;
    }
    get imagen(){
        return this.sprites.other['official-artwork'].front_default || this.sprites.front_default
    }
    get tipos(){
        const listaTipos=this.types.map(item=>item.type.name);
        return `${listaTipos.join(', ')}.`
    }
    get altura(){
        return `${(this.height/10).toFixed(1)} m.`
    }
    get peso(){
        return `${(this.weight/10).toFixed(1)} kg.`
    }
    get estadisticas(){
        return this.stats.reduce((acc,item)=>{
            acc[item.stat.name] = item.base_stat;
            return acc;
        }, {});
    }
    get hp(){
        return `${this.estadisticas.hp}`
    }
    get ataque(){
        return `${this.estadisticas.attack}`
    }
    get defensa(){
        return `${this.estadisticas.defense}`
    }
    get ataqueEspecial(){
        return `${this.estadisticas[special-attack]}`
    }
    get defensaEspecial(){
        return `${this.estadisticas[special-defense]}`
    }
    get velocidad(){
        return `${this.estadisticas.speed}`
    }
    get habilidades(){
        const listaAbilities=this.abilities.map(a=>a.ability.name);
        return `${listaAbilities.join(' ,')}.`
    }
    get movimientos(){
        const listaMovimientos=this.moves.slice(0, 4).map(m=>m.move.name);
        return `${listaMovimientos.join(', ')}.`
    }
}