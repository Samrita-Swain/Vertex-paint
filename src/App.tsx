import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { PacmanLoader } from "react-spinners";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/home/HomePage';
import ColorVisualizerPage from './pages/ColorVisualizer';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetail from './pages/products/ProductDetail';
import ServicesPage from './pages/services/ServicesPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import BlogPage from './pages/blog/BlogPage';
import BlogDetail from './pages/blog/BlogDetail';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfUsePage from './pages/legal/TermsOfUsePage';
import SitemapPage from './pages/legal/SitemapPage';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProductList from './pages/admin/products/ProductList';
import AdminProductForm from './pages/admin/products/ProductForm';
import AdminBlogList from './pages/admin/blogs/BlogList';
import AdminBlogForm from './pages/admin/blogs/BlogForm';
import AdminGuideList from './pages/admin/guides/GuideList';
import AdminGuideForm from './pages/admin/guides/GuideForm';
import InteriorPaintsPage from './pages/products/InteriorPaintsPage';
import ExteriorPaintsPage from './pages/products/ExteriorPaintsPage';
import TexturesPage from './pages/products/TexturesPage';
import TextureDetail from './pages/products/TextureDetail';
import ColourRoomsPage from './pages/colours/ColourRoomsPage';
import RoomColoursPage from './pages/colours/RoomColoursPage';
import ColourCombinationsPage from './pages/colours/ColourCombinationsPage';
import WaterproofingPage from './pages/services/WaterproofingPage';
import BookPainterPage from './pages/services/BookPainterPage';
import StoreLocatorPage from './pages/services/StoreLocatorPage';
import TrackOrderPage from './pages/services/TrackOrderPage';
import LoginPage from './pages/services/LoginPage';
import CartPage from './pages/services/CartPage';
import TDS from './pages/TDS';
import CalculateNow from './pages/products/CalculateNow';
import InteriorColorOptions from './pages/products/InteriorColorOptions';
import PeacefulSerene from './pages/products/PeacefulSerene';
import TrendyStylish from './pages/products/TrendyStylish';
import SoftRelaxing from './pages/products/SoftRelaxing';
import ExcitingBright from './pages/products/ExcitingBright';
import CraftedCube from './pages/products/CraftedCube';
import RomanHeritage from './pages/products/RomanHeritage';
import CuttingEdge from './pages/products/CuttingEdge';
import CountryStyle from './pages/products/CountryStyle';
import ElegantSimplicity from './pages/products/ElegantSimplicity';
import RetroRegal from './pages/products/RetroRegal';
import EternalTemple from './pages/products/EternalTemple';
import ModernGeometry from './pages/products/ModernGeometry';
import GradualElevations from './pages/products/GradualElevations';
import RetroModern from './pages/products/RetroModern';
import BeachHouse from './pages/products/BeachHouse';
import LatticeHouse from './pages/products/LatticeHouse';
import ModernBaroque from './pages/products/ModernBaroque';
import CountryHouse from './pages/products/CountryHouse';
import GroovedDesign from './pages/products/GroovedDesign';
import IconicVilla from './pages/products/IconicVilla';
import TwistingMaze from './pages/products/TwistingMaze';
import ArchedResidence from './pages/products/ArchedResidence';
import ACMECementPrimer from './pages/products/ACMECementPrimer';
import ExteriorBaseCoat from './pages/products/ExteriarBaseCoat';
import FineSquare from './pages/products/Finesquare';
import SilkShine from './pages/products/SilkShine';
import TitaniumOne from './pages/products/TitaniumOne';
import UltraWrp from './pages/products/UltraWrp';
import PremiumEmulsion from './pages/products/PremiumEmulsion';
import ACME from './pages/products/ACME';
import MattFinish from './pages/products/MattFinish';
import EasyWash from './pages/products/EasyWash';
import PrimerBrown from './pages/products/PrimerBrown';
import MetalGuard from './pages/products/MetalGuard';
import ACMEWrp from './pages/products/ACMEWrp';
import BDSeal from './pages/products/BDSeal';
import CoolRoof from './pages/products/CoolRoof';
import ApexExterioremulsions from './pages/products/ApexExterioremulsions';
import AcemExterioremulsions from './pages/products/AcemExterioremulsions';
import SafePaintingPage from './pages/services/SafePaintingPage';
import ColourConsultancyPage from './pages/services/ColourConsultancyPage';
import DealerLocatorPage from './pages/services/DealerLocatorPage';
import PaintCalculatorPage from './pages/services/PaintCalculatorPage';
import InteriorColor from './pages/products/InteriorPaintsPage';
import Exterioremulsions from './pages/products/Exterioremulsions';


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [mainContentVisible, setMainContentVisible] = useState(false);
  const [mainContentOpacity, setMainContentOpacity] = useState(0);

  useEffect(() => {
    // Start the fade out animation after 2 seconds
    const timerFade = setTimeout(() => {
      setFadeOut(true);
    }, 2000);
    
    // Make main content visible but with 0 opacity when loading starts to fade
    const timerShowContent = setTimeout(() => {
      setMainContentVisible(true);
    }, 3000);
    
    // Start increasing opacity of main content
    const timerStartOpacity = setTimeout(() => {
      setMainContentOpacity(0.2);
      
      // Gradually increase opacity
      const opacityInterval = setInterval(() => {
        setMainContentOpacity(prev => {
          const newOpacity = prev + 0.2;
          if (newOpacity >= 1) {
            clearInterval(opacityInterval);
            return 1;
          }
          return newOpacity;
        });
      }, 200); // Increase opacity every 200ms
      
      // Clean up interval
      return () => clearInterval(opacityInterval);
    }, 2000);
    
    // Remove loading screen when fade out completes
    const timerRemove = setTimeout(() => {
      setLoading(false);
    }, 2400);
    
    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerShowContent);
      clearTimeout(timerStartOpacity);
      clearTimeout(timerRemove);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes loadingBefore {
        0%   {transform:translateX(-14px);}
        50%  {transform:translateX(14px);}
        100% {transform:translateX(-14px);}
      }
      
      @keyframes loadingAfter {
        0%   {transform:translateX(-50px);}
        50%  {transform:translateX(50px);}
        100% {transform:translateX(-50px);}
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Dynamically create the gradient background
    const backgroundElement = document.querySelector('.background') as HTMLElement | null;
  
    if (backgroundElement) {
      backgroundElement.style.animation = 'movingGradient 35s linear infinite';
    }
  }, []);

  useEffect(() => {
    import("aos").then((AOS) => AOS.default.init());
  }, []);
  return (
    <Router>
      {loading ? (
         <div 
         className={`fixed w-full h-full z-50 flex justify-center items-center min-h-screen bg-white overflow-hidden transition-opacity duration-1000 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
       >
         <div className="flex flex-col items-center">
           <div className="relative z-10 w-[150px] h-[150px] mb-5">
             <img 
               src="/images/Vertex Paint logo.png"  
               alt="Loading Image" 
               className="w-full h-full object-cover mb-5" 
               data-aos="zoom-out" 
               data-aos-duration="1500"
             />
           </div>

           <div className="flex items-center justify-center">
             <div className="relative w-[300px] text-center uppercase font-black">
               <span className="relative text-2xl z-10 text-white">Vertex Paints</span>
               
               <div 
                 className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[300px] h-[36px] bg-[#1b3289]"
                 style={{
                   animation: '2s loadingBefore infinite ease-in-out'
                 }}
               ></div>
               
               <div 
                 className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[14px] h-[60px] bg-[#f0be3c] opacity-50"
                 style={{
                   animation: '2s loadingAfter infinite ease-in-out'
                 }}
               ></div>
             </div>
           </div>
         </div>
       </div>
     ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow">
          <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/visualizer" element={<ColorVisualizerPage />} />
              
              {/* Products */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:category" element={<ProductsPage />} />
              <Route path="/products/detail/:id" element={<ProductDetail />} />

              {/* Calculate Now */}
              <Route path="/CalculateNow" element={<CalculateNow />} />


              {/* Interior Color Shades */}
              <Route path="/InteriorWallPaint/Shades" element={<InteriorColorOptions />} />



              {/* Exterior Peaceful & Serene*/}
              <Route path="/Exterior/PeacefulSerene" element={<PeacefulSerene/>} />

              {/* Exterior Trendy & Stylish*/}
              <Route path="/Exterior/TrendyStylish" element={<TrendyStylish/>} />

              {/* Exterior Soft & Relaxing*/}
              <Route path="/Exterior/SoftRelaxing" element={<SoftRelaxing/>} />

               {/* Exterior Soft & Relaxing*/}
               <Route path="/Exterior/ExcitingBright" element={<ExcitingBright/>} />

              {/* Exterior Crafted Cube*/}
              <Route path="/Exterior/CraftedCube" element={<CraftedCube/>} />

              {/* Exterior Roman Heritage*/}
              <Route path="/Exterior/RomanHeritage" element={<RomanHeritage/>} />

              {/* Exterior Cutting Edge*/}
              <Route path="/Exterior/CuttingEdge" element={<CuttingEdge/>} />

              

              {/* Exterior Country Style*/}
              <Route path="/Exterior/CountryStyle" element={<CountryStyle/>} />

              {/* Exterior Elegant Simplicity*/}
              <Route path="/Exterior/ElegantSimplicity" element={<ElegantSimplicity/>} />

              {/* Exterior Retro Regal*/}
              <Route path="/Exterior/RetroRegal" element={<RetroRegal/>} />

              {/* Exterior Eternal Temple*/}
              <Route path="/Exterior/EternalTemple" element={<EternalTemple/>} />

              {/* Exterior Modern Geometry*/}
              <Route path="/Exterior/ModernGeometry" element={<ModernGeometry/>} />

              {/* Exterior Gradual Elevations*/}
              <Route path="/Exterior/GradualElevations" element={<GradualElevations/>} />

              {/* Exterior Retro Modern*/}
              <Route path="/Exterior/RetroModern" element={<RetroModern/>} />

              {/* Exterior Beach House*/}
              <Route path="/Exterior/BeachHouse" element={<BeachHouse/>} />

              {/* Exterior Lattice House*/}
              <Route path="/Exterior/LatticeHouse" element={<LatticeHouse/>} />

              {/* Exterior Modern Baroque*/}
              <Route path="/Exterior/ModernBaroque" element={<ModernBaroque/>} />

              {/* Exterior Country House*/}
              <Route path="/Exterior/CountryHouse" element={<CountryHouse/>} />

              {/* Exterior Grooved Design*/}
              <Route path="/Exterior/GroovedDesign" element={<GroovedDesign/>} />

              {/* Exterior Iconic Villa*/}
              <Route path="/Exterior/IconicVilla" element={<IconicVilla/>} />

              {/* Exterior Twisting Maze*/}
              <Route path="/Exterior/TwistingMaze" element={<TwistingMaze/>} />

              {/* Exterior Arched Residence*/}
              <Route path="/Exterior/ArchedResidence" element={<ArchedResidence/>} />



              {/* Exterior Emulsions */}
              <Route path="/Exterioremulsions" element={<Exterioremulsions />} />

              {/* Exterior Emulsions-ACME-CementPrimer */}
              <Route path="/Exterior/ACME-CementPrimer" element={<ACMECementPrimer />} />

              {/* Exterior Emulsions-ExteriorBaseCoat */}
              <Route path="/Exterior/ExteriorBaseCoat" element={<ExteriorBaseCoat />} />

              {/* Exterior Emulsions-Fine Square products */}
              <Route path="/Exterior/FineSquare" element={<FineSquare />} />

              {/* Exterior Emulsions-Silk Shine products */}
              <Route path="/Exterior/SilkShine" element={<SilkShine />} />

               {/* Exterior Emulsions-Titanium One products */}
               <Route path="/Exterior/TitaniumOne" element={<TitaniumOne />} />

               {/* Exterior Emulsions-Ultra Wrp products */}
               <Route path="/Exterior/UltraWrp" element={<UltraWrp />} />

               {/* Exterior Emulsions-Premium Emulsion products */}
               <Route path="/Exterior/PremiumEmulsion" element={<PremiumEmulsion />} />

               {/* Exterior Emulsions-ACME products */}
               <Route path="/Exterior/ACME" element={<ACME />} />

               {/* Exterior Emulsions-MattFinish products */}
               <Route path="/Exterior/MattFinish" element={<MattFinish />} />

               {/* Exterior Emulsions-EasyWash products */}
               <Route path="/Exterior/EasyWash" element={<EasyWash />} />

               {/* Exterior Emulsions-Primer Surface Brown products */}
               <Route path="/Exterior/PrimerSurfaceBrown" element={<PrimerBrown />} />

                {/* Exterior Emulsions-Metal Guard products */}
                <Route path="/Exterior/MetalGuard" element={<MetalGuard />} />

                {/* Exterior Emulsions-ACME ultra WRP products */}
                <Route path="/Exterior/ACMEUltraWRP" element={<ACMEWrp />} />

                {/* Exterior Emulsions-BD Seal products */}
                <Route path="/Exterior/BDSeal" element={<BDSeal />} />

                {/* Exterior Emulsions-Cool Roof products */}
                <Route path="/Exterior/CoolRoof" element={<CoolRoof />} />


              {/* Apex Exterior Emulsions */}
              <Route path="/ApexExterioremulsions" element={<ApexExterioremulsions />} />
              
              {/* Acem Exterior Emulsions */}
              <Route path="/AcemExterioremulsions" element={<AcemExterioremulsions />} />
              
              {/* Paint Routes */}
              <Route path="/InteriorWallPaint" element={<InteriorPaintsPage />} />
              <Route path="/products/interior/:id" element={<ProductDetail />} />
              <Route path="/ExteriorWallPaint" element={<ExteriorPaintsPage />} />
              <Route path="/products/exterior/:id" element={<ProductDetail />} />
              <Route path="/textures" element={<TexturesPage />} />
              <Route path="/textures/:id" element={<TextureDetail />} />
              
              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/safe-painting" element={<SafePaintingPage />} />
              <Route path="/services/waterproofing" element={<WaterproofingPage />} />
              <Route path="/services/book-painter" element={<BookPainterPage />} />
              <Route path="/services/colour-consultancy" element={<ColourConsultancyPage />} />
              <Route path="/services/dealer-locator" element={<DealerLocatorPage />} />
              <Route path="/services/paint-calculator" element={<PaintCalculatorPage />} />
              
              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetail />} />


              {/* TDS */}
              <Route path="/TDS" element={<TDS />} />

              
              {/* Other Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Paint Routes */}
              <Route path="/products/interior" element={<InteriorPaintsPage />} />
              <Route path="/products/interior/:id" element={<ProductDetail />} />
              <Route path="/products/exterior" element={<ExteriorPaintsPage />} />
              <Route path="/products/exterior/:id" element={<ProductDetail />} />
              <Route path="/textures" element={<TexturesPage />} />
              <Route path="/textures/:id" element={<TextureDetail />} />
              

              {/* Interior All Color */}
              <Route path="/InteriorWallPaint/Shades" element={<InteriorColor />} />


              {/* Colour Routes */}
              <Route path="/colours/rooms" element={<ColourRoomsPage />} />
              <Route path="/colours/:room" element={<RoomColoursPage />} />
              <Route path="/colours/combinations" element={<ColourCombinationsPage />} />
              
              {/* Service Routes */}
              <Route path="/services/safe-painting" element={<SafePaintingPage />} />
              <Route path="/services/waterproofing" element={<WaterproofingPage />} />
              <Route path="/services/book-painter" element={<BookPainterPage />} />
              <Route path="/services/colour-consultancy" element={<ColourConsultancyPage />} />
              
              {/* Utility Routes */}
              <Route path="/store-locator" element={<StoreLocatorPage />} />
              <Route path="/paint-budget-calculator" element={<PaintCalculatorPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProductList />} />
              <Route path="/admin/products/new" element={<AdminProductForm />} />
              <Route path="/admin/products/:id/edit" element={<AdminProductForm />} />
              <Route path="/admin/blogs" element={<AdminBlogList />} />
              <Route path="/admin/blogs/new" element={<AdminBlogForm />} />
              <Route path="/admin/blogs/:id/edit" element={<AdminBlogForm />} />
              <Route path="/admin/guides" element={<AdminGuideList />} />
              <Route path="/admin/guides/new" element={<AdminGuideForm />} />
              <Route path="/admin/guides/:id/edit" element={<AdminGuideForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;