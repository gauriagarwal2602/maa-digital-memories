import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Heart, Star } from 'lucide-react';

// Import images
import img1 from "@/components/ui/images/20.jpg";
import img2 from "@/components/ui/images/13.jpg";
import img3 from "@/components/ui/images/14.jpg";
import img4 from "@/components/ui/images/15.jpg";
import img5 from "@/components/ui/images/16.jpg";
import img6 from "@/components/ui/images/17.jpg";
import img7 from "@/components/ui/images/18.jpg";
import img8 from "@/components/ui/images/19.jpg";

const HeroSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const reasons = [
    { 
      id: 1, 
      text: "You always know how to make everything better", 
      image: img1
    },
    { 
      id: 2, 
      text: "Your daant can cure any bad day",
      image: img2
    },
    { 
      id: 3, 
      text: "You taught me to be strong and kind",
      image: img3
    },
    { 
      id: 4, 
      text: "You make the best pasta",
      image: img4
    },
    { 
      id: 5, 
      text: "You believe in me even when I don't",
      image: img5
    },
    { 
      id: 6, 
      text: "Your smile lights up any room",
      image: img6
    },
    { 
      id: 7, 
      text: "You sacrifice so much without asking for anything",
      image: img7
    },
    { 
      id: 8, 
      text: "You Paytm me money whenever I ask for it",
      image: img8
    }
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
        <h2 className="text-4xl md:text-5xl font-display text-pink-800 mb-4 text-shadow">
          Why You're My Superhero
        </h2>
        <p className="text-xl text-gray-700 font-sans">Click each card to reveal why you're amazing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="relative h-64 cursor-pointer group"
            onClick={() => toggleCard(reason.id)}
          >
            <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.has(reason.id) ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-2xl shadow-lg flex items-center justify-center backface-hidden overflow-hidden">
                <div className="relative w-full h-full">
                  <img 
                    src={reason.image} 
                    alt={`Reason ${reason.id}`}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-rose-300/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-bold text-shadow">Reason {reason.id}</h3>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Back of card */}
              <Card className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180 overflow-hidden">
                <div className="relative w-full h-full">
                  <img 
                    src={reason.image} 
                    alt={`Reason ${reason.id}`}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="text-gray-800 font-medium leading-relaxed text-shadow">{reason.text}</p>
                    </div>
                  </div>
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
