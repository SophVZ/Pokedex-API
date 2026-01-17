class Pokemon {
    constructor(data){
        this.nombre=data.name;
        this.id=data.id;
        this.sprites=data.sprites;
        this.types=data.types;
        this.height=data.height;
        this.weight=data.weight;
        this.stats=data.stats;
        this.isDefault
        this.order
        this.abilities
        this.moves
        this.baseExperience
    }
    get imagen(){
        return this.sprites.other['official-artwork'].front_default
    }
    get tipos(){
        const listaTipos=this.types.map(item=>item.type.name);
        return `${listaTipos.join(', ')}.`
    }
    get altura(){
        return `${(this.height/10).toFixed(1)} kg.`
    }
    get peso(){
        return `${(this.weight/10).toFixed(1)} kg.`
    }
    get estadisticas(){
        this.stats.reduce((acc,item)=>{
            acc[item.stat.name] = item.base_stat;
            return acc;
        }, {});
    }
}