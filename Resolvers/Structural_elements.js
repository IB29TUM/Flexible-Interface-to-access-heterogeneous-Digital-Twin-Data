const {services} = require("../db");

exports.Structural_elements = {
    services:(parent,args,context) => {
        const structuralId=parent.id;
        return services.filter((service)=> service.structuralId===structuralId)
    },
}