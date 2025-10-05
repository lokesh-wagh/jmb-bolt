import React from 'react';
import { Button } from "../ui/button";

const GallerySection = () => {
  return (
    <section className="relative mt-[24vh] mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <h2 className="text-left [font-family:'Inria_Serif',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl mb-12">
        Gallery
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <img
          className="w-full aspect-[16/11] object-cover rounded-lg shadow-md"
          alt="Hotel Image 1"
          src="/hotel1.jpg"
        />
        <img
          className="w-full aspect-[16/11] object-cover rounded-lg shadow-md"
          alt="Hotel Image 2"
          src="/hotel2.jpg"
        />
        <img
          className="w-full aspect-[16/11] object-cover rounded-lg shadow-md"
          alt="Hotel Image 3"
          src="/hotel3.jpg"
        />
        <img
          className="w-full aspect-[16/11] object-cover rounded-lg shadow-md"
          alt="Hotel Image 4"
          src="/hotel4.jpg"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button className="w-[14.5%] min-w-[180px] max-w-[219px] py-3 bg-[#fffbfb] text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold text-lg md:text-xl hover:bg-gray-50 h-auto">
          View more
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;