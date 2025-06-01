import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Star } from 'lucide-react';

interface OpeningAnimationProps {
  showCard: boolean;
  onStart: () => void;
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ showCard, onStart }) => {
  return (
    <div className="text-center z-10 relative">
      <div className={`transition-all duration-2000 ${showCard ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90'}`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-elegant bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4 animate-pulse text-shadow-lg">
            Happy Birthday Mummy
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto px-4 font-sans">
          A digital letter filled with memories, gratitude, and endless love ✨
        </p>
        
        <Button 
          onClick={onStart}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
        >
          Begin Journey 
        </Button>
      </div>
    </div>
  );
};

export default OpeningAnimation;
