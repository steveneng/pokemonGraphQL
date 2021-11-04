var express = require('express');
const PokemonApi = require('./pokemon-api');
var resolvers = require('./resolvers');
var typeDefs = require('./schema');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      pokemonApi: new PokemonApi(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
