const {gql} = require('apollo-server');


const typeDefs = gql`

type Query{
  pokemon:[Pokemon!]!
  pokemonStat(id:Int!): Stat! 
}

type Pokemon{
  name:String
  url: String
}

type Stat{
  base_experience: Int
  id:Int!
  location_area_encounters:String
  forms:[Identifier!]
  abilities:[ability!]!
}
### TESTING REBASWE LOL THIS IS THE FUTREEEEEEEE###
type Identifier{
  name:String
}

type ability{
  ability:abilityItem
  is_hidden:Boolean
}

type abilityItem{
  name:String
}



`

module.exports = typeDefs;