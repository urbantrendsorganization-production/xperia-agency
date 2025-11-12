import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import image1 from '../assets/landing1.jpg';
import image2 from '../assets/landing2.0.jpg';
import image3 from '../assets/landing2.jpg';
import image4 from '../assets/landing3.jpg';
import image5 from '../assets/landing4.jpg';

function Carousel() {
  const images = [
    {
      url: `${image1}`,
      title: 'Xperia Live Festival',
      description: 'Unleashing Kenya’s biggest music and art celebration.',
      buttonText: 'Get Tickets',
    },
    {
      url: `${image2}`,
      title: 'Nightlife Experience',
      description: 'Feel the energy — lights, beats, and unforgettable vibes.',
      buttonText: 'Join the Party',
    },
    {
      url: `${image3}`,
      title: 'Cultural Fusion',
      description: 'Where tradition meets modern creativity and style.',
      buttonText: 'Explore Events',
    },
    {
      url: `${image4}`,
      title: 'Fashion & Glam',
      description: 'Showcasing Kenya’s trendsetters on and off the runway.',
      buttonText: 'See Highlights',
    },
    {
      url: `${image5}`,
      title: 'Outdoor Adventures',
      description: 'Epic event experiences across Kenya’s iconic destinations.',
      buttonText: 'Discover More',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToPrevious = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="mt-12 w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-8xl">
        {/* Carousel Container */}
        <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="relative h-[500px] overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === current
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 scale-95 translate-x-full'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover brightness-[0.65]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    {image.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed mb-5">
                    {image.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] 
                               text-black font-semibold rounded-full shadow-lg hover:scale-105 
                               hover:shadow-2xl transition-all duration-300 
                               focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70"
                  >
                    {image.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'w-10 bg-white h-2'
                    : 'w-3 h-2 bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
                index === current
                  ? 'ring-4 ring-[#FFD700]/80 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-24 object-cover rounded-xl brightness-[0.9]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
