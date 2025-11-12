import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function InfoServices() {
  const animationUrl = '/animations/events-xperia.lottie';

  return (
    <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-6 md:p-10 rounded-2xl shadow-2xl">
      
      {/* Text Area */}
      <div className="w-full md:w-1/2 justify-center flex flex-col gap-4 text-gray-200 py-15 px-5">
        <p className='text-gray-500 font-light text-3xl'>Through creativity & Expertise</p>

        <h3 className="text-2xl sm:text-4xl md:text-4xl font-bold bg-black bg-clip-text text-transparent">
          We Create The Extraordinary
        </h3>
        <p className="text-base sm:text-xl leading-relaxed bg-[#ff0000] bg-clip-text text-transparent">
Our proven formula for success?   We firmly believe that the most remarkable events are strategically sound. Our methodical approach guides us through each stage, ensuring that beauty and intelligence harmonize seamlessly.   Xperia provides a full cycle of services. From idea and concept to complete implementation of the event.        </p>
        <p className="text-base sm:text-lg leading-relaxed italic text-gray-900">
          Partner with us to elevate your events, captivate your audience, and create memories that last.
        </p>
      </div>

      {/* Animation Area */}
      <div className="w-full md:w-1/2 flex justify-center">
        <DotLottieReact
          src={animationUrl}
          loop
          autoplay
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-120 md:h-120 object-contain"
        />
      </div>
    </section>
  );
}

export default InfoServices;
