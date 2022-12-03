const services = [
    {
      id: "1a",
      name: "Door1",
      description: "openings",
      quantity: 2,
      dimension: "1,0m x 0,9 m",
      image: "img-1",
      categoryId:"1a",
      openingId:"B1a",
    },
    {
        id: "1aa",
        name: "Door2",
        description: "openings",
        quantity: 2,
        dimension: "1,1m x 2,1 m",
        image: "img-1",
        categoryId:"1a",
        openingId:"B1b",
      },
    {
      id: "2",
      name: "window1",
      description: "openings",
      quantity: 2,
      dimension: "0,8m x 1,5 m",
      image: "img-2",
      categoryId:"1a",
      openingId:"B1c",
    },
    {
        id: "2aa",
        name: "window2",
        description: "openings",
        quantity: 2,
        dimension: "0,8m x 1,2 m",
        image: "img-2",
        categoryId:"1a",
        openingId:"B1d",
      },
    {
      id: "3",
      name: "columns",
      description: "pillars",
      quantity: 6,
      dimension: "0,5m x 0,5 m",
      image: "img-3",
      categoryId:"1a",
      structuralId:"C1a",
    },
    {
        id: "4",
        name: "beam",
        description: "beam",
        quantity: 4,
        dimension: "0,4m x 0,5 m",
        image: "img-3",
        categoryId:"1a",
        structuralId:"C1b",
      },
      {
        id: "11",
        name: "Rebar_1",
        description: "reinforcement",
        quantity: 4,
        dimension: "12 m",
        image: "img-8",
        categoryId:"1a",
        structuralId:"C1c",
      },
      {
        id: "12",
        name: "Rebar_2",
        description: "reinforcement",
        quantity: 4,
        dimension: "14 m",
        image: "img-9",
        categoryId:"1a",
        structuralId:"C1d",
      },
      {
        id: "4b",
        name: "wall_structural_wall",
        description: "wall",
        quantity: 4,
        dimension: "0,2m x 0,2 m",
        image: "img-3",
        categoryId:"1a",
        structuralId:"C1e",
      },
      {
        id: "5",
        name: "pipes long",
        description: "water supply",
        quantity: 5,
        dimension: "60 m",
        image: "img-3",
        categoryId:"2a",
    
      },
      {
        id: "6",
        name: "pipes short",
        description: "water supply",
        quantity: 3,
        dimension: "20 m",
        image: "img-3",
        categoryId:"2a",
      },
      {
        id: "7",
        name: "celling Lights",
        description: "Lighing",
        quantity: 4,
        dimension: "null",
        image: "img-3",
        categoryId:"3a",
      },
    {
      id: "8",
      name: "HVAC 1",
      description: "ventilation",
      quantity: 1,
      dimension: "100 m3",
      image: "img-7",
      categoryId:"4a",
    },
    {
        id: "9",
        name: "HVAC 2",
        description: "ventilation",
        quantity: 2,
        dimension: "50 m3",
        image: "img-7",
        categoryId:"4a",
      },
    
    {
      id: "10",
      name: "IOT building integration",
      description: "air quality and humid calculator",
      dimension: "null",
      quantity: 3,
      image: "img-9",
      onSale: false,
      categoryId:"6a",
    },
  ];
  const categories = [
    {
      id: "1a",
      name: "BIM_Model",
    },
    {
      id: "2a",
      name: "piping_system",
    },
    {
        id: "3a",
        name: "lighing_system",
    },
    {
      id: "4a",
      name: "HVAC_systems",
    },
    {
        id: "6a",
        name: "Sensor_Data",
    },
  ];
const structural_elements = [
    {
      id: "C1a",
      name: "columns",
    },
    {
      id: "C1b",
      name: "beam",
    },
    {
      id: "C1c",
      name: "Rebar_1",
    },
    {
      id: "C1d",
      name: "Rebar_2",
    },
    {
      id: "C1e",
      name: "wall_structural_wall",
    },
  ];
  const beams=[
     {
        id: "C1b",
        name: "beams",
        quantity: 4,
        dimension: "0,4m x 0,5 m",
        image: "img-3",
        categoryId:"1a",
        structuralId:"C1b"
      }
    ];
  const columns=[
        {
        id: "C1a",
        name:"pillars",
        description: "pillars",
        quantity: 6,
        dimension: "0,5m x 0,5 m",
        image: "img-3",
        categoryId:"1a",
        structuralId:"C1a",
        }
  ];
  const openings = [
    {
      id: "B1a",
      name: "Door1",
    },
    {
      id: "B1b",
      name: "Door2",
    },
    {
      id: "B1c",
      name: "window1",
    },
    {
      id: "B1d",
      name: "window2",
    },
  ];
  module.exports={
    services,
    categories,
    structural_elements,
    beams,
    columns,
    openings
  }