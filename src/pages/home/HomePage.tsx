import React from 'react';
import Hero from '../../components/home/Hero';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import ColorInspiration from '../../components/home/ColorInspiration';
import ColorOptions from '../../components/home/ColorOptions';
import CustomerReviews from '../../components/home/CustomerReviews';
import Form from '../Form/Form';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Form />
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
      <FeaturedProducts />
      <ColorInspiration />
      <ColorOptions />
      {/* <Services /> */}
      {/* <PaintCalculator /> */}
      {/* <LatestStories /> */}
      <CustomerReviews />
    </div>
  );
};

export default HomePage; 