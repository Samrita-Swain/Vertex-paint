import { Link } from 'react-router-dom';
import { exteriorColor } from '../../data/content';
import { FaArrowRight } from "react-icons/fa";
const ExteriorColor = () => {
  return (
    <div className="flex flex-col justify-center items-center p-12 bg-[#fff5eb]">
      <div className="container flex flex-col justify-center items-center">
      <h1 className="gradient-text text-[40px] font-bold text-center">
          Colours
        </h1>
        <p className="mb-[35px] text-gray-600 text-[20px]">Choose a colour theme that sets the perfect mood for your
dream home!</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8">
                  {exteriorColor.map(color => (
                    <article 
                      key={color.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md group"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={color.image}
                          alt={color.title}
                          className="w-full h-1/2 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                            {color.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {color.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{color.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <Link 
                            to={`${color.explore}`}
                            className="px-2 py-2 rounded-lg text-[17px] font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940] flex flex-row gap-2 items-center" style={{transition: "0.5s"}}
                          >
                            Explore <FaArrowRight className="icon"/>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
      </div>
    </div>
  )
}

export default ExteriorColor
