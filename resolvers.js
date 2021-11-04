const resolvers = {
  Query: {
    pokemon: (_, __, { dataSources }) => {
      return dataSources.pokemonApi.getPokemon();
    },
  },
};

module.exports = resolvers;
