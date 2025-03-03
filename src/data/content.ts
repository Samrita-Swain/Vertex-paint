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
    explore: '/Exterior/PeacefulSerene.tsx'
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

  
]