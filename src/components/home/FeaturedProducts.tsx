import { Link } from 'react-router-dom';
import { products, Product } from '../../data/products';
import { FaArrowRight } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold gradient-text">Featured Products</h2>
          <p className="mb-[35px] text-gray-600 text-[20px]">
            Discover our premium range of paints designed to transform your space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product: Product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative pt-[100%]"> {/* 1:1 Aspect ratio */}
                <div className="absolute inset-0 p-8 flex items-center justify-center bg-gray-50">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 text-sm rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <Link 
                    to={`/products/detail/${product.id}`}
                    className="px-2 py-2 rounded-lg text-[17px] font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940] flex flex-row gap-2 items-center" style={{transition: "0.5s"}}
                  >
                    View Details <FaArrowRight className="icon"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="px-8 py-3 rounded-lg text-lg font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940]" style={{transition: "0.5s"}}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 