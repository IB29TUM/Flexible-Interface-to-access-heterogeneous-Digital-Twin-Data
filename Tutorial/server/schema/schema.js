//const {projects, clients} = require('../sampleData.js')

//Mongoose models
//const Project = require('../models/Project');
const Client = require('../models/Client');

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, /*GraphQLNonNull*/ GraphQLEnumType} = require('graphql');

//Project type
/*const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({ 
       id: {type: GraphQLID},
       name: {type: GraphQLString},
       description: {type: GraphQLString},
       status: {type: GraphQLString},
       client: {
                type: ClientType,
                resolve(parent, args){
                    return Client.findById(parent.clientId);
                    //return clients.find((client) => client.id === parent.clientId)
                },
            },
    }),
});*/

//Client type
const ClientType = new GraphQLObjectType({
 name: 'Client',
 fields: () => ({ 
    
    Buildings:
     {
       openings:{
                windows: {type:String},
                doors:{type:String},
                 },
       walls:{type:GraphQLString},

    
    }

                })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        
        Buildings: {
            type: new GraphQLList(ClientType),
            resolve(parent,args) {
                return Client.find();
                //return clients;
            },
        },
        
    },
});

// //Mutations
// const mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         //Add a client
//         addClient: {
//             type: ClientType,
//             args: {
//                 name: {type: /*new GraphQLNonNull(*/GraphQLString},
//                 email: {type: /*new GraphQLNonNull(*/GraphQLString},
//                 phone: {type: GraphQLString},
//             },
//             resolve(parent, args) {
//                 const client = new Client({
//                     name: args.name,
//                     email: args.email,
//                     phone: args.phone,

//                 });

//                 return client.save();
//                 //Client.create();
//             },
//         },
//         //Delete a client
//         deleteClient: {
//             type: ClientType,
//             args: {
//                 id: {type: GraphQLID}
//             },
//             resolve(parent, args) {
//                 return Client.findByIdAndRemove(args.id);
//             },
//         },
//         //Add a project
//         addProject: {
//             type: ProjectType,
//             args: {
//                 name: {type: GraphQLString},
//                 description: {type: GraphQLString},
//                 status: {
//                     type: new GraphQLEnumType({
//                         name: 'ProjectStatus',
//                         values: {
//                             'new': {value: 'Not Started'},
//                             'progress': {value: 'In Progress'},
//                             'completed': {value: 'Completed'},
//                         }
//                     }),
//                     defaultValue: 'Not Started',
//                 },
//                 clientId: {type: GraphQLID},
//             },
//             resolve(parent, args){
//                 const project = new Project({
//                     name: args.name,
//                     description: args.description,
//                     status: args.status,
//                     clientId: args.clientId,
//                 });

//                 return project.save();
//             }
//         },
//         //Delete a project
//         deleteProject: {
//             type: ProjectType,
//             args: {
//                 id: {type: GraphQLID}
//             },
//             resolve(parent, args) {
//                 return Project.findByIdAndRemove(args.id);
//             },
//         },
//         //Update a project
//         updateProject: {
//             type: ProjectType,
//             args: {
//                 id: {type: GraphQLID},
//                 name: {type: GraphQLString},
//                 description: {type: GraphQLString},
//                 status: {
//                     type: new GraphQLEnumType({
//                         name: 'ProjectStatusUpdate',
//                         values: {
//                             'new': {value: 'Not Started'},
//                             'progress': {value: 'In Progress'},
//                             'completed': {value: 'Completed'},
//                         }
//                     }),
//                 },
//                 clientId: {type: GraphQLID},
//             },

//             resolve(parent, args){

//                 return Project.findByIdAndUpdate(
//                     args.id,
//                     {
//                         $set: {
//                             name: args.name,
//                             description: args.description,
//                             status: args.status,
//                         },
//                     },
//                     {new: true} //If the project is not there it will create a new one
//                 )


//                 /*Project.findById(args.id).name = args.name,
//                 Project.findById(args.id).description = args.description,
//                 Project.findById(args.id).status = args.status,
//                 Project.findById(args.id).clientId = args.clientId,

//                 return Project.findById(args.id);*/


//             },
//         },
//     },
// });


module.exports = new GraphQLSchema({
    query: RootQuery,
    //mutation,
});