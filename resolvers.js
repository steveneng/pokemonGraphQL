const resolvers = {
  Query: {
    pokemon: async (_, __, { dataSources }) => {
      const {results} = await dataSources.pokemonApi.getPokemon();
      return results
    },
    pokemonStat: async (_,{id},{dataSources})=>{
      let items = await dataSources.pokemonApi.getPokemonStats(id)
      console.log(items)
      return await dataSources.pokemonApi.getPokemonStats(id)
    }
  }
};

module.exports = resolvers;
