const resolvers = {
  Query: {
    getAllPokemon: async (_, __, { dataSources }) => {
      const { results } = await dataSources.pokemonAPI.getPokemons();
      return results;
    },
    pokemon: async (_, {id}, { dataSources }) => {
      const items = await dataSources.pokemonAPI.getPokemon(id);
      return items;
    },
  },
  // Pokemon: {
  //   stats: async (_, { id }, { dataSources }) => {
  //     const { results } = await dataSources.pokemonAPI.getStat(id);
  //     return results;
  //   },
  // },
};

module.exports = resolvers;
