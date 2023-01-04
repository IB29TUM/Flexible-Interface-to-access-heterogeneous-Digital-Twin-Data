const {ApolloServer} = require("apollo-server");
const {typeDefs }=require("./schema");
const {Query} = require("./Resolvers/Query")
const {Mutation} = require("./Resolvers/Mutation")
const {Category} = require("./Resolvers/Category")
const {Structural_elements} = require("./Resolvers/Structural_elements")

const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query,
        Mutation,
        Category,
        Structural_elements
    },
});

server.listen().then(({ url})=> {
    console.log("Server is ready at " + url)
});