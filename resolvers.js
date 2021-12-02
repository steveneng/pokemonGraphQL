const resolvers = {
  Query: {
     getAllPokemon: async (_, {limit,offset}, { dataSources }) => {
      return await dataSources.pokemonAPI.getPokemons(limit,offset);
    },
    pokemon: async (_, {id}, { dataSources }) => {
      // const items = await dataSources.pokemonAPI.getPokemon(id);
      return await dataSources.pokemonAPI.getPokemon(id);
    },
    getAllMoves: async(_, __, { dataSources }) => {
      return await dataSources.pokemonAPI.getMoves();
    },
  },


  EndpointResult:{
    image : async({name},__,{dataSources})=>{

      // this resolver grabs the name from the parent end point to send the name to getPokemon

      let {sprites} = await dataSources.pokemonAPI.getPokemon(name)
      return sprites["other"]["official-artwork"]
    }
  }
};

module.exports = resolvers;
