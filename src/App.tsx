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
import FineSquareInteriorEmulsion from './pages/products/FineSquareInteriorEmulsion';
import FineSquareExteriorEmulsion from './pages/products/FineSquareExteriorEmulsion';
import PremiumEmlusion from './pages/products/PremiumEmlusion';
import FineSquare from './pages/products/Finesquare';
import SilkShine from './pages/products/SilkShine';
import TitaniumOne from './pages/products/TitaniumOne';
import UltraWrp from './pages/products/UltraWrp';
import SelectMattFinish from './pages/products/SelectMattFinish';
import SelectSheen from './pages/products/SelectSheen';
import ACMEExteriorEmulsion from './pages/products/ACMEExteriorEmulsion';
import PrimerBrown from './pages/products/PrimerBrown';
import FS_HISHEEN from './pages/products/FS_HISHEEN';
import ACMEWrp from './pages/products/ACMEWrp';
import SilkShine_SuperGloss from './pages/products/SilkShine_SuperGloss';
import BDSeal from './pages/products/BDSeal';
import UltraWRPExteriorEmulsion from './pages/products/UltraWRPExteriorEmulsion';
import ApexExterioremulsions from './pages/products/ApexExterioremulsions';
import AcemExterioremulsions from './pages/products/AcemExterioremulsions';
import SafePaintingPage from './pages/services/SafePaintingPage';
import ColourConsultancyPage from './pages/services/ColourConsultancyPage';
import DealerLocatorPage from './pages/services/DealerLocatorPage';
import PaintCalculatorPage from './pages/services/PaintCalculatorPage';
import InteriorColor from './pages/products/InteriorPaintsPage';
import Exterioremulsions from './pages/products/Exterioremulsions';
import UnderCoat from './pages/products/UnderCoat';
import UltraWallSealer from "./pages/products/UltraWallSealer";
import OtherSurface from './pages/products/OtherSurface';
import WoodPaints from './pages/products/WoodPaints';
import MetalPaints from './pages/products/MetalPaints';
import WaterProofingAndConstructionChemicals from './pages/products/WaterProfingAndConstructionChemicals';
import SS_PearlGloss from './pages/products/SS_PearlGloss';
import CeilingWhite from './pages/products/CeilingWhite';
import EasyWashLuxuryEmulsion from './pages/products/EasyWashLuxuryEmulsion';
import SilkShineSpecialEffectpaints from './pages/products/SilkShineSpecialEffectpaints';
import AcmeWaterThinnablePrimer from './pages/products/AcmeWaterThinnablePrimer';
import VertexWaterThinnablePrimer from './pages/products/VertexWaterThinnablePrimer';
import BaseCoat from './pages/products/BaseCoat';
import FineSquareInteriorPrimer from './pages/products/FineSquareInteriorPrimer';
import MGRedOxide from './pages/products/MGRedOxide';
import ZinchromatePrimer from './pages/products/ZinchromatePrimer';
import ZinPhosphatePrimerWhite from './pages/products/ZinPhosphatePrimerWhite';
import PrimerSurfaceBrown from './pages/products/PrimerSurfaceBrown';
import PrimerSurfaceWhite from './pages/products/PrimerSurfaceWhite';
import DampProofWallPutty from './pages/products/DampProofWallPutty';
import PremiumWallPutty from './pages/products/PremiumWallPutty';
import TitaniumWallPutty from './pages/products/TitaniumWallPutty';
import Aluminum from './pages/products/Aluminum';
import PUAluminumPaint from './pages/products/PUAluminumPaint';
import PUMetallicGoldenPaint from './pages/products/PUMetallicGoldenPaint';
import SilverAshEmerlandGreen from './pages/products/SilverAshEmerlandGreen';
import MetalClearGloss from './pages/products/MetalClearGloss';
import MetalClearMatt from './pages/products/MetalClearMatt';
import PremiumGlossEnamel from './pages/products/PremiumGlossEnamel';
import PUHighPerformanceEnamel from './pages/products/PUHighPerformanceEnamel';
import PremiumGlossEnamelWoodPaints from './pages/products/PremiumGlossEnamelWoodPaints';
import PUHighPerformanceEnamelWoodPaints from './pages/products/PUHighPerformanceEnamelWoodPaints';
import WoodGuard from './pages/products/WoodGuard';
import TrueWoodPUClear from './pages/products/TrueWoodPUClear';
import ClearVarnish from './pages/products/ClearVarnish';
import BDSealOtherSurface from './pages/products/BDSealOtherSurface';


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

              {/* Interior Emulsions-Fine Square Interior Emulsion */}
              <Route path="/InteriorWallPaint/FineSquareInterriorEmulsion" element={<FineSquareInteriorEmulsion />} />
              {/* Interior Emulsions-SilkShine_PearlGloss */}
              <Route path="/InteriorWallPaint/SilkShine_PearlGloss" element={<SS_PearlGloss />} />
              {/* Interior Emulsions-Ceiling White */}
              <Route path="/InteriorWallPaint/CeilingWhite" element={<CeilingWhite />} />
              {/* Interior Emulsions-Easy Wash Luxury Emulsion */}
              <Route path="/InteriorWallPaint/EasyWashLuxuryEmulsion" element={<EasyWashLuxuryEmulsion />} />
              {/* Interior Emulsions-Easy Wash Luxury Emulsion */}
              <Route path="/InteriorWallPaint/SilkShineSpecialEffectpaints" element={<SilkShineSpecialEffectpaints />} />

              
              {/* Under Coat-Acme Water Thinnable Primer */}
              <Route path="/UnderCoat/AcmeWaterThinnablePrimer" element={<AcmeWaterThinnablePrimer />} />
              {/* Under Coat-Vertex Water Thinnable Primer */}
              <Route path="/UnderCoat/VertexWaterThinnablePrimer" element={<VertexWaterThinnablePrimer />} />
              {/* Under Coat-Base Coat */}
              <Route path="/UnderCoat/BaseCoat" element={<BaseCoat />} />
              {/* Under Coat-ultra Wall Sealer 3IN1 */}
              <Route path="/UnderCoat/ultraWallSealer3IN1" element={<UltraWallSealer />} />
              {/* Under Coat-ultra Wall Sealer 3IN1 */}
              <Route path="/UnderCoat/FineSquareInteriorPrimer" element={<FineSquareInteriorPrimer />} />
              {/* Under Coat-MG Red Oxide */}
              <Route path="/UnderCoat/MG_RedOxide" element={<MGRedOxide />} />
               {/* Under Coat-Zin chromate Primer */}
              <Route path="/UnderCoat/ZinchromatePrimer" element={<ZinchromatePrimer />} />
              {/* Under Coat-Zin Phosphate Primer White */}
              <Route path="/UnderCoat/ZinPhosphatePrimerWhite" element={<ZinPhosphatePrimerWhite />} />
              {/* Under Coat-Primer Surface Brown */}
              <Route path="/UnderCoat/1k_PU_PrimerSurfaceBrown" element={<PrimerSurfaceBrown />} />
              {/* Under Coat-Primer Surface white */}
              <Route path="/UnderCoat/1k_PU_PrimerSurfaceWhite" element={<PrimerSurfaceWhite />} />
              {/* Under Coat-Damp Proof Wall Putty */}
              <Route path="/UnderCoat/DampProofWallPutty" element={<DampProofWallPutty />} />
              {/* Under Coat-Premium Wall Putty */}
              <Route path="/UnderCoat/PremiumWallPutty" element={<PremiumWallPutty />} />
              {/* Under Coat-Titanium Wall Putty */}
              <Route path="/UnderCoat/TitaniumWallPutty" element={<TitaniumWallPutty />} />

              {/* Metal Paints-Aluminum */}
              <Route path="/MetalPaints/Aluminum" element={<Aluminum />} />
              {/* Metal Paints-PU Aluminum Paint */}
              <Route path="/MetalPaints/PU_AluminumPaint" element={<PUAluminumPaint />} />
              {/* Metal Paints-PU Metallic Golden Paint */}
              <Route path="/MetalPaints/PU_MetallicGoldenPaint" element={<PUMetallicGoldenPaint />} />
              {/* Metal Paints-Silver Ash, Emerland Green */}
              <Route path="/MetalPaints/Silver_Ash_Emerland_Green" element={<SilverAshEmerlandGreen />} />
              {/* Metal Paints-Metal Clear Gloss */}
              <Route path="/MetalPaints/MetalClearGloss" element={<MetalClearGloss />} />
              {/* Metal Paints-Metal Clear Matt */}
              <Route path="/MetalPaints/MetalClearMatt" element={<MetalClearMatt />} />
              {/* Metal Paints-Premium Gloss Enamel */}
              <Route path="/MetalPaints/PremiumGlossEnamel" element={<PremiumGlossEnamel />} />
              {/* Metal Paints-1K PU High Performance Enamel */}
              <Route path="/MetalPaints/1K_PU_HighPerformanceEnamel" element={<PUHighPerformanceEnamel />} />



              {/* Wood Paints-Premium Gloss Enamel */}
              <Route path="/WoodPaints/PremiumGlossEnamel" element={<PremiumGlossEnamelWoodPaints />} />
              {/* Wood Paints-1K PU High Performance Enamel  */}
              <Route path="/WoodPaints/1K_PU_HighPerformanceEnamel" element={<PUHighPerformanceEnamelWoodPaints />} />
              {/* Wood Paints-Wood Guard */}
              <Route path="/WoodPaints/WoodGuard" element={<WoodGuard />} />
              {/* Wood Paints-TRUE WOOD - 1k PU Clear */}
              <Route path="/WoodPaints/TrueWood_1k_PU_Clear" element={<TrueWoodPUClear />} />
              {/* Wood Paints-Clear Varnish */}
              <Route path="/WoodPaints/ClearVarnish" element={<ClearVarnish />} />



              {/* Other Surface-BD Seal */}
              <Route path="/OtherSurface/BDSeal" element={<BDSealOtherSurface />} />





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

              {/* Exterior Emulsions-Fine Square Exterior Emulsion */}
              <Route path="/ExteriorWallPaint/FineSquareExteriorEmulsion" element={<FineSquareExteriorEmulsion />} />

              {/* Exterior Emulsions-Premium Emlusion */}
              <Route path="/ExteriorWallPaint/PremiumEmlusion" element={<PremiumEmlusion />} />

              {/* Exterior Emulsions-Fine Square products */}
              <Route path="/Exterior/FineSquare" element={<FineSquare />} />

              {/* Exterior Emulsions-Silk Shine products */}
              <Route path="/Exterior/SilkShine" element={<SilkShine />} />


               {/* Exterior Emulsions-Ultra Wrp products */}
               <Route path="/Exterior/UltraWrp" element={<UltraWrp />} />


               {/* Exterior Emulsions-Select Matt Finish */}
               <Route path="/ExteriorWallPaint/SelectMattFinish" element={<SelectMattFinish />} />

               {/* Exterior Emulsions-Select Sheen products */}
               <Route path="/ExteriorWallPaint/SelectSheen" element={<SelectSheen />} />

               {/* Exterior Emulsions-ACME Exterior Emulsion products */}
               <Route path="/ExteriorWallPaint/ACMEExteriorEmulsion" element={<ACMEExteriorEmulsion />} />

               {/* Exterior Emulsions-Primer Surface Brown products */}
               <Route path="/ExteriorWallPaint/PrimerSurfaceBrown" element={<PrimerBrown />} />

                {/* Exterior Emulsions-Fine Square-Hi Sheen products */}
                <Route path="/ExteriorWallPaint/FineSquareHiSheen" element={<FS_HISHEEN />} />

                {/* Exterior Emulsions-ACME ultra WRP products */}
                <Route path="/ExteriorWallPaint/ACMEWRP" element={<ACMEWrp />} />

                {/* Exterior Emulsions-ACME ultra WRP products */}
                <Route path="/ExteriorWallPaint/SilkShine_SuperGloss" element={<SilkShine_SuperGloss />} />

                 {/* Exterior Emulsions-Titanium One products */}
               <Route path="/ExteriorWallPaint/TitaniumOne" element={<TitaniumOne />} />
                {/* Exterior Emulsions-BD Seal products */}
                <Route path="/Exterior/BDSeal" element={<BDSeal />} />

                {/* Exterior Emulsions-Ultra WRP Exterior Emulsion products */}
                <Route path="/ExteriorWallPaint/UltraWRPExteriorEmulsion" element={<UltraWRPExteriorEmulsion />} />


              {/* Apex Exterior Emulsions */}
              <Route path="/ApexExterioremulsions" element={<ApexExterioremulsions />} />
              
              {/* Acem Exterior Emulsions */}
              <Route path="/AcemExterioremulsions" element={<AcemExterioremulsions />} />
              
              {/* Paint Routes */}
              <Route path="/InteriorWallPaint" element={<InteriorPaintsPage />} />
              <Route path="/products/interior/:id" element={<ProductDetail />} />
              <Route path="/ExteriorWallPaint" element={<ExteriorPaintsPage />} />
              <Route path="/products/exterior/:id" element={<ProductDetail />} />
              <Route path="/UnderCoat" element={<UnderCoat />} />
              <Route path="/MetalPaints" element={<MetalPaints />} />
              <Route path="/WoodPaints" element={<WoodPaints />} />
              <Route path="/WaterProofingAndConstructionChemicals" element={<WaterProofingAndConstructionChemicals />} />
              <Route path="/OtherSurface" element={<OtherSurface />} />
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