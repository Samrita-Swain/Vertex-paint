import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define TypeScript interfaces
interface MenuItem {
  name: string;
  link: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuData {
  title: string;
  sections: MenuSection[];
}

interface MenuDataType {
  [key: string]: MenuData;
}

const MENU_DATA: MenuDataType = {
  PAINTS: {
    title: 'Paints & Textures',
    sections: [
      {
        title: 'Paint Products',
        items: [
          { name: 'Interior Paints', link: '/InteriorWallPaint' },
          { name: 'Exterior Paints', link: '/ExteriorWallPaint' },
          { name: 'Wall Paints Product Finder', link: '/products/exterior/WallPaintsProductFinder' },
          { name: 'Waterproofing', link: '/products/interior/Waterproofing' },
          { name: 'Wood Paints', link: '/products/interior/Waterproofing' },
          { name: 'Wood Paint Product Finder', link: '/products/interior/Waterproofing' },
          { name: 'Metal Paints', link: '/products/interior/Waterproofing' },
          { name: 'Brushes & Ancillaries', link: '/products/interior/Waterproofing' },
          { name: 'Adhesives', link: '/products/interior/Waterproofing' },
          { name: 'Undercoats', link: '/products/interior/Waterproofing' }
        ]
      },
      {
        title: 'Explore Colours',
        items: [
          { name: 'Colour Catalogue', link: '/products/exterior/ultima-protek' },
          { name: 'Interior Textures', link: '/products/exterior/apex-weatherproof' },
          { name: 'Exterior Textures', link: '/products/exterior/ace-exterior' },
          { name: 'Wallpapers', link: '/products/exterior/ace-exterior' },
          { name: 'Home Colour Guide', link: '/products/exterior/ace-exterior' },
          { name: 'View All', link: '/products/exterior' }
        ]
      },
      {
        title: 'Technical Data Sheets',
        items: [
          { name: 'View All', link: '/TDS' }
        ]
      }
    ]
  },
  COLOURS: {
    title: 'Colours',
    sections: [
      {
        title: 'By Room',
        items: [
          { name: 'Living Room', link: '/colours/living-room' },
          { name: 'Bedroom', link: '/colours/bedroom' },
          { name: 'Kitchen', link: '/colours/kitchen' },
          { name: 'View All Rooms', link: '/colours/rooms' }
        ]
      },
      {
        title: 'Colour Combinations',
        items: [
          { name: 'Interior Combinations', link: '/colours/interior-combinations' },
          { name: 'Exterior Combinations', link: '/colours/exterior-combinations' },
          { name: 'View All', link: '/colours/combinations' }
        ]
      }
    ]
  },
  SERVICES: {
    title: 'Services',
    sections: [
      {
        title: 'Painting Services',
        items: [
          { name: 'Safe Painting Service', link: '/services/safe-painting' },
          { name: 'Waterproofing Solutions', link: '/services/waterproofing' },
          { name: 'Book a Painter', link: '/services/book-painter' }
        ]
      },
      {
        title: 'Consultancy',
        items: [
          { name: 'Colour Consultancy', link: '/services/colour-consultancy' },
          { name: 'Home Painting', link: '/services/home-painting' },
          { name: 'Find a Contractor', link: '/services/find-contractor' }
        ]
      }
    ]
  },
  COMPANY: {
    title: 'Company',
    sections: [
      {
        title: 'About Us',
        items: [
          { name: 'Our Story', link: '/about' },
          { name: 'Blog', link: '/blog' },
          { name: 'Contact Us', link: '/contact' }
        ]
      }
    ]
  }
};

const Navbar = () => {
  // Fixed state types
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  // Calculate header height for proper positioning of mobile menu
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementById('main-header');
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Toggle mobile submenu with properly typed parameter
  const toggleMobileSubmenu = (key: string) => {
    if (activeMobileMenu === key) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu(key);
    }
  };

