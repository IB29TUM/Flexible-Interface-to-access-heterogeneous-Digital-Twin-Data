const { services, categories } = require("../db");

exports.category={
    services:(parent,args,context) => {
        // console.log(parent);
        const categoryId=parent.id;
        return services.filter((service)=> service.categoryId===categoryId)

    },
}