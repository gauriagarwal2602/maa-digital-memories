
import React from 'react';
import { Card } from "@/components/ui/card";
import { Heart } from 'lucide-react';

const MemoryTimeline = () => {
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      caption: "My first steps with you holding my hands 👶",
      year: "Early Years"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      caption: "School days and your packed lunches 🎒",
      year: "School Days"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      caption: "Festival celebrations and your beautiful smile 🎉",
      year: "Festivals"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      caption: "Family trips and endless laughter 🚗",
      year: "Adventures"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      caption: "Late night talks and midnight snacks 🌙",
      year: "Heart-to-Hearts"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      caption: "Your proud moments watching me grow 🌱",
      year: "Milestones"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      caption: "Today and always, my inspiration 💫",
      year: "Forever"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Our Beautiful Journey
        </h2>
        <p className="text-xl text-gray-600">Precious moments we've shared together</p>
      </div>
      
      <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
        {memories.map((memory, index) => (
          <Card key={memory.id} className="min-w-80 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="relative">
              <img 
                src={memory.image} 
                alt={memory.caption}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-semibold text-purple-600">{memory.year}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="text-pink-500 w-5 h-5" />
                <span className="text-lg font-semibold text-gray-800">Memory #{index + 1}</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{memory.caption}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MemoryTimeline;
