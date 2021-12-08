const { RESTDataSource } = require("apollo-datasource-rest");

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  getPokemons(limit, offset) {
    return this.get(`pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonByGeneration(gen) {
    return this.get(`https://pokeapi.co/api/v2/generation/${gen}`);
  }

  getPokemon(pokemonId) {
    return this.get(`pokemon/${pokemonId}`);
  }

  getStat(id) {
    return this.get(`stat/${id}`);
  }

  getAbility(id) {
    return this.get(`ability/${id}`);
  }

  getMoves() {
    return this.get(`move`);
  }
}

module.exports = PokemonAPI;
