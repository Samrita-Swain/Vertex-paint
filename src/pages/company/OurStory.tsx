import PaintingCalculatorForm from "../Form/CalculatorForm";
import React from 'react'

const OurStory = () => {


    return (
        <div>
            <div
                className="relative UltimaExterioremulsions-banner p-4 sm:p-6 md:p-8 lg:p-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]"
                style={{ backgroundImage: "url(../images/our-story.jpg)" }}
            >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative text-white text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 md:mb-7">Our Story</h1>
                </div>


            </div>
            <div>
                <div className="ourpurpose bg-gradient-to-br from-gray-50 to-white p-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h1 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 item-left">
                            Company Overview
                        </h1>
                        <div className="w-16 sm:w-20 md:w-24 h-1 gradient-bg mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg font-normal px-4 sm:px-6 md:px-0">
                            Vertex Paints and Coatings Industry, founded in 2007 and headquartered in Khanna (Ludhiana), is a proudly
                            Indian company driven by a simple belief: everyone deserves quality color. Built on a legacy of excellence by
                            Shri Om Parkash and Vikas Kumar, our journey began with the dream of bringing the beauty of colors into
                            every space - affordably, innovatively, and sustainably.</p><br />
                        <p className="mb-[35px] text-gray-600 text-sm sm:text-base md:text-lg font-normal px-4 sm:px-6 md:px-0">At Vertex, we specialize in both Architectural and Industrial coatings for walls, wood, and metal applications.
                            Our products cater to a diverse customer base, including agricultural equipment manufacturers, furniture
                            makers, and the building & construction industry. Whether it's a modern home or an industrial facility, we offer
                            solutions that combine performance with visual impact</p>
                    </div>
                        {/* Section Header */}
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                           <h1 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 item-left">
                            Our Purpose
                        </h1>
                            <div className="w-16 sm:w-20 md:w-24 h-1 gradient-bg mx-auto rounded-full"></div>
                        </div>

                        {/* Mission and Vision Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
                            {/* Mission Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shadow-lg">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">Mission</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium text-center sm:text-left">
                                            To provide <span className="gradient-text font-semibold">high-quality coatings</span> at reasonable prices across <span className="gradient-text font-semibold">PAN India</span>, ensuring affordability without compromising standards.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shadow-lg">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center sm:text-left">Vision</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium text-center sm:text-left">
                                            To paint <span className="gradient-text font-semibold">every home in every city</span> across the world with our <span className="gradient-text font-semibold">innovation-driven products</span> - one wall at a time.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What Makes Us Different Section */}
                        <div className="mt-12 sm:mt-16 md:mt-20">
                            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                                <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Makes Us Different</h2>
                                <div className="w-20 sm:w-24 md:w-32 h-1 gradient-bg mx-auto rounded-full"></div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                                {/* Feature 1 */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full">
                                        <div className="text-center">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">High-Tech Tinting</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                                                Advanced tinting systems with over <span className="gradient-text font-semibold">5000+ color options</span> and growing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full">
                                        <div className="text-center">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Annual Innovations</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                                                Launching <span className="gradient-text font-semibold">2 or more new products</span> every year with cutting-edge technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full">
                                        <div className="text-center">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Budget Calculator</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                                                Unique <span className="gradient-text font-semibold">online budget calculator</span> helping customers select perfect products within their price range.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full">
                                        <div className="text-center">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Superior Quality</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                                                Consistently <span className="gradient-text font-semibold">superior quality at lower costs</span> without compromising excellence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Commitment Statement */}
                            <div className="relative">
                                <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl blur-2xl opacity-10"></div>
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 text-center">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex justify-center mb-4 sm:mb-6">
                                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Commitment</h3>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 sm:px-4">
                                            Our commitment to <span className="gradient-text font-semibold">innovation</span>, <span className="gradient-text font-semibold">customer satisfaction</span>, and <span className="gradient-text font-semibold">environmental responsibility</span> forms the foundation of everything we do.
                                        </p>
                                        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-6 space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
                                            <div className="flex items-center space-x-2 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                                                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                <span className="text-xs sm:text-sm font-medium text-gray-600">Innovation</span>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                                                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                <span className="text-xs sm:text-sm font-medium text-gray-600">Satisfaction</span>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-gray-50 px-3 sm:px-4 py-2 rounded-full">
                                                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                <span className="text-xs sm:text-sm font-medium text-gray-600">Responsibility</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievements Section */}
                        <div className="mt-12 sm:mt-16 md:mt-20">
                            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                                <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Achievements</h2>
                                <div className="w-20 sm:w-24 md:w-32 h-1 gradient-bg mx-auto rounded-full"></div>
                            </div>

                            {/* Achievement Cards */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                                {/* Award Achievement */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                                        <div className="text-center">
                                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                                                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Award Winner</h3>
                                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4">
                                                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                                                    🏆 <span className="gradient-text">Best Water-Based Paint Manufacturer</span>
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-600">
                                                    by the prestigious <span className="font-semibold text-orange-600">PaintVision Awards</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expansion Goals */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                                        <div className="text-center">
                                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                                                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Expansion Goals</h3>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                                                        🇮🇳 <span className="gradient-text">PAN India Presence</span>
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-600">by 2029</p>
                                                </div>
                                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                                                        🌏 <span className="gradient-text">Asia Expansion</span>
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-600">by 2035</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PaintVision Awards Recognition */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-50"></div>
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100">
                                    <div className="max-w-5xl mx-auto">
                                        {/* Header */}
                                        <div className="text-center mb-6 sm:mb-8">
                                            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4">
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                                                    PaintVision Awards Recognition
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                                            {/* Award Info */}
                                            <div className="lg:col-span-2 order-2 lg:order-1">
                                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                                    The <span className="font-semibold text-orange-600">PaintVision Awards</span> are the <span className="gradient-text font-semibold">first of their kind in India</span>, established exclusively to recognize and celebrate excellence in the paint manufacturing industry.
                                                </p>
                                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                                    Receiving the <span className="gradient-text font-semibold">'Best Water-Based Paint Manufacturer'</span> award from PaintVision is a matter of <span className="font-semibold text-orange-600">great pride</span> for us.
                                                </p>
                                            </div>

                                            {/* Award Visual */}
                                            <div className="text-center order-1 lg:order-2 mb-6 lg:mb-0">
                                                <div className="relative">
                                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                                                        <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">#1</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-3 sm:mt-4">Best Water-Based<br/>Paint Manufacturer</p>
                                            </div>
                                        </div>

                                        {/* Appreciation Section */}
                                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="text-center sm:text-left">
                                                        <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Special Appreciation</h4>
                                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                            We deeply appreciate the efforts of <span className="gradient-text font-semibold">Mr. Manish Malhotra, CEO of PaintVision</span>, whose vision and relentless work have made this prestigious platform a reality. His dedication has elevated the entire paint industry by giving it the recognition and visibility it truly deserves.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tagline Section */}
                        <div className="mt-12 sm:mt-16 md:mt-20">
                            <div className="relative overflow-hidden">
                                {/* Background Elements */}
                                <div className="absolute inset-0 gradient-bg opacity-5 rounded-2xl sm:rounded-3xl"></div>
                                <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 gradient-bg rounded-full blur-3xl opacity-10 animate-pulse"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 gradient-bg rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

                                {/* Main Content */}
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100 text-center">
                                    <div className="max-w-4xl mx-auto">
                                        {/* Decorative Top Element */}
                                        <div className="flex justify-center mb-6 sm:mb-8">
                                            <div className="flex items-center space-x-1 sm:space-x-2">
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-bg rounded-full animate-bounce"></div>
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 gradient-bg rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                                <div className="w-4 h-4 sm:w-5 sm:h-5 gradient-bg rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 gradient-bg rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 gradient-bg rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                            </div>
                                        </div>

                                        {/* Main Tagline */}
                                        <div className="mb-6 sm:mb-8">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                                                <span className="gradient-text">"Innovative Colors.</span>
                                                <br />
                                                <span className="gradient-text">Unmatched Value."</span>
                                            </h2>

                                            {/* Decorative Line */}
                                            <div className="flex justify-center my-4 sm:my-6">
                                                <div className="w-16 sm:w-20 md:w-24 h-1 gradient-bg rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Subtitle */}
                                        <div className="relative">
                                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium italic leading-relaxed px-2 sm:px-4">
                                                Bringing <span className="gradient-text font-semibold not-italic">brilliance</span> to every wall - <span className="gradient-text font-semibold not-italic">affordably</span>.
                                            </p>
                                        </div>

                                        {/* Decorative Bottom Elements */}
                                        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 md:gap-8">
                                            {/* Innovation Icon */}
                                            <div className="group flex flex-col items-center">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600">Innovation</span>
                                            </div>

                                            {/* Colors Icon */}
                                            <div className="group flex flex-col items-center">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600">Colors</span>
                                            </div>

                                            {/* Value Icon */}
                                            <div className="group flex flex-col items-center">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600">Value</span>
                                            </div>

                                            {/* Quality Icon */}
                                            <div className="group flex flex-col items-center">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-bg rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600">Quality</span>
                                            </div>
                                        </div>

                                        {/* Final Decorative Element */}
                                        <div className="mt-6 sm:mt-8 flex justify-center">
                                            <div className="flex items-center space-x-1">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Section */}
                        <div className="mt-12 sm:mt-16 md:mt-20">
                            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                                <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Certification</h2>
                                <div className="w-20 sm:w-24 md:w-32 h-1 gradient-bg mx-auto rounded-full"></div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 px-4 sm:px-6 md:px-0">
                                    Recognized for excellence and quality standards in the paint manufacturing industry
                                </p>
                            </div>

                            {/* Certificate Showcase */}
                            <div className="relative">
                                {/* Background Decorative Elements */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-500/5 to-red-500/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
                                <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>

                                {/* Main Certificate Container */}
                                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100">
                                    <div className="max-w-5xl mx-auto">

                                        {/* Certificate Display */}
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">

                                            {/* Left Content */}
                                            <div className="lg:col-span-1 order-2 lg:order-1 text-center lg:text-left">
                                                <div className="space-y-4 sm:space-y-6">
                                                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                                                            Certified Excellence
                                                        </span>
                                                    </div>

                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                                        Quality <span className="gradient-text">Assurance</span> & <span className="gradient-text">Standards</span>
                                                    </h3>

                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        Our commitment to quality is validated through rigorous certification processes, ensuring every product meets the highest industry standards.
                                                    </p>

                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">ISO Quality Standards</span>
                                                        </div>
                                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Environmental Compliance</span>
                                                        </div>
                                                        <div className="flex items-center justify-center lg:justify-start space-x-3">
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Safety Certifications</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Center Certificate Image */}
                                            <div className="lg:col-span-1 order-1 lg:order-2">
                                                <div className="relative group">
                                                    {/* Certificate Frame */}
                                                    <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                                                        {/* Decorative Corners */}
                                                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-400 rounded-tl-lg"></div>
                                                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-400 rounded-tr-lg"></div>
                                                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-400 rounded-bl-lg"></div>
                                                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-400 rounded-br-lg"></div>

                                                        {/* Certificate Image */}
                                                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                                                            <img
                                                                src="../images/certificate.jpeg"
                                                                alt="Quality Certification"
                                                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                            />

                                                            {/* Overlay on Hover */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                        </div>

                                                        {/* Certificate Badge */}
                                                        <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    {/* Floating Elements */}
                                                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-bounce"></div>
                                                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                                                </div>
                                            </div>

                                            {/* Right Content */}
                                            <div className="lg:col-span-1 order-3 text-center lg:text-right">
                                                <div className="space-y-4 sm:space-y-6">
                                                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                                                        <span className="text-sm sm:text-base font-bold gradient-text">
                                                            Trusted Quality
                                                        </span>
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 gradient-bg rounded-full flex items-center justify-center">
                                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                                        <span className="gradient-text">Industry</span> Recognition & <span className="gradient-text">Trust</span>
                                                    </h3>

                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        This certification represents our unwavering dedication to delivering products that exceed customer expectations and industry benchmarks.
                                                    </p>

                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-center lg:justify-end space-x-3">
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Third-Party Verified</span>
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                        </div>
                                                        <div className="flex items-center justify-center lg:justify-end space-x-3">
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Annual Audits</span>
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                        </div>
                                                        <div className="flex items-center justify-center lg:justify-end space-x-3">
                                                            <span className="text-xs sm:text-sm font-medium text-gray-600">Continuous Improvement</span>
                                                            <div className="w-2 h-2 gradient-bg rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Decorative Element */}
                                        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                                            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
                                                <div className="w-3 h-3 gradient-bg rounded-full animate-pulse"></div>
                                                <span className="text-sm sm:text-base font-medium text-gray-700">Certified for Excellence Since 2007</span>
                                                <div className="w-3 h-3 gradient-bg rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PaintingCalculatorForm />


        </div>
    );
};

export default OurStory;
