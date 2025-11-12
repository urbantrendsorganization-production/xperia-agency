import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import image1 from '../assets/landing1.jpg'
import image2 from '../assets/landing2.0.jpg'
import image3 from '../assets/landing2.jpg'
import image4 from '../assets/landing3.jpg'
import image5 from '../assets/landing4.jpg'

function Carousel() {
    const images = [
        {
            url: `${image1}`,
            title: 'Mountain Vista',
            description: 'Breathtaking mountain landscapes'
        },
        {
            url: `${image2}`,
            title: 'Forest Path',
            description: 'Serene woodland journey'
        },
        {
            url: `${image3}`,
            title: 'Wildflower Meadow',
            description: 'Nature in full bloom'
        },
        {
            url: `${image4}`,
            title: 'Coastal Sunset',
            description: 'Golden hour by the sea'
        },
        {
            url: `${image5}`,
            title: 'Desert Dunes',
            description: 'Endless sandy horizons'
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setDirection('next');
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    const goToPrevious = () => {
        setDirection('prev');
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setDirection('next');
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index) => {
        setDirection(index > current ? 'next' : 'prev');
        setCurrent(index);
    };

    return (
        <div className="mt-12 w-full min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-8xl">
                {/* Carousel Container */}
                <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    {/* Images */}
                    <div className="relative h-[500px] overflow-hidden">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === current
                                        ? 'opacity-100 scale-100 translate-x-0'
                                        : index < current || (current === 0 && index === images.length - 1)
                                            ? 'opacity-0 scale-95 -translate-x-full'
                                            : 'opacity-0 scale-95 translate-x-full'
                                    }`}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#f4bd0a]/50 via-[#ff0000]/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h2 className="text-4xl font-bold mb-2 transform transition-all duration-700 delay-200">
                                        {image.title}
                                    </h2>
                                    <p className="text-lg text-gray-200 transform transition-all duration-700 delay-300">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Play/Pause Button */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    {/* Indicator Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === current
                                        ? 'w-8 bg-white'
                                        : 'w-2 bg-white/50 hover:bg-white/75'
                                    } h-2`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-6 grid grid-cols-5 gap-4">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${index === current
                                    ? 'p-[3px] bg-gradient-to-br from-[#FFD700]/80 via-[#FFA500]/80 to-[#FFCC00]/80 scale-105'
                                    : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            <div className="bg-white rounded-xl">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-24 object-cover rounded-xl"
                                />
                            </div>
                            {index === current && (
                                <div className="absolute inset-0 bg-purple-500/20 rounded-xl" />
                            )}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Carousel;