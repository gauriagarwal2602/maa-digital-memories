
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
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4 animate-pulse">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-script text-rose-600 mb-6 animate-fade-in">
            Maa! 💖
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="text-red-400 w-8 h-8 animate-pulse" />
            <Star className="text-yellow-400 w-8 h-8 animate-pulse" />
            <Heart className="text-pink-400 w-8 h-8 animate-pulse" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
          A digital love letter filled with memories, gratitude, and endless love ✨
        </p>
        
        <Button 
          onClick={onStart}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Start the Journey 💕
        </Button>
      </div>
    </div>
  );
};

export default OpeningAnimation;
