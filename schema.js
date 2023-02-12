const {gql} = require("apollo-server");

exports.typeDefs= gql`
type Query {
    services:[Service!]!
    service(id: ID!):Service
    categories:[Category!]!
    category(id: ID!):Category
    structural_elements:[Structural_elements!]!
    structural_element(id: ID!):Structural_elements
    beams:[Beams!]!
    columns:[Columns!]!
    openings:[Openings!]!
    opening(id: ID!):Openings
    IFCservice(id:ID!):IFC_Services
    IFCservices:[IFC_Services!]!
    HVACservice(id:ID!):IFC_HVACS
    HVACservices:[IFC_HVACS!]!
}
type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addService(input: AddServiceInput!): Service!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
}
type Service {
    id: String!
    name: String!
    description: String!
    dimension:String!
    quantity: Int!
    image: String!
}
type Category{
    id:ID!
    name:String!
    services:[Service!]!
}
type Structural_elements{
    id:ID!
    name:String!
    services:[Service!]!
}
type Openings{
  id:ID!
  name:String!
  services:[Service!]!
}
type IFC_Services{
  id: ID!
  type: String!
  elevation: String!
  opening_type: String!
  object_placement: String!
}

type IFC_HVACS{
  id: ID!
  Date: String!
  Temperature: String!
  Humidity: String!
  CO2: String!
  HumidityRatio: String!
  Light: String!
}

type Beams{
  id:ID!
  name: String!
  quantity: Int!
  dimension: String!
  image: String!
  categoryId:String!
  structuralId:String!
  relatedStructuralElements:[Structural_elements]
}

type Columns{
  id:ID!
  name: String!
  quantity: Int!
  dimension: String!
  image: String!
  categoryId:String!
  structuralId:String!
  relatedStructuralElements:[Structural_elements]
}

input AddCategoryInput {
    name: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
  input AddServiceInput {
    id: String!
    name: String!
    description: String!
    dimension:String!
    quantity: Int!
    image: String!
    categoryId:String!
  }
`;