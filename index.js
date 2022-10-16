const {ApolloServer} = require("apollo-server");
const { services, categories } = require("./db");
const { typeDefs }=require("./schema");
const{v4: uuid}=require("uuid")


const resolvers = {
Query:{
        
        services:()=>services,
        service:(parent,args,context) => {
            const serviceid=args.id;
            const service=services.find(service => service.id ===serviceid)
            if (!service) return null;
            return service;
        },
        categories:()=>categories,
        category:(parent,args,context) => {
            const {id}=args;
            return categories.find(category => category.id ===id)
        },

},
Category:{
    services:(parent,args,context) => {
        // console.log(parent);
        const categoryId=parent.id;
        return services.filter((service)=> service.categoryId===categoryId)

    },
},
Mutation:{
addCategory:(parent,{input},context)=>{
    
    const {name}=input
    const newCategory={
        id:uuid(),
        name
    }
categories.push(newCategory);
return newCategory;
},
addService: (parent, { input }, context) => {
    const { 
        id,
        name,
        description,
        dimension,
        quantity,
        image,
        categoryId,
     } = input;

    const newService = {
      id: uuid(),
      name,
        description,
        dimension,
        quantity,
        image,
        categoryId,
    };

    db.services.push(newService);
    return newService;
  },
updateCategory: (parent, { id, input }, context) => {
    const index = categories.findIndex((category) => category.id === id);
    if (index === -1) return null;
    categories[index] = {
      ...categories[index],
      ...input,
    };
    return categories[index];
}
}
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url})=> {
    console.log("Server is ready at " + url)
});