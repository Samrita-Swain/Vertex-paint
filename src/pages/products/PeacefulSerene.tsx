import { exteriorColor1 } from '../../data/content';
import { Link } from 'react-router-dom';
const PeacefulSerene = () => {
  return (
    <div>
      <div
        className="relative UltimaExterioremulsions-banner p-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[50vh]"
        style={{ backgroundImage: "url(../images/product1.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-white text-center">
          <h1 className="text-[50px] font-bold mb-7">Peaceful & Serene</h1>
        </div>

      </div>
      <div className="second-banner p-12 flex justify-center items-center">
        <div className="container">
          <div className="content flex justify-center items-center flex-col">
            {/* <h1 className="gradient-text text-[40px] font-bold text-center">Benefits</h1> */}
            <p className="mb-[35px] text-center text-[20px]">Tap on any of the shades you like from below and see
            the magic unfold!</p>
          </div>
        <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
        {exteriorColor1.map(color1 => (
  <article 
    key={color1.id}
    className="bg-white rounded-lg overflow-hidden shadow-md group"
  >
    <a 
      href={color1.view} 
      className="box block p-8 h-[200px]" 
      style={{ backgroundColor: color1.color }}
    >
      
    </a>
    
    <div className="flex items-center justify-end p-4">
      <Link 
        to={color1.view}
        className="px-2 py-2 rounded-lg text-[17px] font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940] flex flex-row gap-2 items-center" 
        style={{transition: "0.5s"}}
      >
        View
      </Link>
    </div>
  </article>
))}

        </div>
        </div>
      </div>
    </div>
  );
};

export default PeacefulSerene;
