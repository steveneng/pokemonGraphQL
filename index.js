const express = require('express');
const PokemonAPI = require('./pokemon-api');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      pokemonAPI: new PokemonAPI(),
    };
  },
});

server.listen({port:process.env.PORT || 4000}).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
