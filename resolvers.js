const resolvers = {
  Query: {
    getAllPokemon: async (_, { limit, offset }, { dataSources }) => {
      return await dataSources.pokemonAPI.getPokemons(limit, offset);
    },
    pokemon: async (_, { id }, { dataSources }) => {
      // const items = await dataSources.pokemonAPI.getPokemon(id);
      return await dataSources.pokemonAPI.getPokemon(id);
    },
    getAllMoves: async (_, __, { dataSources }) => {
      return await dataSources.pokemonAPI.getMoves();
    },
    getPokemonByGeneration: async (_, { gen }, { dataSources }) => {
      let { pokemon_species } =
        await dataSources.pokemonAPI.getPokemonByGeneration(gen);
      return pokemon_species;
    },
  },

  EndpointResult: {
    image: async ({ name, url }, __, { dataSources }) => {
      // this resolver grabs the name from the parent end point to send the name to getPokemon

      let data;
      try {
        data = await dataSources.pokemonAPI.getPokemon(name);
      } catch (err) {
        let urlLink = url.split("/");
        let idVal = urlLink[urlLink.length - 2];
        data = await dataSources.pokemonAPI.getPokemon(idVal);
      }

      let { sprites } = data;

      return sprites["other"]["official-artwork"];
    },
    id: async ({ url }, __, ___) => {
      let urlLink = url.split("/");
      let idVal = urlLink[urlLink.length - 2];
      return idVal;
    },
  },
};

module.exports = resolvers;
