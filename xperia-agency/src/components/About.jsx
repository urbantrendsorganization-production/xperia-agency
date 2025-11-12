import React from 'react'
import aboutImg from '../assets/about.jpg';
import about2 from '../assets/about2.jpg';

function About() {
    return (
        <div className='w-full mt-20 p-8'>
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-gray-800 tracking-tight mb-6">
                Because we are
                {/* Decorative underline */}
                <span className="absolute left-1/2 bottom-[-8px] w-20 h-[3px] bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] rounded-full -translate-x-1/2"></span>
            </h2>

            {/* content container */}
            <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-9 px-4 sm:px-6 md:px-8 py-10 bg-gradient-to-br from-[#000000] via-[#ff0000] to-black/50 rounded-2xl shadow-2xl overflow-hidden">

                {/* image area */}
                <div className="relative w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden group">
                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                    {/* subtle gold glow at bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#FFD700]/25 to-transparent blur-xl z-10" />
                    <img
                        src={aboutImg}
                        alt="About us"
                        className="object-cover w-full h-full scale-105 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* text area */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-gray-200 px-2 sm:px-4 md:px-0">
                    <h3 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] bg-clip-text text-transparent tracking-tight">
                        MORE THAN YOUR AVERAGE EVENT AGENCY
                        {/* Animated black underline */}
                        <span className="absolute left-0 bottom-[-8px] w-24 h-[3px] bg-black rounded-full overflow-hidden">
                            <span className="block w-full h-full bg-gradient-to-r from-black/40 via-black/70 to-black/40 animate-shimmer"></span>
                        </span>
                    </h3>

                    <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-300">
                        We are a collaborative team of experts dedicated to crafting and cultivating captivating experiences across Kenya, East Africa and the broader African landscape. Our core mission revolves around weaving captivating stories into every facet of your event and brand story, crafting collaborative magic that leads to unparalleled success.
                    </p>

                    <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-300">
                        We are proud to introduce ourselves as Xperia, your trusted partner in making your next brand experience the best one yet.
                    </p>

                    {/* Read More Button */}
                    <div className="mt-6">
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] text-black font-semibold uppercase tracking-wide shadow-lg hover:scale-105 transition-transform duration-300">
                            Read More About
                        </button>
                    </div>
                </div>
            </section>

            {/* what we do */}
            <h2 className="relative text-2xl mt-4 sm:text-3xl md:text-3xl text-center font-semibold text-gray-800 tracking-tight mb-6">
                What we do
                {/* Decorative underline */}
                <span className="absolute left-1/2 bottom-[-8px] w-20 h-[3px] bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] rounded-full -translate-x-1/2"></span>
            </h2>

            {/* flipped section */}
            <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 mt-9 px-4 sm:px-6 md:px-8 py-10 bg-gradient-to-br from-[#000000] via-[#ff0000] to-black/50 rounded-2xl shadow-2xl overflow-hidden">

                {/* image area */}
                <div className="relative w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden group">
                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                    {/* subtle gold glow at bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#FFD700]/25 to-transparent blur-xl z-10" />
                    <img
                        src={about2}
                        alt="About us"
                        className="object-cover w-full h-full scale-105 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* text area */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-gray-200 px-2 sm:px-4 md:px-0">
                    <h3 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] bg-clip-text text-transparent tracking-tight">
                        MORE THAN THE ORDINARY
                        {/* Animated black underline */}
                        <span className="absolute left-0 bottom-[-8px] w-24 h-[3px] bg-black rounded-full overflow-hidden">
                            <span className="block w-full h-full bg-gradient-to-r from-[#FFD700] via-white/70 to-white/40 animate-shimmer"></span>
                        </span>
                    </h3>

                    <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-300">
                        From global conferences to corporate events and conferences, grand festivals to prestigious award ceremonies, we specialize in a diverse range of events and brand experiences. Our expertise extends beyond event management, encompassing event technology, strategic corporate communication, integrated marketing solutions, and seamless production.        </p>

                    <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-300">
                        We are proud to introduce ourselves as Xperia, your trusted partner in making your next brand experience the best one yet.
                    </p>

                    {/* Read More Button */}
                    <div className="mt-6">
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFCC00] text-black font-semibold uppercase tracking-wide shadow-lg hover:scale-105 transition-transform duration-300">
                            Read More About
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
