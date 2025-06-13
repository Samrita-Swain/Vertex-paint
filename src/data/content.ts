import { color, view } from "framer-motion";

export const homeContent = {
  hero: {
    title: "Transform Your Space",
    subtitle: "Discover endless possibilities with Asian Paints",
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
    cta: "Explore Colors"
  },
  featuredProducts: [
    {
      id: "1",
      name: "Royale Glitz Luxury Emulsion",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500",
      description: "Ultra luxury interior emulsion with metallic sheen",
      price: 750,
      category: "Interior Paints"
    },
    {
      id: "2",
      name: "Apex Ultima Anti Peel",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
      description: "Weather-proof exterior emulsion",
      price: 580,
      category: "Exterior Paints"
    }
  ],
  popularColors: [
    {
      name: "Salmon Pink",
      hex: "#FF91A4",
      image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=200"
    },
    {
      name: "Aqua Fresh",
      hex: "#9FE7F5",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=200"
    }
  ]
};

export const colorInspirations = [
  {
    id: 'modern-living',
    title: 'Modern Living Room Ideas',
    description: 'Contemporary color schemes for your living space',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
  },
  {
    id: 'bedroom-bliss',
    title: 'Peaceful Bedroom Colors',
    description: 'Calming palettes for a restful bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800'
  },
  {
    id: 'kitchen-fresh',
    title: 'Fresh Kitchen Colors',
    description: 'Vibrant colors for your cooking space',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800'
  }
];

export const latestStories = [
  {
    id: 'color-trends-2024',
    title: 'Color Trends 2024',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
    date: 'Dec 15, 2023'
  }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'safe-painting',
    title: 'Safe Painting Service',
    description: 'Professional painting with safety protocols',
    icon: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200',
    features: [
      'Trained & vaccinated painters',
      'Safety protocols followed',
      'Regular sanitization',
      'Contactless service'
    ]
  },
  // ... other services
]; 


export const exteriorColor = [
  {
    id: 'PeacefulSerene',
    title: 'Peaceful & Serene',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/PeacefulSerene.jpg',
    explore: '/Exterior/PeacefulSerene'
  },
  {
    id: 'TrendyStylish',
    title: 'Trendy & Stylish',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/TrendyStylish.jpg',
    explore: '/Exterior/TrendyStylish'
  },
  {
    id: 'soft-&-relaxing',
    title: 'Soft & Relaxing',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/SoftRelaxing.jpg',
    explore: '/Exterior/SoftRelaxing'
  },
  {
    id: 'exciting-&-bright',
    title: 'Exciting & Bright',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/excitingbright.jpg',
    explore: '/Exterior/ExcitingBright'
  }
];


