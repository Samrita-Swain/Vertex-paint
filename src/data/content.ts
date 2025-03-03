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
    color: '#f5f0e1',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'2',
    color: '#e1dcd7',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'3',
    color: '#ebe6d7',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'4',
    color: '#f0f0e6',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'5',
    color: '#f0ebdc',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'6',
    color: '#f0ebe1',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'7',
    color: '#f5f0dc',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'8',
    color: '#f0ebe1',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'9',
    color: '#f0ebdc',
    view:'/Exterior/CraftedCube.tsx'
  },
  {
    id:'10',
    color: '#f0f0e1',
    view:'/Exterior/CraftedCube.tsx'
  },

  
]