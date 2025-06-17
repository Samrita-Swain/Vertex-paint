import PaintingCalculatorForm from "../Form/CalculatorForm";
import React from 'react'

const OurStory = () => {


    return (
        <div>
            <div
                className="relative UltimaExterioremulsions-banner p-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[50vh]"
                style={{ backgroundImage: "url(../images/our-story.jpg)" }}
            >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative text-white text-center">
                    <h1 className="text-5xl font-medium mb-7">Our Story</h1>
                </div>


            </div>
            <div>
                <div className="flex flex-col justify-center items-center p-12 ourstory">
                    <div className="container flex flex-col justify-center items-start">
                        <h1 className="gradient-text text-4xl font-semibold mb-4 item-left">
                            Our Story
                        </h1>
                        <p className="text-gray-600 text-md font-normal">
                            Vertex Paints and Coatings Industry, founded in 2007 and headquartered in Khanna (Ludhiana), is a proudly
                            Indian company driven by a simple belief: everyone deserves quality color. Built on a legacy of excellence by
                            Shri Om Parkash and Vikas Kumar, our journey began with the dream of bringing the beauty of colors into
                            every space - affordably, innovatively, and sustainably.</p><br />
                        <p className="mb-[35px] text-gray-600 text-md font-normal">At Vertex, we specialize in both Architectural and Industrial coatings for walls, wood, and metal applications.
                            Our products cater to a diverse customer base, including agricultural equipment manufacturers, furniture
                            makers, and the building & construction industry. Whether it's a modern home or an industrial facility, we offer
                            solutions that combine performance with visual impact</p>
                    </div>
                </div>
            </div>

            <PaintingCalculatorForm />


        </div>
    );
};

export default OurStory;
