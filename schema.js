const {gql} = require('apollo-server');


const typeDefs = gql`

type Query{
  pokemon:[Pokemon!]!
}

type Pokemon{
  name:String
  url: String
}

`

module.exports = typeDefs;