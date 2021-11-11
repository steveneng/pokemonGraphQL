const { gql } = require("apollo-server");

const typeDefs = gql`

  type Query {
    getAllPokemon: [Pokemon!]!
    pokemon(id: Int): Pokemon
    # pokemonStat(id: Int): Pokemon!
  }

  type Pokemon {
    id: Int
    "The pokemon's name"
    name: String!
    "Base exp gained from defeating this pokemon"
    base_experience: Int
    "List of base stat values"
    stats: [StatObj]
    "List of abilities this pokemon can have"
    abilities: [AbilityObj]
  }

  "Stat determines certain aspects of battles"
  type StatObj {
    base_stat: Int
    effort: Int
    stat: Stat
  }

  type Stat {
    name: String
  }

  "Pokemon can have multiple possible abilities but can only have one ability at a time"
  type AbilityObj {
    ability: Ability
    is_hidden: Boolean
    slot: Int
  }

  type Ability {
    name: String
  }
`;

module.exports = typeDefs;
