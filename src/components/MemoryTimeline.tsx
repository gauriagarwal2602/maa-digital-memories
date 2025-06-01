import React, { useRef, useState } from 'react';
import { Card } from "@/components/ui/card";

// Import images
import img1 from "@/components/ui/images/1.jpg";
import img2 from "@/components/ui/images/2.jpg";
import img3 from "@/components/ui/images/3.jpg";
import img4 from "@/components/ui/images/4.jpg";
import img5 from "@/components/ui/images/5.jpg";
import img6 from "@/components/ui/images/6.jpg";
import img7 from "@/components/ui/images/7.jpg";
import img8 from "@/components/ui/images/8.jpg";
import img9 from "@/components/ui/images/9.jpg";
import img10 from "@/components/ui/images/10.jpg";
import img11 from "@/components/ui/images/11.jpg";
import img12 from "@/components/ui/images/12.jpg";
import img13 from "@/components/ui/images/13.jpg";
import img14 from "@/components/ui/images/14.jpg";
import img15 from "@/components/ui/images/15.jpg";
import img16 from "@/components/ui/images/16.jpg";
import img17 from "@/components/ui/images/17.jpg";
import img18 from "@/components/ui/images/18.jpg";
import img19 from "@/components/ui/images/19.jpg";
import img20 from "@/components/ui/images/20.jpg";
import img21 from "@/components/ui/images/21.jpg";
import img22 from "@/components/ui/images/22.jpg";

const memories = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 10, image: img10 },
  { id: 11, image: img11 }
];

const MemoryTimeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScroll(scrollPercentage);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
          Swipe through these precious moments we've shared together over the years.
        </h2>
      </div>

      {/* Images Container */}
      <div
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory max-w-6xl mx-auto"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="min-w-[300px] max-w-xs rounded-2xl overflow-hidden snap-center flex-shrink-0 hover:scale-105 transition-all duration-300"
          >
            <img
              src={memory.image}
              alt={`Memory ${memory.id}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Progress Bar - Moved below images */}
      <div className="w-full max-w-2xl mx-auto h-2 bg-pink-100 rounded-full mt-6 mb-4 relative">
        <div
          className="h-2 bg-pink-300 rounded-full transition-all duration-300"
          style={{ width: `${scroll * 100}%` }}
        ></div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center text-pink-400 font-script text-lg mt-2">
        &larr; Swipe to see more memories &rarr;
      </div>
    </div>
  );
};

export default MemoryTimeline;
