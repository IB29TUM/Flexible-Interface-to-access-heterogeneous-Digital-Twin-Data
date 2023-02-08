const {services} = require("../db");

exports.Category={
    services:(parent,args,context) => {
        // console.log(parent);
        const categoryId=parent.id;
        return services.filter((service)=> service.categoryId===categoryId)
        
    },
}