export const exteriorColor1 =[
  {
    id:'1',
    color: '#f7f0e3',
    id_title: "V8004P",
    id_content: "Mellow Orange",
    view:'',
    title: "Crafted Cube - A",
      mainImage: { src: "/images/Crafted Cube-A.jpg" },
      contentBoxes: [
        {
          title: "V8004P",
          content: "Mellow Orange",
          boxColor: "#f7f0e3",
          textColor: "#000"
        },
        {
          title: "V9983P",
          content: "Brick Dust - N",
          boxColor: "#b75e56",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Glazia Greiges",
          boxColor: "#676860",
          textColor: "#000"
        }]
  },
  {
    id:'2',
    color: '#e2dfd8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Crafted Cube - B",
      mainImage: { src: "/images/Crafted Cube-B.jpg" },
      contentBoxes: [
        {
          title: "V8300P",
          content: "Confetti",
          boxColor: "#e2dfd8",
          textColor: "#000"
        },
        {
          title: "V8639P",
          content: "Brick Tone",
          boxColor: "#a37064",
          textColor: "#000"
        }
      ]
  },
  {
    id:'3',
    color: '#ede7db',
    id_title: "VL157P",
    id_content: "White Canvas",
    view:'',
    title: "Roman Heritage - B",
      mainImage: { src: "/images/Roman Heritage-B.jpg" },
      contentBoxes: [
        {
          title: "VL157P",
          content: "White Canvas",
          boxColor: "#ede7db",
          textColor: "#000"
        },
        {
          title: "V7887P",
          content: "Pine Cone",
          boxColor: "#c4a666",
          textColor: "#000"
        }
      ]
  },
  {
    id:'4',
    color: '#f4f2e8',
    id_title: "VL155P",
    id_content: "Pale Sisal",
    view:'',
    title: "Country Style - A",
      
      mainImage: { src: "/images/Country-style-A.jpg" },
      contentBoxes: [
        {
          title: "VL155P",
          content: "Pale Sisal",
          boxColor: "#f4f2e8",
          textColor: "#000"
        },
        {
          title: "V0509P",
          content: "Geranium",
          boxColor: "#b34b42",
          textColor: "#000"
        },
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e6dcd1",
          textColor: "#000"
        }
      ]
  },
  {
    id:'5',
    color: '#f2efdc',
    id_title: "V7836P",
    id_content: "Vanilla Ice",
    view:'',
    title: "Country Style - B",
      mainImage: { src: "/images/Country-style-B.jpg" },
      contentBoxes: [
        {
          title: "V7836P",
          content: "Vanilla Ice",
          boxColor: "#f2efdc",
          textColor: "#000"
        },
        {
          title: "V9867P",
          content: "Mosambi Yellow - N",
          boxColor: "#f2d16f",
          textColor: "#000"
        }
      ]
  },
  {
    id:'6',
    color: '#f1ece2',
    id_title: "V0765P",
    id_content: "Morning Glory",
    view:'',
    title: "Elegant Simplicity - A",
      mainImage: { src: "/images/Elegant Simplicity-A.png" },
      contentBoxes: [
        {
          title: "V0765P",
          content: "Morning Glory",
          boxColor: "#f1ece2",
          textColor: "#000"
        },
        {
          title: "V8066P",
          content: "Tinge of Pink",
          boxColor: "#fbd8d3",
          textColor: "#000"
        },
        {
          title: "V8615P",
          content: "Copper Coast",
          boxColor: "#b37765",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#f6f3e0',
    id_title: "V7876P",
    id_content: "Soft Honey",
    view:'',
    title: "Retro Regal - A",
      mainImage: { src: "/images/Retro Regal-A.jpg" },
      contentBoxes: [
        {
          title: "V7876P",
          content: "Soft Honey",
          boxColor: "#f6f3e0",
          textColor: "#000"
        },
        {
          title: "V7304P",
          content: "Piece of Sky",
          boxColor: "#6c90a9",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#f2eee3',
    id_title: "VL104P",
    id_content: "Cotton Wool",
    view:'',
    title: "Retro Regal - B",
      mainImage: { src: "/images/Retro Regal-B.jpg" },
      contentBoxes: [
        {
          title: "VL104P",
          content: "Cotton Wool",
          boxColor: "#f2eee3",
          textColor: "#000"
        },
        {
          title: "V0533P",
          content: "Brick Red - N",
          boxColor: "#a5644d",
          textColor: "#000"
        },
        {
          title: "V9514P",
          content: "Creamy Crust",
          boxColor: "#d1c7b7",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f3ecde',
    id_title: "VL140P",
    id_content: "Crushed Ice",
    view:'',
    title: "Eternal Temple - A",
      mainImage: { src: "/images/Eternal Temple-A.png" },
      contentBoxes: [
        {
          title: "VL140P",
          content: "Crushed Ice",
          boxColor: "#f3ecde",
          textColor: "#000"
        },
        {
          title: "V8015P",
          content: "Grand Canyon",
          boxColor: "#d19173",
          textColor: "#000"
        },
        {
          title: "V7717P",
          content: "Vivid Green",
          boxColor: "#7b8549",
          textColor: "#000"
        }
      ]
  },
  {
    id:'10',
    color: '#f4f0e5',
    id_title: "VL144P",
    id_content: "Love Song",
    view:'',
    title: "Eternal Temple - B",
      mainImage: { src: "/images/Eternal Temple-B.png" },
      contentBoxes: [
        {
          title: "VL144P",
          content: "Love Song",
          boxColor: "#f4f0e5",
          textColor: "#000"
        },
        {
          
          content: "Spl Flame Red",
          boxColor: "#b45e4d",
          textColor: "#000"
        },
        {
          title: "V7941P",
          content: "Turmeric",
          boxColor: "#feb200",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#efeadf',
    id_title: "V8444P",
    id_content: "Ice Crystal",
    view:'',
    title: "Modern Geometry - A",
      mainImage: { src: "/images/Modern Geometry-A.png" },
      contentBoxes: [
        {
          title: "V8444P",
          content: "Ice Crystal",
          boxColor: "#efeadf",
          textColor: "#000"
        },
        {
          title: "V8561P",
          content: "Oak Leaf",
          boxColor: "#e7c8a9",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Aristone Brick Red",
          boxColor: "#6a3a2e",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#f7f1e9',
    id_title: "VL146P",
    id_content: "Sonnet",
    view:'',
    title: "Modern Geometry - B",
      mainImage: { src: "/images/Modern Geometry-B.png" },
      contentBoxes: [
        {
          title: "VL146P",
          content: "Sonnet",
          boxColor: "#f7f1e9",
          textColor: "#000"
        },
        {
          title: "V0N02P",
          content: "Warmstone",
          boxColor: "#c6b9a6",
          textColor: "#000"
        },
        {
          title: "V8454P",
          content: "Dull Birch",
          boxColor: "#7d705f",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#f7f0db',
    id_title: "V7964P",
    id_content: "Custard Apple",
    view:'',
    title: "Modern Geometry - C",
      mainImage: { src: "/images/Modern Geometry-C.png" },
      contentBoxes: [
        {
          title: "V7964P",
          content: "Custard Apple",
          boxColor: "#f7f0db",
          textColor: "#000"
        },
        {
          title: "V8330P",
          content: "Nimbus Shower",
          boxColor: "#b8b9b1",
          textColor: "#000"
        },
        {
          title: "V9647P",
          content: "Naval Club - N",
          boxColor: "#305b90",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#f5f0e7',
    id_title: "VL143P",
    id_content: "Rain Drop",
    view:'',
    title: "Beach House - A",
      mainImage: { src: "/images/Beach House-A.jpg" },
      contentBoxes: [
        {
          title: "VL143P",
          content: "Rain Drop",
          boxColor: "#f5f0e7",
          textColor: "#000"
        },
        {
          title: "V7342P",
          content: "Waikiki",
          boxColor: "#4386a8",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#f0e6d7',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Modern Geometry - B",
      mainImage: { src: "/images/Modern Geometry-B.png" },
      contentBoxes: [
        {
          title: "VL146P",
          content: "Sonnet",
          boxColor: "#f3eee4",
          textColor: "#000"
        },
        {
          title: "V0N02P",
          content: "Warmstone",
          boxColor: "#c1b7a3",
          textColor: "#000"
        },
        {
          title: "V8454P",
          content: "Dull Birch",
          boxColor: "#7b6c5d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#f3eedd',
    id_title: "VL124P",
    id_content: "Pure Ivory",
    view:'',
    title: "Lattice House - B",
      mainImage: { src: "/images/Lattice House-B.jpg" },
      contentBoxes: [
        {
          title: "VL124P",
          content: "Pure Ivory",
          boxColor: "#f3eedd",
          textColor: "#000"
        },
        {
          title: "V7208P",
          content: "Petal Soft",
          boxColor: "#a4aed6",
          textColor: "#000"
        },
        {
          title: "V8234P",
          content: "Fleecy Coat",
          boxColor: "#b8b4b5",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#f3efe1',
    id_title: "VL122P",
    id_content: "Skimmed Cream",
    view:'',
    title: "Lattice House - D",
      mainImage: { src: "/images/Lattice House-D.jpg" },
      contentBoxes: [
        {
          title: "VL122P",
          content: "Skimmed Cream",
          boxColor: "#f3efe1",
          textColor: "#000"
        },
        {
          title: "V7527P",
          content: "Green Haven",
          boxColor: "#66aea5",
          textColor: "#000"
        },
        {
          title: "V7233P",
          content: "Ice Cube",
          boxColor: "#b0bac8",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#f3eee2',
    id_title: "VL103P",
    id_content: "Pearl Star",
    view:'',
    title: "Iconic Villa - B",
      mainImage: { src: "/images/Iconic Villa - B.jpg" },
      contentBoxes: [
        {
          title: "VL103P",
          content: "Pearl Star",
          boxColor: "#f3eee2",
          textColor: "#000"
        },
        {
          title: "V7415P",
          content: "Steel Mesh",
          boxColor: "#709ca7",
          textColor: "#000"
        },
        {
          title: "V9876P",
          content: "Happy Canary - N",
          boxColor: "#fedc74",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#f6f3dd',
    id_title: "V7868P",
    id_content: "Sun Screen",
    view:'',
    title: "Twisting Maze - A",
      mainImage: { src: "/images/Twisting Maze-A.jpg" },
      contentBoxes: [
        {
          title: "V7868P",
          content: "Sun Screen",
          boxColor: "#f6f3dd",
          textColor: "#000"
        },
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#cdddad",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Granizia Coarse Beige Brown",
          boxColor: "#80765d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#f7f2da',
    id_title: "V7884P",
    id_content: "Soft Linen",
    view:'',
    title: "Twisting Maze - D",
      mainImage: { src: "/images/Twisting Maze-D.jpg" },
      contentBoxes: [
        {
          title: "V7884P",
          content: "Soft Linen",
          boxColor: "#f7f2da",
          textColor: "#000"
        },
        {
          title: "V7981P",
          content: "Dusky Saffron",
          boxColor: "#c97c34",
          textColor: "#000"
        }
      ]
  },
  {
    id:'21',
    color: '#e8ebeb',
    id_title: "VL180P",
    id_content: "Innocent White",
    view:'',
    title: "Grooved Design - A",
      mainImage: { src: "/images/Grooved Design-A.jpg" },
      contentBoxes: [
        {
          title: "VL180P",
          content: "Innocent White",
          boxColor: "#e8ebeb",
          textColor: "#000"
        },
        {
          title: "V7303P",
          content: "Stormy Sea",
          boxColor: "#5b7e98",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#f0eada',
    id_title: "VL134P",
    id_content: "Double Cream",
    view:'',
    title: "Grooved Design - B",
      mainImage: { src: "/images/Grooved Design-B.jpg" },
      contentBoxes: [
        {
          title: "VL134P",
          content: "Double Cream",
          boxColor: "#f0eada",
          textColor: "#000"
        },
        {
          title: "V7166P",
          content: "Intense Purple",
          boxColor: "#7d7cab",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#f7f0dd',
    id_title: "V7948P",
    id_content: "Crescent",
    view:'',
    title: "Grooved Design - C",
      mainImage: { src: "/images/Grooved Design-C.jpg" },
      contentBoxes: [
        {
          title: "V7948P",
          content: "Crescent",
          boxColor: "#f7f0dd",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#535456",
          textColor: "#000"
        }
      ]
  },

  
]

export const exteriorColor2 =[
  {
    id:'1',
    color: '#e8ebeb',
    id_title: "V8300P",
    id_content: "Jet Stream",
    view:'',
    title: "Crafted Cube - C",
      mainImage: { src: "/images/Crafted Cube-C.jpg" },
      contentBoxes: [
        {
          title: "V7300P",
          content: "Jet Stream",
          boxColor: "#e8ebeb",
          textColor: "#000"
        },
        {
          title: "V7927P",
          content: "Casablanca",
          boxColor: "#ecc375",
          textColor: "#000"
        },
        {
          title: "V8581P",
          content: "Antique Brass",
          boxColor: "#805d47",
          textColor: "#000"
        }]
  },
  {
    id:'2',
    color: '#dfeae8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Roman Heritage - C",
      mainImage: { src: "/images/Roman Heritage-C.JPg" },
      contentBoxes: [
        {
          title: "V7412P",
          content: "Whispering Breeze",
          boxColor: "#dfeae8",
          textColor: "#000"
        },
        {
          title: "V8304P",
          content: "Grey Matter",
          boxColor: "#838585",
          textColor: "#000"
        },
        {
          title: "V8109P",
          content: "Fine Wine",
          boxColor: "#81454f",
          textColor: "#000"
        }
      ]
  },
  {
    id:'3',
    color: '#a5d0e4',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Roman Heritage - B",
      mainImage: { src: "/images/Roman Heritage-B.JPg" },
      contentBoxes: [
        {
          title: "VL157P",
          content: "White Canvas",
          boxColor: "#e9e4d5",
          textColor: "#000"
        },
        {
          title: "V7887P",
          content: "Pine Cone",
          boxColor: "#b69a5d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'4',
    color: '#eaeae5',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Cutting Edge - A",
      
      mainImage: { src: "/images/Cutting-edge - A.jpg" },
      contentBoxes: [
        {
          title: "V7220P",
          content: "Shy Iris",
          boxColor: "#e9e9e4",
          textColor: "#000"
        },
        {
          title: "V8439P",
          content: "Wrought Iron",
          boxColor: "#807b71",
          textColor: "#000"
        },
        {
          title: "V7888P",
          content: "Ginger Root",
          boxColor: "#c9b175",
          textColor: "#000"
        }
      ]
  },
  {
    id:'5',
    color: '#9dc0a8',
    id_title: "V7624P",
    id_content: "Dry Sage",
    view:'',
    title: "Cutting-edge - E",
      mainImage: { src: "/images/Cutting-edge - E.jpg" },
      contentBoxes: [
        {
          title: "V7624P",
          content: "Dry Sage",
          boxColor: "#9dc0a8",
          textColor: "#000"
        },
        {
          title: "V0615P",
          content: "Silver Grey",
          boxColor: "#b8b9b6",
          textColor: "#000"
        }
        ,
        {
          title: "V8304P",
          content: "Grey Matter",
          boxColor: "#838585",
          textColor: "#000"
        }
      ]
  },
  {
    id:'6',
    color: '#d7d4cf',
    id_title: "V8299P",
    id_content: "Ice Age",
    view:'',
    title: "Country Style - C",
      mainImage: { src: "/images/Country-Style-C.jpg" },
      contentBoxes: [
        {
          title: "V8299P",
          content: "Ice Age",
          boxColor: "#d7d4cf",
          textColor: "#000"
        },
        {
          title: "V8113P",
          content: "Bed of Roses",
          boxColor: "#e0abb4",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#dce49f',
    id_title: "V7777P",
    id_content: "Fresh Sprout",
    view:'',
    title: "Country Style - D",
      mainImage: { src: "/images/Country-Style-D.jpg" },
      contentBoxes: [
        {
          title: "V7777P",
          content: "Fresh Sprout",
          boxColor: "#dce49f",
          textColor: "#000"
        },
        {
          title: "V8106P",
          content: "Daisy Bunch",
          boxColor: "#e5bec0",
          textColor: "#000"
        }
        ,
        {
          title: "V9983P",
          content: "Brick Dust - N",
          boxColor: "#b75e56",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#acb89e',
    id_title: "V8417P",
    id_content: "Herb Bouquet",
    view:'',
    title: "Country Style - E",
      mainImage: { src: "/images/Country-Style-E.jpg" },
      contentBoxes: [
        {
          title: "V8417P",
          content: "Herb Bouquet",
          boxColor: "#acb89e",
          textColor: "#000"
        },
        {
          title: "V9405P",
          content: "Rich Tomato",
          boxColor: "#ab4e49",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#d1e3e3',
    id_title: "V9228P",
    id_content: "Solitude",
    view:'',
    title: "Elegant Simplicity - C",
      mainImage: { src: "/images/Elegant Simplicity-C.png" },
      contentBoxes: [
        {
          title: "V9228P",
          content: "Solitude",
          boxColor: "#d1e3e3",
          textColor: "#000"
        },
        {
          title: "V7411P",
          content: "Nautilus",
          boxColor: "#c4e3e6",
          textColor: "#000"
        },
        {
          title: "V6134P",
          content: "Smoke Grey",
          boxColor: "#708494",
          textColor: "#000"
        }
      ]
  },
  {
    id:'10',
    color: '#e6ebb9',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country Style - E",
      mainImage: { src: "/images/Country-Style-E.jpg" },
      contentBoxes: [
        {
          title: "V8417P",
          content: "Herb Bouquet",
          boxColor: "#a8b299",
          textColor: "#000"
        },
        {
          title: "V9405P",
          content: "Rich Tomato",
          boxColor: "#a84944",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#ecedcb',
    id_title: "V7771P",
    id_content: "Hushed Hue",
    view:'',
    title: "Eternal Temple - C",
      mainImage: { src: "/images/Eternal Temple-C.png" },
      contentBoxes: [
        {
          title: "V7771P",
          content: "Hushed Hue",
          boxColor: "#ecedcb",
          textColor: "#000"
        },
        {
          title: "V8455P",
          content: "Tropical Tan",
          boxColor: "#998d7e",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#535456",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#e9edd3',
    id_title: "V7715P",
    id_content: "Luminous",
    view:'',
    title: "Eternal Temple - D",
      mainImage: { src: "/images/Eternal Temple-D.png" },
      contentBoxes: [
        {
          title: "V7715P",
          content: "Luminous",
          boxColor: "#e9edd3",
          textColor: "#000"
        },
        {
          title: "V7325P",
          content: "Twilight Zone",
          boxColor: "#275c91",
          textColor: "#000"
        },
        {
          title: "V7542P",
          content: "Emerald Valley",
          boxColor: "#478678",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#d1d995',
    id_title: "V7768P",
    id_content: "Calm Fauna",
    view:'',
    title: "Modern Geometry - E",
      mainImage: { src: "/images/Modern Geometry-E.png" },
      contentBoxes: [
        {
          title: "V7768P",
          content: "Calm Fauna",
          boxColor: "#d1d995",
          textColor: "#000"
        },
        {
          title: "V7838P",
          content: "Green Beret",
          boxColor: "#bda65d",
          textColor: "#000"
        },
        {
          title: "V0419P",
          content: "Nut Brown - N",
          boxColor: "#735346",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#918b72',
    id_title: "V8479P",
    id_content: "Turtle Shell",
    view:'',
    title: "Gradual Elevations - D",
      mainImage: { src: "/images/Gradual Elevations-D.png" },
      contentBoxes: [
        {
          title: "V8479P",
          content: "Turtle Shell",
          boxColor: "#918b72",
          textColor: "#000"
        },
        {
          title: "V7386P",
          content: "Blank Slate",
          boxColor: "#b5ced3",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#d7e8b5',
    id_title: "V7713P",
    id_content: "Lime Squash",
    view:'',
    title: "Retro Modern - E",
      mainImage: { src: "/images/Retro Modern-E.png" },
      contentBoxes: [
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#d7e8b5",
          textColor: "#000"
        },
        {
          title: "V8565P",
          content: "Cairo Bazaar",
          boxColor: "#86624a",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#dbdaab',
    id_title: "V7810P",
    id_content: "Dry Moss",
    view:'',
    title: "Beach House - E",
      mainImage: { src: "/images/Beach House-E.jpg" },
      contentBoxes: [
        {
          title: "V7810P",
          content: "Dry Moss",
          boxColor: "#dbdaab",
          textColor: "#000"
        },
        {
          title: "V8693P",
          content: "Cheerful Cherry",
          boxColor: "#774a4c",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#b5d1cd',
    id_title: "V7482P",
    id_content: "Sparkling Water",
    view:'',
    title: "Modern Baroque - D",
      mainImage: { src: "/images/Modern Baroque-D.jpg" },
      contentBoxes: [
        {
          title: "V7482P",
          content: "Sparkling Water",
          boxColor: "#b5d1cd",
          textColor: "#000"
        },
        {
          title: "V6129P",
          content: "Pilgrim",
          boxColor: "#a0a5ad",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#c6d4b6',
    id_title: "V7690P",
    id_content: "Forest Foliage",
    view:'',
    title: "Arched Residence - B",
      mainImage: { src: "/images/Arched Residence-B.jpg" },
      contentBoxes: [
        {
          title: "V7690P",
          content: "Forest Foliage",
          boxColor: "#c6d4b6",
          textColor: "#000"
        },
        {
          title: "V8255P",
          content: "Stone Path",
          boxColor: "#6f757e",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#9fb1bb',
    id_title: "V8266P",
    id_content: "Bali Blue",
    view:'',
    title: "Arched Residence - E",
      mainImage: { src: "/images/Arched Residence-E.jpg" },
      contentBoxes: [
        {
          title: "V8266P",
          content: "Bali Blue",
          boxColor: "#9fb1bb",
          textColor: "#000"
        },
        {
          title: "V7366P",
          content: "Ashberry",
          boxColor: "#486e81",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#e5ebcd',
    id_title: "V2353P",
    id_content: "Alto - N",
    view:'',
    title: "Iconic Villa - E",
      mainImage: { src: "/images/Iconic Villa-E.png" },
      contentBoxes: [
        {
          title: "V2353P",
          content: "Alto - N",
          boxColor: "#e5ebcd",
          textColor: "#000"
        },
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#824b4f",
          textColor: "#000"
        }
      ]
  }

  
]

export const exteriorColor3 =[
  {
    id:'1',
    color: '#efe2c0',
    id_title: "V7891P",
    id_content: "Wheat Spring",
    view:'',
    title: "Crafted Cube - D",
      mainImage: { src: "/images/crafted Cube-D.jpg" },
      contentBoxes: [
        {
          title: "V7891P",
          content: "Wheat Sprig",
          boxColor: "#efe2c0",
          textColor: "#000"
        },
        {
          title: "V7304P",
          content: "Piece of Sky",
          boxColor: "#6c90a9",
          textColor: "#000"
        },
        {
          title: "V8566P",
          content: "Tree Bark",
          boxColor: "#9f795e",
          textColor: "#000"
        }]
  },
  {
    id:'2',
    color: '#e8d18f',
    id_title: "V7880P",
    id_content: "Honey Mustard",
    view:'',
    title: "Crafted Cube - E",
      mainImage: { src: "/images/crafted Cube-E.jpg" },
      contentBoxes: [
        {
          title: "V7880P",
          content: "Honey Mustard",
          boxColor: "#e8d18f",
          textColor: "#000"
        },
        {
          title: "V8288P",
          content: "Stone Age",
          boxColor: "#83898c",
          textColor: "#000"
        }
      ]
  },
  {
    id:'3',
    color: '#f2e4b6',
    id_title: "V7882P",
    id_content: "Solemn Yellow",
    view:'',
    title: "Cutting-edge - B",
      mainImage: { src: "/images/Cutting-edge - B.jpg" },
      contentBoxes: [
        {
          title: "V7882P",
          content: "Solemn Yellow",
          boxColor: "#f2e4b6",
          textColor: "#000"
        },
        {
          title: "V0R05P",
          content: "Mahogany",
          boxColor: "#714143",
          textColor: "#000"
        }
      ]
  },
  {
    id:'4',
    color: '#fedfa2',
    id_title: "V7961P",
    id_content: "Peaches and Cream",
    view:'',
    title: "Cutting-edge - C",
      
      mainImage: { src: "/images/Cutting-edge - C.jpg" },
      contentBoxes: [
        {
          title: "V7961P",
          content: "Peaches and Cream",
          boxColor: "#fedfa2",
          textColor: "#000"
        },
        {
          title: "V9624P",
          content: "Lilac Dusk - N",
          boxColor: "#746f7f",
          textColor: "#000"
        }
      ]
  },
  {
    id:'5',
    color: '#f4eac7',
    id_title: "V7947P",
    id_content: "Corn Cob",
    view:'',
    title: "Elegant Simplicity - D",
      mainImage: { src: "/images/Elegant Simplicity-D.png" },
      contentBoxes: [
        {
          title: "V7947P",
          content: "Corn Cob",
          boxColor: "#f8eecb",
          textColor: "#000"
        },
        {
          title: "V8034P",
          content: "Pink Bib",
          boxColor: "#fcd5c8",
          textColor: "#000"
        }
        ,
        {
          title: "V9988P",
          content: "Rich Maple - N",
          boxColor: "#cb6755",
          textColor: "#000"
        }
      ]
  },
  {
    id:'6',
    color: '#ddd29b',
    id_title: "V7840P",
    id_content: "Divine Wine",
    view:'',
    title: "Retro Regal - E",
      mainImage: { src: "/images/Retro Regal-E.jpg" },
      contentBoxes: [
        {
          title: "V7840P",
          content: "Divine Wine",
          boxColor: "#ddd29b",
          textColor: "#000"
        },
        {
          title: "V8312P",
          content: "Gothic Grey",
          boxColor: "#7f888a",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#fce2a3',
    id_title: "V7921P",
    id_content: "Summer Harvest",
    view:'',
    title: "Eternal Temple - E",
      mainImage: { src: "/images/Eternal Temple-E.png" },
      contentBoxes: [
        {
          title: "V7921P",
          content: "Summer Harvest",
          boxColor: "#fce2a3",
          textColor: "#000"
        },
        {
          content: "Khakhi",
          boxColor: "#91684c",
          textColor: "#000"
        }
        ,
        {
          title: "V7367P",
          content: "Storm Blue",
          boxColor: "#688ca5",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#e7e0c3',
    id_title: "V3119P",
    id_content: "Cashmere - N",
    view:'',
    title: "Modern Geometry - D",
      mainImage: { src: "/images/Modern Geometry-D.png" },
      contentBoxes: [
        {
          title: "V3119P",
          content: "Cashmere - N",
          boxColor: "#e7e0c3",
          textColor: "#000"
        },
        {
          title: "V7443P",
          content: "Inner Peace",
          boxColor: "#c6e6e4",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f8e8be',
    id_title: "V7930P",
    id_content: "Hearth",
    view:'',
    title: "Gradual Elevations - A",
      mainImage: { src: "/images/Gradual Elevations-A.png" },
      contentBoxes: [
        {
          title: "V7930P",
          content: "Hearth",
          boxColor: "#f8e8be",
          textColor: "#000"
        },
        {
          title: "V8085P",
          content: "Scarlet",
          boxColor: "#b13944",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Granizia Coarse Off White",
          boxColor: "#b5b6ae",
          textColor: "#000"
        }
      ]
  },
  {
    id:'10',
    color: '#ccc585',
    id_title: "V7832P",
    id_content: "Golden Apple",
    view:'',
    title: "Gradual Elevations - C",
      mainImage: { src: "/images/Gradual Elevations-C.png" },
      contentBoxes: [
        {
          title: "V7832P",
          content: "Golden Apple",
          boxColor: "#ccc585",
          textColor: "#000"
        },
        {
          title: "VL152P",
          content: "Cream Pie",
          boxColor: "#f6f3e8",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#f7efd7',
    id_title: "V7956P",
    id_content: "Honey Dew",
    view:'',
    title: "Retro Modern - A",
      mainImage: { src: "/images/Retro Modern-A.jpg" },
      contentBoxes: [
        {
          title: "V7956P",
          content: "Honey Dew",
          boxColor: "#f7efd7",
          textColor: "#000"
        },
        {
          title: "V7950P",
          content: "Fire Globe",
          boxColor: "#feb747",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Aeris Rust",
          boxColor: "#643c26",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#fee2aa',
    id_title: "V7953P",
    id_content: "Fairy Glitte",
    view:'',
    title: "Retro Modern - B",
      mainImage: { src: "/images/Retro Modern-B.jpg" },
      contentBoxes: [
        {
          title: "V7953P",
          content: "Fairy Glitte",
          boxColor: "#fee2aa",
          textColor: "#000"
        },
        {
          title: "V7975P",
          content: "Roasted Sesame",
          boxColor: "#feb46d",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#fae1bc',
    id_title: "V7970P",
    id_content: "Nacho Cheese",
    view:'',
    title: "Beach House - C",
      mainImage: { src: "/images/Beach House-C.jpg" },
      contentBoxes: [
        {
          title: "V7970P",
          content: "Nacho Cheese",
          boxColor: "#fae1bc",
          textColor: "#000"
        },
        {
          title: "V7232P",
          content: "Thunder",
          boxColor: "#9fa7ba",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#fee0b1',
    id_title: "V7977P",
    id_content: "Mango Duet",
    view:'',
    title: "Beach House - D",
      mainImage: { src: "/images/Beach House-D.jpg" },
      contentBoxes: [
        {
          title: "V7977P",
          content: "Mango Duet",
          boxColor: "#fee0b1",
          textColor: "#000"
        },
        {
          title: "V8023P",
          content: "Carrot Punch",
          boxColor: "#e3915f",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#f6ead2',
    id_title: "V7931P",
    id_content: "Shredded Wheat",
    view:'',
    title: "Lattice House - C",
      mainImage: { src: "/images/Lattice House-C.jpg" },
      contentBoxes: [
        {
          title: "V7931P",
          content: "Shredded Wheat",
          boxColor: "#f6ead2",
          textColor: "#000"
        },
        {
          title: "V8103P",
          content: "Mauve Medley",
          boxColor: "#af7779",
          textColor: "#000"
        },
        {
          title: "V8098P",
          content: "Pink Dollop",
          boxColor: "#fad5db",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#f2ecd2',
    id_title: "V7843P",
    id_content: "Margarine",
    view:'',
    title: "Country House - B",
      mainImage: { src: "/images/Country House-B.jpg" },
      contentBoxes: [
        {
          title: "V7843P",
          content: "Margarine",
          boxColor: "#f2ecd2",
          textColor: "#000"
        },
        {
          title: "V9872P",
          content: "Olive Tapenade - N",
          boxColor: "#9f7848",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#fcebbc',
    id_title: "V7946P",
    id_content: "Sunny Side Up",
    view:'',
    title: "Country House - E",
      mainImage: { src: "/images/Country House-E.jpg" },
      contentBoxes: [
        {
          title: "V7946P",
          content: "Sunny Side Up",
          boxColor: "#fcebbc",
          textColor: "#000"
        },
        {
          title: "V7158P",
          content: "Royale Robes",
          boxColor: "#827ab0",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#f2e0a3',
    id_title: "V0399P",
    id_content: "Pineapple - N",
    view:'',
    title: "Arched Residence - C",
      mainImage: { src: "/images/Arched Residence-C.jpg" },
      contentBoxes: [
        {
          title: "V0399P",
          content: "Pineapple - N",
          boxColor: "#f2e0a3",
          textColor: "#000"
        },
        {
          title: "V7526P",
          content: "Jade Impact",
          boxColor: "#439186",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#d4ba9d',
    id_title: "V4215P",
    id_content: "Swiss Coffee",
    view:'',
    title: "Arched Residence - D",
      mainImage: { src: "/images/Arched Residence-D.jpg" },
      contentBoxes: [
        {
          title: "V4215P",
          content: "Swiss Coffee",
          boxColor: "#d4ba9d",
          textColor: "#000"
        },
        {
          title: "V8535P",
          content: "Brown Tan",
          boxColor: "#af8c6b",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#ebd9ad',
    id_title: "V7890P",
    id_content: "Sisal Mat",
    view:'',
    title: "Iconic Villa - A",
      mainImage: { src: "/images/Iconic Villa - A.jpg" },
      contentBoxes: [
        {
          title: "V7890P",
          content: "Sisal Mat",
          boxColor: "#ebd9ad",
          textColor: "#000"
        },
        {
          title: "V7877P",
          content: "Ripe Olive",
          boxColor: "#ba9c40",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Aristone Yellow",
          boxColor: "#6b542a",
          textColor: "#000"
        }
      ]
  },
  {
    id:'21',
    color: '#f0e6d2',
    id_title: "V0942P",
    id_content: "Daybreak",
    view:'',
    title: "Iconic Villa - C",
      mainImage: { src: "/images/Iconic Villa - C.jpg" },
      contentBoxes: [
        {
          title: "V0942P",
          content: "Daybreak",
          boxColor: "#f0e6d2",
          textColor: "#000"
        },
        {
          title: "V9643P",
          content: "Sailor’s Stripes - N",
          boxColor: "#415273",
          textColor: "#000"
        },
        {
          title: "V7959P",
          content: "Orange Crush",
          boxColor: "#fec169",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#fae7bc',
    id_title: "V7954P",
    id_content: "Dreamsicle",
    view:'',
    title: "Iconic Villa - D",
      mainImage: { src: "/images/Iconic Villa-D.png" },
      contentBoxes: [
        {
          title: "V7954P",
          content: "Dreamsicle",
          boxColor: "#fae7bc",
          textColor: "#000"
        },
        {
          title: "V8206P",
          content: "Cardinal",
          boxColor: "#82717c",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#f7f2c6',
    id_title: "V7866P",
    id_content: "Butter Scotch",
    view:'',
    title: "Twisting Maze - B",
      mainImage: { src: "/images/Twisting Maze-B.jpg" },
      contentBoxes: [
        {
          title: "V7866P",
          content: "Butter Scotch",
          boxColor: "#f7f2c6",
          textColor: "#000"
        },
        {
          title: "V8295P",
          content: "Sleigh Bells",
          boxColor: "#858585",
          textColor: "#000"
        }
      ]
  },
  {
    id:'24',
    color: '#f9efc8',
    id_title: "V7834P",
    id_content: "Gold Gleam",
    view:'',
    title: "Grooved Design - D",
      mainImage: { src: "/images/Grooved Design-D.jpg" },
      contentBoxes: [
        {
          title: "V7834P",
          content: "Gold Gleam",
          boxColor: "#f9efc8",
          textColor: "#000"
        },
        {
          title: "V7767P",
          content: "Harvest Season",
          boxColor: "#ccc97d",
          textColor: "#000"
        }
      ]
  }

  
]

export const exteriorColor4 =[
  {
    id:'1',
    color: '#dccee4',
    id_title: "V7162P",
    id_content: "Quartz Illusion",
    view:'',
    title: "Roman Heritage - A",
      mainImage: { src: "/images/Roman Heritage-A.jpg" },
      contentBoxes: [
        {
          title: "V7162P",
          content: "Quartz Illusion",
          boxColor: "#dccee4",
          textColor: "#000"
        },
        {
          title: "V8527P",
          content: "Antelope",
          boxColor: "#b39671",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Lumiflakes Coarse Maroon",
          boxColor: "#a99f9c",
          textColor: "#000"
        }]
  },
  {
    id:'2',
    color: '#fcdabf',
    id_title: "V8002P",
    id_content: "Bashful Beige",
    view:'',
    title: "Roman Heritage - D",
      mainImage: { src: "/images/Roman Heritage-D.jpg" },
      contentBoxes: [
        {
          title: "V8002P",
          content: "Bashful Beige",
          boxColor: "#fcdabf",
          textColor: "#000"
        },
        {
          title: "V8325P",
          content: "Eclipse",
          boxColor: "#55564f",
          textColor: "#000"
        }
      ]
  },
  {
    id:'3',
    color: '#bfadce',
    id_title: "V7152P",
    id_content: "Mount Olympus",
    view:'',
    title: "Cutting Edge - D",
      mainImage: { src: "/images/Cutting-edge - D.jpg" },
      contentBoxes: [
        {
          title: "V7152P",
          content: "Mount Olympus",
          boxColor: "#bfadce",
          textColor: "#000"
        },
        {
          title: "V7147P",
          content: "Lavender Laugh",
          boxColor: "#dad0da",
          textColor: "#000"
        },
        {
          title: "V5103P",
          content: "Amber - N",
          boxColor: "#b77153",
          textColor: "#000"
        }
      ]
  },
  {
    id:'4',
    color: '#dfd5cd',
    id_title: "V8756P",
    id_content: "Sound of Music",
    view:'',
    title: "Elegant Simplicity - B",
      
      mainImage: { src: "/images/Elegant Simplicity-B.png" },
      contentBoxes: [
        {
          title: "V8756P",
          content: "Sound of Music",
          boxColor: "#dfd5cd",
          textColor: "#000"
        },
        {
          title: "V8649P",
          content: "Hidden Vale",
          boxColor: "#b9a198",
          textColor: "#000"
        },
        {
          title: "V0509P",
          content: "Geranium",
          boxColor: "#b34b42",
          textColor: "#000"
        }
      ]
  },
  {
    id:'5',
    color: '#d4c3b4',
    id_title: "V8778P",
    id_content: "Walnut Cream",
    view:'',
    title: "Elegant Simplicity - E",
      mainImage: { src: "/images/Elegant Simplicity-E.png" },
      contentBoxes: [
        {
          title: "V8778P",
          content: "Walnut Cream",
          boxColor: "#d4c3b4",
          textColor: "#000"
        },
        {
          title: "V8568P",
          content: "Indian Spice",
          boxColor: "#bb9a80",
          textColor: "#000"
        }
        ,
        {
          title: "V8270P",
          content: "Ink Grey",
          boxColor: "#546571",
          textColor: "#000"
        }
      ]
  },
  {
    id:'6',
    color: '#f3d5ce',
    id_title: "VK232P",
    id_content: "Strawbella - N",
    view:'',
    title: "Retro Regal - D",
      mainImage: { src: "/images/Retro Regal-D.jpg" },
      contentBoxes: [
        {
          title: "VK232P",
          content: "Strawbella - N",
          boxColor: "#f3d5ce",
          textColor: "#000"
        },
        {
          title: "V0336P",
          content: "Buttercup - N",
          boxColor: "#dec197",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#824b4f',
    id_title: "V8101P",
    id_content: "Milan Red",
    view:'',
    title: "Gradual Elevations - B",
      mainImage: { src: "/images/Gradual Elevations-B.png" },
      contentBoxes: [
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#824b4f",
          textColor: "#000"
        },
        {
          title: "V7860P",
          content: "Thick Cream",
          boxColor: "#f4eed9",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#fbe3d8',
    id_title: "V8035P",
    id_content: "Rose Bud",
    view:'',
    title: "Gradual Elevations - E",
      mainImage: { src: "/images/Gradual Elevations-E.png" },
      contentBoxes: [
        {
          title: "V8035P",
          content: "Rose Bud",
          boxColor: "#fbe3d8",
          textColor: "#000"
        },
        {
          title: "V0U42P",
          content: "Wedgewood",
          boxColor: "#7796a0",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f7dec8',
    id_title: "V8019P",
    id_content: "Coral Rocks",
    view:'',
    title: "Retro Modern - C",
      mainImage: { src: "/images/Retro Modern-C.jpg" },
      contentBoxes: [
        {
          title: "V8019P",
          content: "Coral Rocks",
          boxColor: "#f7dec8",
          textColor: "#000"
        },
        {
          title: "V7778P",
          content: "Limon",
          boxColor: "#e7ebbd",
          textColor: "#000"
        },
        {
          title: "K137",
          content: "Basilico - N",
          boxColor: "#637165",
          textColor: "#000"
        }
      ]
  },
  {
    id:'10',
    color: '#efdfce',
    id_title: "V8580P",
    id_content: "Memories",
    view:'',
    title: "Retro Modern - D",
      mainImage: { src: "/images/Retro Modern-D.jpg" },
      contentBoxes: [
        {
          title: "V8580P",
          content: "Memories",
          boxColor: "#efdfce",
          textColor: "#000"
        },
        {
          title: "V7369P",
          content: "Harbor Fog",
          boxColor: "#96bdcc",
          textColor: "#000"
        },
        {
          title: "V8574P",
          content: "Burnished Caramel",
          boxColor: "#99745c",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#e6dcd1',
    id_title: "V8780P",
    id_content: "Southern Sand",
    view:'',
    title: "Beach House - B",
      mainImage: { src: "/images/Beach House-B.jpg" },
      contentBoxes: [
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e6dcd1",
          textColor: "#000"
        },
        {
          title: "VK262P",
          content: "Rosewood Rouge - N",
          boxColor: "#8a4d4a",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#f0e5e5',
    id_title: "V9108P",
    id_content: "Iris Ice",
    view:'',
    title: "Lattice House - E",
      mainImage: { src: "/images/Lattice House-E.jpg" },
      contentBoxes: [
        {
          title: "V9108P",
          content: "Iris Ice",
          boxColor: "#f0e5e5",
          textColor: "#000"
        },
        {
          title: "V0318P",
          content: "Light Biscuit - N",
          boxColor: "#ddad90",
          textColor: "#000"
        },
        {
          title: "V7944P",
          content: "Sunspot",
          boxColor: "#fee090",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#e5dbcc',
    id_title: "V8499P",
    id_content: "Meadow Lark",
    view:'',
    title: "Modern Baroque - A",
      mainImage: { src: "/images/Modern Baroque-A.jpg" },
      contentBoxes: [
        {
          title: "V8499P",
          content: "Meadow Lark",
          boxColor: "#e6dece",
          textColor: "#000"
        },
        {
          title: "V7511P",
          content: "Valley Green",
          boxColor: "#2d9f96",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#e8c8bd',
    id_title: "V8643P",
    id_content: "Almond Kiss",
    view:'',
    title: "Modern Baroque - B",
      mainImage: { src: "/images/Modern Baroque-B.jpg" },
      contentBoxes: [
        {
          title: "V8643P",
          content: "Almond Kiss",
          boxColor: "#e8c8bd",
          textColor: "#000"
        },
        {
          title: "V7293P",
          content: "Mystic Dream",
          boxColor: "#3d4c60",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#fee3c9',
    id_title: "V7994P",
    id_content: "Peach Rose",
    view:'',
    title: "Modern Baroque - C",
      mainImage: { src: "/images/Modern Baroque-C.jpg" },
      contentBoxes: [
        {
          title: "V7994P",
          content: "Peach Rose",
          boxColor: "#fee3c9",
          textColor: "#000"
        },
        {
          title: "VK004P",
          content: "Heady Wine - N",
          boxColor: "#a5464d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#a2a3c6',
    id_title: "V7168P",
    id_content: "Orchid Bloom",
    view:'',
    title: "Modern Baroque - E",
      mainImage: { src: "/images/Modern Baroque-E.jpg" },
      contentBoxes: [
        {
          title: "V7168P",
          content: "Orchid Bloom",
          boxColor: "#a2a3c6",
          textColor: "#000"
        },
        {
          title: "V8528P",
          content: "Bush Land",
          boxColor: "#bfa080",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#f8e2e2',
    id_title: "V8092P",
    id_content: "Pink Mist",
    view:'',
    title: "Country House - A",
      mainImage: { src: "/images/Country House-A.jpg" },
      contentBoxes: [
        {
          title: "V8092P",
          content: "Pink Mist",
          boxColor: "#f8e2e2",
          textColor: "#000"
        },
        {
          title: "V8088P",
          content: "Rose Bouquet",
          boxColor: "#f3abb7",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Amara Grey",
          boxColor: "#7e887d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#fde4c2',
    id_title: "V7978P",
    id_content: "Orange Frost",
    view:'',
    title: "Country House - C",
      mainImage: { src: "/images/Country House-C.jpg" },
      contentBoxes: [
        {
          title: "V7978P",
          content: "Orange Frost",
          boxColor: "#fde4c2",
          textColor: "#000"
        },
        {
          title: "V0643P",
          content: "Steel Grey",
          boxColor: "#a0a3a2",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#e4d1bf',
    id_title: "V0940P",
    id_content: "Antique White",
    view:'',
    title: "Country House - D",
      mainImage: { src: "/images/Country House-D.jpg" },
      contentBoxes: [
        {
          title: "V0940P",
          content: "Antique White",
          boxColor: "#e4d1bf",
          textColor: "#000"
        },
        {
          title: "V9988P",
          content: "Rich Maple - N",
          boxColor: "#cb6755",
          textColor: "#000"
        },
        {
          title: "V7192P",
          content: "Senate Purple",
          boxColor: "#9996b0",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#ded6dc',
    id_title: "V9139P",
    id_content: "Berry Shake",
    view:'',
    title: "Arched Residence - A",
      mainImage: { src: "/images/Arched Residence-A.jpg" },
      contentBoxes: [
        {
          title: "V9139P",
          content: "Berry Shake",
          boxColor: "#ded6dc",
          textColor: "#000"
        },
        {
          title: "V7957P",
          content: "Orange Peel",
          boxColor: "#fe9b29",
          textColor: "#000"
        },
        {
          title: "V7161P",
          content: "Potpourri",
          boxColor: "#cac0df",
          textColor: "#000"
        }
      ]
  },
  {
    id:'21',
    color: '#eee1cd',
    id_title: "V8532P",
    id_content: "Easter Lily",
    view:'',
    title: "Twisting Maze - C",
      mainImage: { src: "/images/Twisting Maze-C.jpg" },
      contentBoxes: [
        {
          title: "V8532P",
          content: "Easter Lily",
          boxColor: "#eee1cd",
          textColor: "#000"
        },
        {
          title: "V8709P",
          content: "Vine Yard",
          boxColor: "#7a4f58",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#d7d3cd',
    id_title: "V8298P",
    id_content: "Silver Trinket",
    view:'',
    title: "Twisting Maze - E",
      mainImage: { src: "/images/Twisting Maze-E.jpg" },
      contentBoxes: [
        {
          title: "V8298P",
          content: "Silver Trinket",
          boxColor: "#d7d3cd",
          textColor: "#000"
        },
        {
          title: "V8167P",
          content: "Muted Scarlet",
          boxColor: "#c698c0",
          textColor: "#000"
        },
        {
          title: "V9584P",
          content: "Fervent Fuchsia - N",
          boxColor: "#af5987",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#fdd6ab',
    id_title: "V7969P",
    id_content: "Coral Beach",
    view:'',
    title: "Grooved Design - E",
      mainImage: { src: "/images/Grooved Design-E.jpg" },
      contentBoxes: [
        {
          title: "V7969P",
          content: "Coral Beach",
          boxColor: "#fdd6ab",
          textColor: "#000"
        },
        {
          title: "V7809P",
          content: "Chinese Tea",
          boxColor: "#d0c38f",
          textColor: "#000"
        }
      ]
  }

  
]