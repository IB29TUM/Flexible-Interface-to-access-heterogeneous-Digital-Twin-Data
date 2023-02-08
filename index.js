// """
//File name: index.js
// Description: Connection to the appoloserver and the playground
// """


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
 
// Visualisation and listing to our server is done below 

server.listen().then(({ url})=> {
    console.log("Server is ready at " + url)
});