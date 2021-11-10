const { RESTDataSource } = require("apollo-datasource-rest");

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  getPokemons() {
    return this.get("pokemon");
  }

  getPokemon(pokemonId) {
    return this.get(`pokemon/${pokemonId}`)
  }

  getStat(id) {
    return this.get(`stat/${id}`)
  }

  getAbility(id) {
    return this.get(`ability/${id}`)
  }

}

module.exports = PokemonAPI;
