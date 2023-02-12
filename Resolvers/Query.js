// """"
// File name: Query.js
// Description:script that provide user the option to query and search in the graphQl playground
//"""""


const {services,categories,structural_elements,beams, columns,openings} = require("../db");
const {IFCservices,HVACservices} = require("../db1");
exports.Query= {
        
            services:()=>services,

            service: (parent, args, context) => {
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
            beams: () =>  beams.map(beam => {
                return {
                  ...beam,
                  relatedStructuralElements: structural_elements.filter(se => se.id === beam.structuralId)
                };
            }),
    
            columns: () => columns.map(column => {
                return {
                  ...column,
                  relatedStructuralElements: structural_elements.filter(se => se.id === column.structuralId)
                };
              }),
          
            IFCservices:()=>IFCservices,
            HVACservices:()=>HVACservices,
            openings:()=>openings,
};