  return (
    <header id="main-header" className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="gradient-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="text-[15px] font-normal text-white">Welcome to Vertex Paints</div>
            <div className="flex items-center space-x-4 text-sm">
              {/* <Link to="/track-order" className="text-gray-600 hover:text-primary-600">Track Order</Link>
              <Link to="/login" className="text-gray-600 hover:text-primary-600">Login</Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Updated with animations */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://vertexpaint.in/img/logo.png"
                alt="Vertex Paints"
                className="h-16"
              />
            </Link>

            {/* Mobile Menu Button - Improved smooth transition to X */}
            <button 
              className="lg:hidden p-2 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                {/* Top bar */}
                <span 
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                ></span>

                {/* Middle bar */}
                <span 
                  className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>

                {/* Bottom bar */}
                <span 
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>

            {/* Desktop Menu - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              {Object.entries(MENU_DATA).map(([key, data]) => (
                <div 
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="text-[17px] py-8 font-medium text-gray-700 hover:text-[#e51126] transition-colors duration-200">
                    {data.title}
                    <div className="absolute bottom-6 left-0 w-full h-0.5 gradient-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  </button>
                  
                  {activeMenu === key && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg border-t min-w-[720px] animate-fadeIn"
                      style={{
                        maxWidth: 'calc(100vw - 2rem)',
                        animation: 'fadeIn 0.2s ease-out'
                      }}
                    >
                      <div className="p-8">
                        <div className="grid grid-cols-3 gap-8">
                          {data.sections.map((section, idx) => (
                            <div key={idx} className="min-w-[400px]">
                              <h3 className="font-semibold text-gray-900 mb-4 text-sm tracking-wider">
                                {section.title}
                              </h3>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link 
                                      to={item.link}
                                      className="text-gray-600 hover:text-[#e51126] transition-colors duration-200 block py-1 text-[15px]"
                                      onClick={() => setActiveMenu(null)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Calculator */}
            <a href='/CalculateNow' className="calculate-button flex items-center">
                        Calculate Now
                      </a>
          </div>
        </div>
      </div>
      
      
      
      {/* Mobile Dropdown Menu - Positioned below header */}
      {!isMobileMenuOpen && activeMobileMenu && (
        <div 
          className="lg:hidden fixed left-0 right-0 bg-white shadow-lg z-40 max-h-[70vh] overflow-y-auto animate-fadeDown"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="p-4">
            {MENU_DATA[activeMobileMenu].sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-sm tracking-wider border-b pb-1">
                  {section.title}
                </h3>
                <ul className="space-y-1 ml-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link 
                        to={item.link}
                        className="text-gray-600 hover:text-[#e51126] block py-1 text-sm"
                        onClick={() => setActiveMobileMenu(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="sticky bottom-0 p-2 border-t text-right bg-white">
            <button 
              className="text-sm text-gray-500 hover:text-[#e51126] py-1 px-3"
              onClick={() => setActiveMobileMenu(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full Mobile Menu Panel - Toggled by hamburger/X button */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
          style={{ top: `${headerHeight}px` }}
        >
          {/* Menu content */}
          <div className="container mx-auto px-4 py-4">
            {Object.entries(MENU_DATA).map(([key, data]) => (
              <div key={key} className="mb-8">
                <h2 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">{data.title}</h2>
                {data.sections.map((section, idx) => (
                  <div key={idx} className="mb-6 ml-4">
                    <h3 className="text-md font-bold text-gray-800 mb-3">{section.title}</h3>
                    <ul className="space-y-2 ml-4">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            to={item.link}
                            className="text-gray-600 hover:text-[#e51126] block py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveMobileMenu(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Add these styles to your global CSS or tailwind.config.js
const styles = {
  '.animate-fadeIn': {
    '@keyframes fadeIn': {
      '0%': {
        opacity: '0',
        transform: 'translateY(-10px) translateX(-50%)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0) translateX(-50%)'
      }
    }
  },
  '.animate-fadeDown': {
    '@keyframes fadeDown': {
      '0%': {
        opacity: '0',
        transform: 'translateY(-10px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)'
      }
    },
    'animation': 'fadeDown 0.2s ease-out'
  },
  '.scrollbar-hide': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      'display': 'none'
    }
  }
};

export default Navbar;