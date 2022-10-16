const {ApolloServer,gql} = require("apollo-server");
exports.typeDefs= gql`
type Query {
    services:[Service!]!
    service(id: ID!):Service
    categories:[Category!]!
    category(id: ID!):Category
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