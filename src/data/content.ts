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
    id: 'PeacefulSerene',
    title: 'Trendy & Stylish',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/trendy&stylish.png',
  },
  {
    id: 'soft-&-relaxing',
    title: 'Soft & Relaxing',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/soft&relaxing.png',
  },
  {
    id: 'exciting-&-bright',
    title: 'Exciting & Bright',
    category: 'Trends',
    excerpt: 'Discover the hottest color trends for the upcoming year',
    image: '/images/exciting&brignt.png',
  }
];


export const exteriorColor1 =[
  {
    id:'1',
    color: '#f4efe0',
    view:'',
    title: "Crafted Cube - A",
      description:
        "A subtle grey texture combined with earthy red accents creates a charming contrast against the white base, giving this house a look that is both graceful and inviting.",
      mainImage: { src: "/images/crafted-cube-A.png" },
      contentBoxes: [
        {
          title: "V8004P",
          content: "Mellow Orange",
          boxColor: "#f5eee1",
          textColor: "#000"
        },
        {
          title: "V9983P",
          content: "Brick Dust - N",
          boxColor: "#b45a55",
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
    color: '#e1dcd7',
    view:'',
    title: "Crafted Cube - B",
      mainImage: { src: "/images/crafted-cube-B.png" },
      contentBoxes: [
        {
          title: "V8300P",
          content: "Confetti",
          boxColor: "#dfdad5",
          textColor: "#000"
        },
        {
          title: "V8639P",
          content: "Brick Tone",
          boxColor: "#9c6b61",
          textColor: "#000"
        }
      ]
  },
  {
    id:'3',
    color: '#e9e4d5',
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
    color: '#efefe5',
    view:'',
    title: "Country-style - A",
      
      mainImage: { src: "/images/Country-style-A.png" },
      contentBoxes: [
        {
          title: "VL155P",
          content: "Pale Sisal",
          boxColor: "#eeeee4",
          textColor: "#000"
        },
        {
          title: "V0509P",
          content: "Geranium",
          boxColor: "#ad493f",
          textColor: "#000"
        },
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e4dacb",
          textColor: "#000"
        }
      ]
  },
  {
    id:'5',
    color: '#efeadb',
    view:'',
    title: "Country-style - B",
      mainImage: { src: "/images/Country-style-B.png" },
      contentBoxes: [
        {
          title: "V7836P",
          content: "Vanilla Ice",
          boxColor: "#eee9da",
          textColor: "#000"
        },
        {
          title: "V9867P",
          content: "Mosambi Yellow - N",
          boxColor: "#eecb6c",
          textColor: "#000"
        }
      ]
  },
  {
    id:'6',
    color: '#efeae0',
    view:'',
    title: "Elegant Simplicity - A",
      mainImage: { src: "/images/Elegant Simplicity-A.png" },
      contentBoxes: [
        {
          title: "V0765P",
          content: "Morning Glory",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V8066P",
          content: "Tinge of Pink",
          boxColor: "#f8d5d0",
          textColor: "#000"
        },
        {
          title: "V8615P",
          content: "Copper Coast",
          boxColor: "#ad7162",
          textColor: "#000"
        }
      ]
  },
  {
    id:'7',
    color: '#f4efdb',
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