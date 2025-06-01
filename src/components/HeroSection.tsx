
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const reasons = [
    { id: 1, text: "You always know how to make everything better", icon: <Heart className="w-6 h-6" /> },
    { id: 2, text: "Your hugs can cure any bad day", icon: <Star className="w-6 h-6" /> },
    { id: 3, text: "You taught me to be strong and kind", icon: <Heart className="w-6 h-6" /> },
    { id: 4, text: "Your cooking tastes like pure love", icon: <Star className="w-6 h-6" /> },
    { id: 5, text: "You believe in me even when I don't", icon: <Heart className="w-6 h-6" /> },
    { id: 6, text: "Your smile lights up any room", icon: <Star className="w-6 h-6" /> },
    { id: 7, text: "You sacrifice so much without asking for anything", icon: <Heart className="w-6 h-6" /> },
    { id: 8, text: "Your wisdom guides me through life", icon: <Star className="w-6 h-6" /> },
    { id: 9, text: "You love unconditionally and endlessly", icon: <Heart className="w-6 h-6" /> },
    { id: 10, text: "You're simply the best mom in the universe", icon: <Star className="w-6 h-6" /> }
  ];

  const toggleCard = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
          Why You're My Superhero
        </h2>
        <p className="text-xl text-gray-600">Click each card to reveal why you're amazing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="relative h-48 cursor-pointer group"
            onClick={() => toggleCard(reason.id)}
          >
            <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.has(reason.id) ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center backface-hidden">
                <div className="text-center text-white">
                  <div className="mb-4 flex justify-center text-white/80">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold">Reason #{reason.id}</h3>
                  <p className="text-sm opacity-80 mt-2">Click to reveal</p>
                </div>
              </Card>
              
              {/* Back of card */}
              <Card className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                <div className="text-center">
                  <div className="mb-3 flex justify-center text-pink-500">
                    {reason.icon}
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">{reason.text}</p>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
