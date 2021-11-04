const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemon() {

    console.log( await this.get('pokemon'))
    return this.get('pokemon');
  }
}

module.exports = PokemonApi;
