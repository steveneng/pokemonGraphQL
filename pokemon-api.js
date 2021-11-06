const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

   getPokemon() {
    return this.get('pokemon');
  }

  getPokemonStats(id){
    return this.get(`pokemon/${id}`)
  }


}

module.exports = PokemonApi;
