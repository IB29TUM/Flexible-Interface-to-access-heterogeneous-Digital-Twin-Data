// """"
// File name: Query.js
// Description:script that provide user the option to query and search in the graphQl playground
//"""""


const {services,categories,structural_elements,beams, columns,openings} = require("../db");

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
            structural_elements:()=>structural_elements,
            structural_element:(parent,args,context) => {
                const {id}=args;
                return structural_elements.find(structural_element => structural_element.id ===id)
            
        },
            beams:()=>beams,
            columns:()=>columns,
    
            openings:()=>openings,
        //     openings:(parent,args,context) => {
        //         const {id}=args;
        //         return openings.find(opening => opening.id ===id)
            
        // },
}