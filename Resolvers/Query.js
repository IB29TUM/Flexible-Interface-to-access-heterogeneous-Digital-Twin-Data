// """"
// File name: Query.js
// Description:script that provide user the option to query and search in the graphQl playground
//"""""


const {services,categories,structural_elements,beams, columns,openings} = require("../db");
const {IFCservices,HVACservices} = require("../db1");
exports.Query= {
        
            services:()=>services,

            service: (parent, args, context) => {
                const serviceId = args.id;
                const service = services.find(service => service.id === serviceId);
                if (!service) return null;
                // Find related categories for the service
                const serviceCategories = categories.filter(category => category.services.find(s => s.id === serviceId));
                return { ...service, categories: serviceCategories };
            },
            services:()=>categories,
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
            beams: () => beams,
    
            columns:()=>columns,
            IFCservices:()=>IFCservices,
            HVACservices:()=>HVACservices,
            openings:()=>openings,
        //     openings:(parent,args,context) => {
        //         const {id}=args;
        //         return openings.find(opening => opening.id ===id)
            
        // },
};
