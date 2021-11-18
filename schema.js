const { gql } = require("apollo-server");

const typeDefs = gql`

  type Query {
    getAllPokemon: ResourceList
    pokemon(id: Int): Pokemon
    # pokemonStat(id: Int): Pokemon!
    getAllMoves: ResourceList
  }

  type ResourceList {
    "The total number of resources available from this API."
    count: Int
    "The URL for the next page in the list."
		next: String
    "The URL for the previous page in the list."
		previous: String
    "A list of named API resources."
		results: [EndpointResult]
  }

  type EndpointResult {
    "The name of the referenced resource."
    name: String
    "The URL of the referenced resource."
    url: String
  }

  type Pokemon {
    "The pokemon's id"
    id: Int
    "The pokemon's name"
    name: String!
    "Base exp gained from defeating this pokemon"
    base_experience: Int
    "List of base stat values"
    stats: [StatObj]
    "List of abilities this pokemon can have"
    abilities: [AbilityObj]
    moves: [Move]
  }

  "Stat determines certain aspects of battles"
  type StatObj {
    base_stat: Int
    effort: Int
    stat: Name
  }

  "Pokemon can have multiple possible abilities but can only have one ability at a time"
  type AbilityObj {
    ability: Name
    is_hidden: Boolean
    slot: Int
  }

  type Move {
    "The move the Pokémon can learn."
    move: Name
    "The details of the version in which the Pokémon can learn the move."
    version_group_details: [PokemonMoveVersion]
  }

  type PokemonMoveVersion {
    "The method by which the move is learned."
    move_learn_method: Name
    "The version group in which the move is learned."
    version_group: Name
    "The minimum level to learn the move."
    level_learned_at: Int
  }

  "Reusable name type"
  type Name {
    name: String
  }
`;

module.exports = typeDefs;
