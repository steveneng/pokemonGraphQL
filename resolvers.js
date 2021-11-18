const resolvers = {
  Query: {
    getAllPokemon: (_, __, { dataSources }) => {
      // Removing async / await avoids null values - need to investigate
      // const { results } = await dataSources.pokemonAPI.getPokemons();
      return dataSources.pokemonAPI.getPokemons();
    },
    pokemon: (_, {id}, { dataSources }) => {
      // const items = await dataSources.pokemonAPI.getPokemon(id);
      return dataSources.pokemonAPI.getPokemon(id);
    },
    getAllMoves: (_, __, { dataSources }) => {
      return dataSources.pokemonAPI.getMoves();
    },
  },
  // Pokemon: {
    // The id seems to be for the ability and stat, not the id of the pokemon
    // stats: async (_, { id }, { dataSources }) => {
    //   const { results } = await dataSources.pokemonAPI.getStat(id);
    //   return results;
    // },
  // },
};

module.exports = resolvers;
