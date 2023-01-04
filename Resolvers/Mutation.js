const {categories} = require("../db");
const{v4: uuid}=require("uuid")

exports.Mutation = {
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