const {ApolloServer} = require("apollo-server");
const { typeDefs }=require("./schema");
const {resolvers} = require("./resolvers.js");
const {uuid} =require("uuid");
const { services,categories,structural_elements,beams, columns,openings} = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url})=> {
    console.log("Server is ready at " + url)
});