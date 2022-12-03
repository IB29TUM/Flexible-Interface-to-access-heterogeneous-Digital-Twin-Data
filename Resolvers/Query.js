const { services } = require("../db");
const { category } = require("./category");
exports.Query= {
        
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

};