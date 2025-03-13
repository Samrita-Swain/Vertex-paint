import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      {/* Main Hero Slider */}
      <div className="relative h-[600px]">
        <img
          src="/images/home-banner.jpg"
          alt="Beautiful Homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex justify-center items-center">
            <div className="max-w-xl text-white flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Transform Your Home</h1>
              <p className="text-xl mb-8 text-center">
                Discover endless possibilities with Asian Paints' range of
                interior and exterior paints
              </p>
              <Link
                to="/visualizer"
                className="px-8 py-3 rounded-lg text-lg font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-white hover:text-white transition duration-500 text-center"
              >
                Try Color Visualizer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-8">
            <QuickLink
              icon="/images/painter-clipart-xl.png"
              title="Paint Finder"
              description="Find the perfect paint for your space"
            />
            <QuickLink
              icon="/images/Contractor.png"
              title="Find a Contractor"
              description="Connect with painting professionals"
            />
            <QuickLink
              icon="/images/Colour-Catalogue.png"
              title="Colour Catalogue"
              description="Explore our colour collections"
            />
            <QuickLink
              icon="/images/Store-Locator.webp"
              title="Store Locator"
              description="Find a store near you"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition duration-500 hover:shadow-lg">
    <img src={icon} alt={title} className="w-24 h-24" />
    <div>
      <h3 className="text-[17px] font-medium text-gray-900">{title}</h3>
      <p className="text-[15px] text-gray-600">{description}</p>
    </div>
  </div>
);

export default Hero;
