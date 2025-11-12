import React, { useState } from 'react';
import masterCard from '/mastercard.jpg';
import multichoice from '/multichoice.jpg';
import piego from '/piego.jpg';
import safaricom from '/saf.jpg';
import samsung from '/SAMSUNG.jpg';
import sarova from '/sarova.jpg';
import soar from '/soar.jpg';
import stanbic from '/STANBIC.jpg';
import unep from '/unep.jpg';
import uon from '/uon.jpg';
import visa from '/visa.jpg';
import vodafone from '/vodafone.jpg';
import who from '/who.jpg';

function Brands() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const brands = [
        { name: 'MasterCard', logo: masterCard },
        { name: 'MultiChoice', logo: multichoice },
        { name: 'Piego', logo: piego },
        { name: 'Safaricom', logo: safaricom },
        { name: 'Samsung', logo: samsung },
        { name: 'Sarova', logo: sarova },
        { name: 'Soar', logo: soar },
        { name: 'Stanbic', logo: stanbic },
        { name: 'UNEP', logo: unep },
        { name: 'University of Nairobi', logo: uon },
        { name: 'Visa', logo: visa },
        { name: 'Vodafone', logo: vodafone },
        { name: 'WHO', logo: who }
    ];

    // Duplicate brands for infinite scroll effect
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className='w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden'>
            <div className='max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-block'>
                        <span className='text-sm font-semibold bg-gradient-to-r from-[#FFD700] to-[#000000] bg-clip-text text-transparent uppercase tracking-wider mb-2 block'>
                            Trusted Partnerships
                        </span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold  bg-gradient-to-br from-[#000000] via-[#ff0000] to-black/50 bg-clip-text text-transparent mb-4'>
                            For Extraordinary Brands
                        </h1>
                        <div className='h-1 w-24 bg-gradient-to-r from-[#FFD700] via-[#ff0000]/70 to-white/40 rounded-full mx-auto'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
                        Proud to collaborate with industry leaders and innovators from around the globe
                    </p>
                </div>

                {/* Brands Grid - Desktop */}
                <div className='hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12'>
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className='group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200'
                        >
                            <div className='aspect-square flex items-center justify-center overflow-hidden'>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${hoveredIndex === index
                                            ? 'scale-110 grayscale-0'
                                            : 'scale-100 grayscale hover:grayscale-0'
                                        }`}
                                />
                            </div>
                            {/* Hover Effect Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                }`} />
                        </div>
                    ))}
                </div>

                {/* Infinite Scroll - Mobile */}
                <div className='md:hidden relative'>
                    <div className='flex overflow-hidden'>
                        <div className='flex animate-scroll'>
                            {duplicatedBrands.map((brand, index) => (
                                <div
                                    key={index}
                                    className='flex-shrink-0 w-40 mx-3'
                                >
                                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300'>
                                        <div className='aspect-square flex items-center justify-center'>
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Gradient Overlays */}
                    <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none' />
                    <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none' />
                </div>

                {/* Stats Section */}
                <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'>
                    <div className='text-center'>
                        <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent mb-2'>
                            13+
                        </div>
                        <div className='text-sm text-[#C0A45A] font-medium'>Global Partners</div>
                    </div>

                    <div className='text-center'>
                        <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent mb-2'>
                            100%
                        </div>
                        <div className='text-sm text-[#C0A45A] font-medium'>Satisfaction Rate</div>
                    </div>

                    <div className='text-center'>
                        <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent mb-2'>
                            50+
                        </div>
                        <div className='text-sm text-[#C0A45A] font-medium'>Projects Delivered</div>
                    </div>

                    <div className='text-center'>
                        <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent mb-2'>
                            10+
                        </div>
                        <div className='text-sm text-[#C0A45A] font-medium'>Years Experience</div>
                    </div>
                </div>

            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

export default Brands;