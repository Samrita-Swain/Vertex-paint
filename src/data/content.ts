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
    image: '/images/peaceful&serene.png',
    explore: '/Exterior/PeacefulSerene'
  },
  {
    id: 'TrendyStylish',
    title: 'Trendy & Stylish',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/trendy&stylish.png',
    explore: '/Exterior/TrendyStylish'
  },
  {
    id: 'soft-&-relaxing',
    title: 'Soft & Relaxing',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/soft&relaxing.png',
    explore: '/Exterior/SoftRelaxing'
  },
  {
    id: 'exciting-&-bright',
    title: 'Exciting & Bright',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/exciting&brignt.png',
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
      mainImage: { src: "/images/crafted-cube-A.png" },
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
      mainImage: { src: "/images/crafted-cube-B.png" },
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
      mainImage: { src: "/images/Roman Heritage-B.png" },
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
    title: "Country-style - A",
      
      mainImage: { src: "/images/Country-style-A.png" },
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
    title: "Country-style - B",
      mainImage: { src: "/images/Country-style-B.png" },
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
    color: '#f4efdb',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Retro Regal - A",
      mainImage: { src: "/images/Retro Regal-A.png" },
      contentBoxes: [
        {
          title: "V7876P",
          content: "Soft Honey",
          boxColor: "#f3eeda",
          textColor: "#000"
        },
        {
          title: "V7304P",
          content: "Piece of Sky",
          boxColor: "#678aa3",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#f0ebe1',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Retro Regal - B",
      mainImage: { src: "/images/Retro Regal-B.png" },
      contentBoxes: [
        {
          title: "VL104P",
          content: "Cotton Wool",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V0533P",
          content: "Brick Red - N",
          boxColor: "#a36249",
          textColor: "#000"
        },
        {
          title: "V9514P",
          content: "Creamy Crust",
          boxColor: "#cbc1b2",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f0ebdc',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Eternal Temple - A",
      mainImage: { src: "/images/Eternal Temple-A.png" },
      contentBoxes: [
        {
          title: "VL140P",
          content: "Crushed Ice",
          boxColor: "#eee9da",
          textColor: "#000"
        },
        {
          title: "V8015P",
          content: "Grand Canyon",
          boxColor: "#cb8f71",
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
    color: '#f0f0e1',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Eternal Temple - B",
      mainImage: { src: "/images/Eternal Temple-B.png" },
      contentBoxes: [
        {
          title: "VL144P",
          content: "Love Song",
          boxColor: "#eeeedf",
          textColor: "#000"
        },
        {
          
          content: "Spl Flame Red",
          boxColor: "#b25849",
          textColor: "#000"
        },
        {
          title: "V7941P",
          content: "Turmeric",
          boxColor: "#f8ad00",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#ebe6dc',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Modern Geometry - A",
      mainImage: { src: "/images/Modern Geometry-A.png" },
      contentBoxes: [
        {
          title: "V8444P",
          content: "Ice Crystal",
          boxColor: "#e9e4da",
          textColor: "#000"
        },
        {
          title: "V8561P",
          content: "Oak Leaf",
          boxColor: "#e4c6a3",
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
    color: '#f3eee4',
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
    id:'13',
    color: '#f5f0d7',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Modern Geometry - C",
      mainImage: { src: "/images/Modern Geometry-C.png" },
      contentBoxes: [
        {
          title: "V7964P",
          content: "Custard Apple",
          boxColor: "#f3eed5",
          textColor: "#000"
        },
        {
          title: "V8330P",
          content: "Nimbus Shower",
          boxColor: "#b2b7ad",
          textColor: "#000"
        },
        {
          title: "V9647P",
          content: "Naval Club - N",
          boxColor: "#2b588a",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#f4efe5',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Beach House - A",
      mainImage: { src: "/images/Beach House-A.png" },
      contentBoxes: [
        {
          title: "VL143P",
          content: "Rain Drop",
          boxColor: "#f3eee4",
          textColor: "#000"
        },
        {
          title: "V7342P",
          content: "Waikiki",
          boxColor: "#3f80a3",
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
    color: '#f0ebdc',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Lattice House - B",
      mainImage: { src: "/images/Lattice House-B.png" },
      contentBoxes: [
        {
          title: "VL124P",
          content: "Pure Ivory",
          boxColor: "#eee9da",
          textColor: "#000"
        },
        {
          title: "V7208P",
          content: "Petal Soft",
          boxColor: "#9ea8d0",
          textColor: "#000"
        },
        {
          title: "V8234P",
          content: "Fleecy Coat",
          boxColor: "#b2b2b2",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#f0ebe1',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Lattice House - D",
      mainImage: { src: "/images/Lattice House-D.png" },
      contentBoxes: [
        {
          title: "VL122P",
          content: "Skimmed Cream",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V7527P",
          content: "Green Haven",
          boxColor: "#62a8a3",
          textColor: "#000"
        },
        {
          title: "V7233P",
          content: "Ice Cube",
          boxColor: "#adb7c6",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#efeae0',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Iconic Villa - B",
      mainImage: { src: "/images/Iconic Villa-B.png" },
      contentBoxes: [
        {
          title: "VL103P",
          content: "Pearl Star",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V7415P",
          content: "Steel Mesh",
          boxColor: "#6c99a3",
          textColor: "#000"
        },
        {
          title: "V9876P",
          content: "Happy Canary - N",
          boxColor: "#f8da71",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#f5f0dc',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Twisting Maze - A",
      mainImage: { src: "/images/Twisting Maze-A.png" },
      contentBoxes: [
        {
          title: "V7868P",
          content: "Sun Screen",
          boxColor: "#f3eeda",
          textColor: "#000"
        },
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#cbdaa8",
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
    color: '#f5f0d7',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Twisting Maze - D",
      mainImage: { src: "/images/Twisting Maze-D.png" },
      contentBoxes: [
        {
          title: "V7884P",
          content: "Soft Linen",
          boxColor: "#f3eed5",
          textColor: "#000"
        },
        {
          title: "V7981P",
          content: "Dusky Saffron",
          boxColor: "#c67630",
          textColor: "#000"
        }
      ]
  },
  {
    id:'21',
    color: '#e6e6e6',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Grooved Design - A",
      mainImage: { src: "/images/Grooved Design-A.png" },
      contentBoxes: [
        {
          title: "VL180P",
          content: "Innocent White",
          boxColor: "#e4e4e4",
          textColor: "#000"
        },
        {
          title: "V7303P",
          content: "Stormy Sea",
          boxColor: "#587b94",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#f0e6d7',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Grooved Design - B",
      mainImage: { src: "/images/Grooved Design-B.png" },
      contentBoxes: [
        {
          title: "VL134P",
          content: "Double Cream",
          boxColor: "#eee4d5",
          textColor: "#000"
        },
        {
          title: "V7166P",
          content: "Intense Purple",
          boxColor: "#7b76a8",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#f5f0dc',
    id_title: "V9983P",
    id_content: "Brick Dust - N",
    view:'',
    title: "Grooved Design - C",
      mainImage: { src: "/images/Grooved Design-C.png" },
      contentBoxes: [
        {
          title: "V7948P",
          content: "Crescent",
          boxColor: "#f3eeda",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#4d4d52",
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
      mainImage: { src: "/images/crafted-cube-C.png" },
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
      mainImage: { src: "/images/Roman Heritage-C.png" },
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
      mainImage: { src: "/images/Roman Heritage-B.png" },
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
      
      mainImage: { src: "/images/Cutting-edge-A.png" },
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
      mainImage: { src: "/images/Cutting-edge-E.png" },
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
    title: "Country-style - C",
      mainImage: { src: "/images/Country-style-C.png" },
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
    title: "Country-style - D",
      mainImage: { src: "/images/Country-style-D.png" },
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
    title: "Country-style - E",
      mainImage: { src: "/images/Country-style-E.png" },
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
    title: "Country-style - E",
      mainImage: { src: "/images/Country-style-E.png" },
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
    color: '#eaeac7',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Eternal Temple - C",
      mainImage: { src: "/images/Eternal Temple-C.png" },
      contentBoxes: [
        {
          title: "V7771P",
          content: "Hushed Hue",
          boxColor: "#e9e9c6",
          textColor: "#000"
        },
        {
          title: "V8455P",
          content: "Tropical Tan",
          boxColor: "#948a7b",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#4e4e53",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#e6ebd2',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Eternal Temple - D",
      mainImage: { src: "/images/Eternal Temple-D.png" },
      contentBoxes: [
        {
          title: "V7715P",
          content: "Luminous",
          boxColor: "#e4e9d0",
          textColor: "#000"
        },
        {
          title: "V7325P",
          content: "Twilight Zone",
          boxColor: "#21588f",
          textColor: "#000"
        },
        {
          title: "V7542P",
          content: "Emerald Valley",
          boxColor: "#448076",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#ccd690',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Geometry - E",
      mainImage: { src: "/images/Modern Geometry-E.png" },
      contentBoxes: [
        {
          title: "V7768P",
          content: "Calm Fauna",
          boxColor: "#cbd58f",
          textColor: "#000"
        },
        {
          title: "V7838P",
          content: "Green Beret",
          boxColor: "#b7a358",
          textColor: "#000"
        },
        {
          title: "V0419P",
          content: "Nut Brown - N",
          boxColor: "#714e44",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#90866d',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Gradual Elevations - D",
      mainImage: { src: "/images/Gradual Elevations-D.png" },
      contentBoxes: [
        {
          title: "V8479P",
          content: "Turtle Shell",
          boxColor: "#8f856c",
          textColor: "#000"
        },
        {
          title: "V7386P",
          content: "Blank Slate",
          boxColor: "#b2cbd0",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#d6e5b3',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Modern - E",
      mainImage: { src: "/images/Retro Modern-E.png" },
      contentBoxes: [
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#d5e4b2",
          textColor: "#000"
        },
        {
          title: "V8565P",
          content: "Cairo Bazaar",
          boxColor: "#805d44",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#d6d6a9',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Beach House - E",
      mainImage: { src: "/images/Beach House-E.png" },
      contentBoxes: [
        {
          title: "V7810P",
          content: "Dry Moss",
          boxColor: "#d5d5a8",
          textColor: "#000"
        },
        {
          title: "V8693P",
          content: "Cheerful Cherry",
          boxColor: "#714449",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#b3cccc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Baroque - D",
      mainImage: { src: "/images/Modern Baroque-D.png" },
      contentBoxes: [
        {
          title: "V7482P",
          content: "Sparkling Water",
          boxColor: "#b2cbcb",
          textColor: "#000"
        },
        {
          title: "V6129P",
          content: "Pilgrim",
          boxColor: "#9ea3a8",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#c3d2b4',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Arched Residence - B",
      mainImage: { src: "/images/Arched Residence-B.png" },
      contentBoxes: [
        {
          title: "V7690P",
          content: "Forest Foliage",
          boxColor: "#c1d0b2",
          textColor: "#000"
        },
        {
          title: "V8255P",
          content: "Stone Path",
          boxColor: "#6c717b",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#9aaeb8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Arched Residence - E",
      mainImage: { src: "/images/Arched Residence-E.png" },
      contentBoxes: [
        {
          title: "V8266P",
          content: "Bali Blue",
          boxColor: "#99adb7",
          textColor: "#000"
        },
        {
          title: "V7366P",
          content: "Ashberry",
          boxColor: "#446c7b",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#e0eacc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Iconic Villa - E",
      mainImage: { src: "/images/Iconic Villa-E.png" },
      contentBoxes: [
        {
          title: "V2353P",
          content: "Alto - N",
          boxColor: "#dfe9cb",
          textColor: "#000"
        },
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#804949",
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
      mainImage: { src: "/images/crafted-cube-D.png" },
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
      mainImage: { src: "/images/crafted-cube-E.png" },
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
      mainImage: { src: "/images/Cutting-edge-B.png" },
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
      
      mainImage: { src: "/images/Cutting-edge-C.png" },
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
    color: '#dbd19a',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Regal - E",
      mainImage: { src: "/images/Retro Regal-E.png" },
      contentBoxes: [
        {
          title: "V7840P",
          content: "Divine Wine",
          boxColor: "#dad099",
          textColor: "#000"
        },
        {
          title: "V8312P",
          content: "Gothic Grey",
          boxColor: "#7b8585",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#f9e09f',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Eternal Temple - E",
      mainImage: { src: "/images/Eternal Temple-E.png" },
      contentBoxes: [
        {
          title: "V7921P",
          content: "Summer Harvest",
          boxColor: "#f8df9e",
          textColor: "#000"
        },
        {
          content: "Khakhi",
          boxColor: "#8f6249",
          textColor: "#000"
        }
        ,
        {
          title: "V7367P",
          content: "Storm Blue",
          boxColor: "#628aa3",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#e5dbc2',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Geometry - D",
      mainImage: { src: "/images/Modern Geometry-D.png" },
      contentBoxes: [
        {
          title: "V3119P",
          content: "Cashmere - N",
          boxColor: "#e4dac1",
          textColor: "#000"
        },
        {
          title: "V7443P",
          content: "Inner Peace",
          boxColor: "#c1e4df",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f4e5bd',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Gradual Elevations - A",
      mainImage: { src: "/images/Gradual Elevations-A.png" },
      contentBoxes: [
        {
          title: "V7930P",
          content: "Hearth",
          boxColor: "#f3e4bc",
          textColor: "#000"
        },
        {
          title: "V8085P",
          content: "Scarlet",
          boxColor: "#ad353f",
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
    color: '#c7c281',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Gradual Elevations - C",
      mainImage: { src: "/images/Gradual Elevations-C.png" },
      contentBoxes: [
        {
          title: "V7832P",
          content: "Golden Apple",
          boxColor: "#c6c180",
          textColor: "#000"
        },
        {
          title: "VL152P",
          content: "Cream Pie",
          boxColor: "#f3eee4",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#f4ead6',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Modern - A",
      mainImage: { src: "/images/Retro Modern-A.png" },
      contentBoxes: [
        {
          title: "V7956P",
          content: "Honey Dew",
          boxColor: "#f3e9d5",
          textColor: "#000"
        },
        {
          title: "V7950P",
          content: "Fire Globe",
          boxColor: "#f8b244",
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
    color: '#f9e0a9',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Modern - B",
      mainImage: { src: "/images/Retro Modern-B.png" },
      contentBoxes: [
        {
          title: "V7953P",
          content: "Fairy Glitte",
          boxColor: "#f8dfa8",
          textColor: "#000"
        },
        {
          title: "V7975P",
          content: "Roasted Sesame",
          boxColor: "#f8b267",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#f9e0b8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Beach House - C",
      mainImage: { src: "/images/Beach House-C.png" },
      contentBoxes: [
        {
          title: "V7970P",
          content: "Nacho Cheese",
          boxColor: "#f8dfb7",
          textColor: "#000"
        },
        {
          title: "V7232P",
          content: "Thunder",
          boxColor: "#99a3b7",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#f9dbae',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Beach House - D",
      mainImage: { src: "/images/Beach House-D.png" },
      contentBoxes: [
        {
          title: "V7977P",
          content: "Mango Duet",
          boxColor: "#f8daad",
          textColor: "#000"
        },
        {
          title: "V8023P",
          content: "Carrot Punch",
          boxColor: "#df8f5d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#f4e5d1',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Lattice House - C",
      mainImage: { src: "/images/Lattice House-C.png" },
      contentBoxes: [
        {
          title: "V7931P",
          content: "Shredded Wheat",
          boxColor: "#f3e4d0",
          textColor: "#000"
        },
        {
          title: "V8103P",
          content: "Mauve Medley",
          boxColor: "#ad7176",
          textColor: "#000"
        },
        {
          title: "V8098P",
          content: "Pink Dollop",
          boxColor: "#f8d0d5",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#efead1',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country House - B",
      mainImage: { src: "/images/Country House-B.png" },
      contentBoxes: [
        {
          title: "V7843P",
          content: "Margarine",
          boxColor: "#eee9d0",
          textColor: "#000"
        },
        {
          title: "V9872P",
          content: "Olive Tapenade - N",
          boxColor: "#997644",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#f9eab8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country House - E",
      mainImage: { src: "/images/Country House-E.png" },
      contentBoxes: [
        {
          title: "V7946P",
          content: "Sunny Side Up",
          boxColor: "#f8e9b7",
          textColor: "#000"
        },
        {
          title: "V7158P",
          content: "Royale Robes",
          boxColor: "#8076ad",
          textColor: "#000"
        }
      ]
  },
  {
    id:'18',
    color: '#efdb9f',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Arched Residence - C",
      mainImage: { src: "/images/Arched Residence-C.png" },
      contentBoxes: [
        {
          title: "V0399P",
          content: "Pineapple - N",
          boxColor: "#eeda9e",
          textColor: "#000"
        },
        {
          title: "V7526P",
          content: "Jade Impact",
          boxColor: "#3f8f80",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#d1b89a',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Arched Residence - D",
      mainImage: { src: "/images/Arched Residence-D.png" },
      contentBoxes: [
        {
          title: "V4215P",
          content: "Swiss Coffee",
          boxColor: "#d0b799",
          textColor: "#000"
        },
        {
          title: "V8535P",
          content: "Brown Tan",
          boxColor: "#ad8a67",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#ead6a9',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Iconic Villa - A",
      mainImage: { src: "/images/Iconic Villa-A.png" },
      contentBoxes: [
        {
          title: "V7890P",
          content: "Sisal Mat",
          boxColor: "#e9d5a8",
          textColor: "#000"
        },
        {
          title: "V7877P",
          content: "Ripe Olive",
          boxColor: "#b59739",
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
    color: '#efe5d1',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Iconic Villa - C",
      mainImage: { src: "/images/Iconic Villa-C.png" },
      contentBoxes: [
        {
          title: "V0942P",
          content: "Daybreak",
          boxColor: "#eee4d0",
          textColor: "#000"
        },
        {
          title: "V9643P",
          content: "Sailor’s Stripes - N",
          boxColor: "#3f4e71",
          textColor: "#000"
        },
        {
          title: "V7959P",
          content: "Orange Crush",
          boxColor: "#f8bc67",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#f9e5b8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Iconic Villa - D",
      mainImage: { src: "/images/Iconic Villa-D.png" },
      contentBoxes: [
        {
          title: "V7954P",
          content: "Dreamsicle",
          boxColor: "#f8e4b7",
          textColor: "#000"
        },
        {
          title: "V8206P",
          content: "Cardinal",
          boxColor: "#806c76",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#f4efc2',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Twisting Maze - B",
      mainImage: { src: "/images/Twisting Maze-B.png" },
      contentBoxes: [
        {
          title: "V7866P",
          content: "Butter Scotch",
          boxColor: "#f3eec1",
          textColor: "#000"
        },
        {
          title: "V8295P",
          content: "Sleigh Bells",
          boxColor: "#808080",
          textColor: "#000"
        }
      ]
  },
  {
    id:'24',
    color: '#f4eac7',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Grooved Design - D",
      mainImage: { src: "/images/Grooved Design-D.png" },
      contentBoxes: [
        {
          title: "V7834P",
          content: "Gold Gleam",
          boxColor: "#f3e9c6",
          textColor: "#000"
        },
        {
          title: "V7767P",
          content: "Harvest Season",
          boxColor: "#c6c67b",
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
      mainImage: { src: "/images/Roman Heritage-A.png" },
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
      mainImage: { src: "/images/Roman Heritage-D.png" },
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
    title: "Cutting-edge - D",
      mainImage: { src: "/images/Cutting-edge-D.png" },
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
    color: '#efd1cc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Regal - D",
      mainImage: { src: "/images/Retro Regal-D.png" },
      contentBoxes: [
        {
          title: "VK232P",
          content: "Strawbella - N",
          boxColor: "#eed0cb",
          textColor: "#000"
        },
        {
          title: "V0336P",
          content: "Buttercup - N",
          boxColor: "#dabc94",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#814a4a',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Gradual Elevations - B",
      mainImage: { src: "/images/Gradual Elevations-B.png" },
      contentBoxes: [
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#804949",
          textColor: "#000"
        },
        {
          title: "V7860P",
          content: "Thick Cream",
          boxColor: "#eee9d5",
          textColor: "#000"
        }
      ]
  },
  {
    id:'8',
    color: '#f9e0d6',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Gradual Elevations - E",
      mainImage: { src: "/images/Gradual Elevations-E.png" },
      contentBoxes: [
        {
          title: "V8035P",
          content: "Rose Bud",
          boxColor: "#f8dfd5",
          textColor: "#000"
        },
        {
          title: "V0U42P",
          content: "Wedgewood",
          boxColor: "#71949e",
          textColor: "#000"
        }
      ]
  },
  {
    id:'9',
    color: '#f4dbc7',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Modern - C",
      mainImage: { src: "/images/Retro Modern-C.png" },
      contentBoxes: [
        {
          title: "VL140P",
          content: "Crushed Ice",
          boxColor: "#eee9da",
          textColor: "#000"
        },
        {
          title: "V8015P",
          content: "Grand Canyon",
          boxColor: "#cb8f71",
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
    color: '#eadbcc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Retro Modern - D",
      mainImage: { src: "/images/Retro Modern-D.png" },
      contentBoxes: [
        {
          title: "V8580P",
          content: "Memories",
          boxColor: "#e9dacb",
          textColor: "#000"
        },
        {
          title: "V7369P",
          content: "Harbor Fog",
          boxColor: "#94b7c6",
          textColor: "#000"
        },
        {
          title: "V8574P",
          content: "Burnished Caramel",
          boxColor: "#947158",
          textColor: "#000"
        }
      ]
  },
  {
    id:'11',
    color: '#e5dbcc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Beach House - B",
      mainImage: { src: "/images/Beach House-B.png" },
      contentBoxes: [
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e4dacb",
          textColor: "#000"
        },
        {
          title: "VK262P",
          content: "Rosewood Rouge - N",
          boxColor: "#854944",
          textColor: "#000"
        }
      ]
  },
  {
    id:'12',
    color: '#efe0e0',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Lattice House - E",
      mainImage: { src: "/images/Lattice House-E.png" },
      contentBoxes: [
        {
          title: "V9108P",
          content: "Iris Ice",
          boxColor: "#eedfdf",
          textColor: "#000"
        },
        {
          title: "V0318P",
          content: "Light Biscuit - N",
          boxColor: "#daa88a",
          textColor: "#000"
        },
        {
          title: "V7944P",
          content: "Sunspot",
          boxColor: "#f8da8a",
          textColor: "#000"
        }
      ]
  },

  {
    id:'13',
    color: '#e5dbcc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Baroque - A",
      mainImage: { src: "/images/Modern Baroque-A.png" },
      contentBoxes: [
        {
          title: "V8499P",
          content: "Meadow Lark",
          boxColor: "#e4dacb",
          textColor: "#000"
        },
        {
          title: "V7511P",
          content: "Valley Green",
          boxColor: "#2b9994",
          textColor: "#000"
        }
      ]
  },
  {
    id:'14',
    color: '#e5c7b8',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Baroque - B",
      mainImage: { src: "/images/Modern Baroque-B.png" },
      contentBoxes: [
        {
          title: "V8643P",
          content: "Almond Kiss",
          boxColor: "#e4c6b7",
          textColor: "#000"
        },
        {
          title: "V7293P",
          content: "Mystic Dream",
          boxColor: "#3a495d",
          textColor: "#000"
        }
      ]
  },
  {
    id:'15',
    color: '#f9e0c7',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Baroque - C",
      mainImage: { src: "/images/Modern Baroque-C.png" },
      contentBoxes: [
        {
          title: "V7994P",
          content: "Peach Rose",
          boxColor: "#f8dfc6",
          textColor: "#000"
        },
        {
          title: "VK004P",
          content: "Heady Wine - N",
          boxColor: "#a34449",
          textColor: "#000"
        }
      ]
  },
  {
    id:'16',
    color: '#9f9fc2',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Modern Baroque - E",
      mainImage: { src: "/images/Modern Baroque-E.png" },
      contentBoxes: [
        {
          title: "V7168P",
          content: "Orchid Bloom",
          boxColor: "#9e9ec1",
          textColor: "#000"
        },
        {
          title: "V8528P",
          content: "Bush Land",
          boxColor: "#bc9e7b",
          textColor: "#000"
        }
      ]
  },
  {
    id:'17',
    color: '#f4e0e0',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country House - A",
      mainImage: { src: "/images/Country House-A.png" },
      contentBoxes: [
        {
          title: "V8092P",
          content: "Pink Mist",
          boxColor: "#f3dfdf",
          textColor: "#000"
        },
        {
          title: "V8088P",
          content: "Rose Bouquet",
          boxColor: "#eea8b2",
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
    color: '#f9e0bd',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country House - C",
      mainImage: { src: "/images/Country House-C.png" },
      contentBoxes: [
        {
          title: "V7978P",
          content: "Orange Frost",
          boxColor: "#f8dfbc",
          textColor: "#000"
        },
        {
          title: "V0643P",
          content: "Steel Grey",
          boxColor: "#9e9e9e",
          textColor: "#000"
        }
      ]
  },
  {
    id:'19',
    color: '#e0ccbd',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Country House - D",
      mainImage: { src: "/images/Country House-D.png" },
      contentBoxes: [
        {
          title: "V0940P",
          content: "Antique White",
          boxColor: "#dfcbbc",
          textColor: "#000"
        },
        {
          title: "V9988P",
          content: "Rich Maple - N",
          boxColor: "#c66253",
          textColor: "#000"
        },
        {
          title: "V7192P",
          content: "Senate Purple",
          boxColor: "#9595ad",
          textColor: "#000"
        }
      ]
  },
  {
    id:'20',
    color: '#dbd1db',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Arched Residence - A",
      mainImage: { src: "/images/Arched Residence-A.png" },
      contentBoxes: [
        {
          title: "V9139P",
          content: "Berry Shake",
          boxColor: "#dad0da",
          textColor: "#000"
        },
        {
          title: "V7957P",
          content: "Orange Peel",
          boxColor: "#f89926",
          textColor: "#000"
        },
        {
          title: "V7161P",
          content: "Potpourri",
          boxColor: "#c6bcda",
          textColor: "#000"
        }
      ]
  },
  {
    id:'21',
    color: '#eae0cc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Twisting Maze - C",
      mainImage: { src: "/images/Twisting Maze-C.png" },
      contentBoxes: [
        {
          title: "V8532P",
          content: "Easter Lily",
          boxColor: "#e9dfcb",
          textColor: "#000"
        },
        {
          title: "V8709P",
          content: "Vine Yard",
          boxColor: "#764953",
          textColor: "#000"
        }
      ]
  },
  {
    id:'22',
    color: '#d6d1cc',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Twisting Maze - E",
      mainImage: { src: "/images/Twisting Maze-E.png" },
      contentBoxes: [
        {
          title: "V8298P",
          content: "Silver Trinket",
          boxColor: "#d5d0cb",
          textColor: "#000"
        },
        {
          title: "V8167P",
          content: "Muted Scarlet",
          boxColor: "#c194bc",
          textColor: "#000"
        },
        {
          title: "V9584P",
          content: "Fervent Fuchsia - N",
          boxColor: "#ad5385",
          textColor: "#000"
        }
      ]
  },
  {
    id:'23',
    color: '#f9d1a9',
    id_title: "V8300P",
    id_content: "Confetti",
    view:'',
    title: "Grooved Design - E",
      mainImage: { src: "/images/Grooved Design-E.png" },
      contentBoxes: [
        {
          title: "V7969P",
          content: "Coral Beach",
          boxColor: "#f8d0a8",
          textColor: "#000"
        },
        {
          title: "V7809P",
          content: "Chinese Tea",
          boxColor: "#cbc18a",
          textColor: "#000"
        }
      ]
  }

  
]