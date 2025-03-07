import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import ColorVisualizerPage from './pages/ColorVisualizer';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetail from './pages/products/ProductDetail';
import ServicesPage from './pages/services/ServicesPage';
import SafePaintingPage from './pages/services/SafePaintingPage';
import ColourConsultancyPage from './pages/services/ColourConsultancyPage';
import DealerLocatorPage from './pages/services/DealerLocatorPage';
import PaintCalculatorPage from './pages/services/PaintCalculatorPage';
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
import UltimaExterioremulsions from './pages/products/UltimaExterioremulsions';
import ApexExterioremulsions from './pages/products/ApexExterioremulsions';
import AcemExterioremulsions from './pages/products/AcemExterioremulsions';
import Product1 from './pages/products/Product1';
import ScrollToTop from './components/ScrollToTop';
import CraftedCube from './pages/products/CraftedCube';
import PeacefulSerene from './pages/products/PeacefulSerene';
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
import TrendyStylish from './pages/products/TrendyStylish';
import SoftRelaxing from './pages/products/SoftRelaxing';
import ExcitingBright from './pages/products/ExcitingBright';

function App() {
  useEffect(() => {
    import("aos").then((AOS) => AOS.default.init());
  }, []);
  return (
    <div className="font-times">
      <Router>
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



              {/* ultima Exterior Emulsions */}
              <Route path="/UltimaExterioremulsions" element={<UltimaExterioremulsions />} />

              {/* ultima Exterior Emulsions products */}
              <Route path="/Product1" element={<Product1 />} />

              {/* Apex Exterior Emulsions */}
              <Route path="/ApexExterioremulsions" element={<ApexExterioremulsions />} />
              
              {/* Acem Exterior Emulsions */}
              <Route path="/AcemExterioremulsions" element={<AcemExterioremulsions />} />
              
              {/* Paint Routes */}
              <Route path="/products/interior" element={<InteriorPaintsPage />} />
              <Route path="/products/interior/:id" element={<ProductDetail />} />
              <Route path="/products/exterior" element={<ExteriorPaintsPage />} />
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
      </Router>
    </div>
  );
}

export default App; 