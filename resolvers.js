const resolvers = {
  Query: {
     getAllPokemon: async (_, __, { dataSources }) => {
      // Removing async / await avoids null values - need to investigate
      // const { results } = await dataSources.pokemonAPI.getPokemons();\
      console.log(await dataSources.pokemonAPI.getPokemons())
      return await dataSources.pokemonAPI.getPokemons();
    },
    pokemon: async (_, {id}, { dataSources }) => {
      // const items = await dataSources.pokemonAPI.getPokemon(id);
      return await dataSources.pokemonAPI.getPokemon(id);
    },
    getAllMoves: async(_, __, { dataSources }) => {
      return await dataSources.pokemonAPI.getMoves();
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
