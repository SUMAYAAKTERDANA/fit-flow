import React from 'react';
import Image from 'next/image';

import bannerImg from '../../assets/banner.png'; 

const Banner = () => {
  return (
    
    <section className="w-full bg-[#111315] text-white py-12 md:py-20 lg:py-24 overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        
        
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          
          <h4 className="text-[#D4FF00] font-bold text-xs md:text-sm tracking-widest mb-3 md:mb-4 uppercase">
            Workout Library
          </h4>
          
         
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold uppercase leading-[1.1] mb-5 md:mb-6 tracking-tight">
            Train with intent. <br className="hidden sm:block" /> Log every set.
          </h1>
          
          
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-md leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          
        
          <button className="w-full sm:w-auto bg-[#D4FF00] text-black font-extrabold text-sm uppercase tracking-wider py-4 px-8 hover:bg-[#b8e600] transition-colors">
            Browse Workouts
          </button>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
         
          <div className="relative w-[80%] sm:w-[60%] md:w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px]">
            <Image 
              src={bannerImg} 
              alt="Workout illustration" 
              fill
              className="object-contain object-center md:object-right"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Banner;