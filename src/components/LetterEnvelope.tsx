
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Mail } from 'lucide-react';

const LetterEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `My Dearest Maa,

As I sit here writing this letter, my heart is overflowing with gratitude and love for you. There are no words in any language that could fully express what you mean to me.

You've been my first teacher, my biggest cheerleader, my safe haven, and my guiding star. Through every triumph and every stumble, you've been there with your unwavering love and support.

I remember the countless nights you stayed up when I was sick, the way you celebrated my smallest achievements as if they were the greatest victories, and how you always believed in my dreams even when they seemed impossible.

Your strength amazes me every day. You've faced challenges with such grace and courage, showing me what it truly means to be resilient. Your kindness touches everyone around you, and your wisdom has shaped who I am today.

Thank you for the sacrifices you've made, for the love you've given so freely, and for being the incredible woman you are. I am so proud to be your child.

On your special day, I want you to know that you are loved beyond measure, appreciated more than words can say, and cherished for the beautiful soul you are.

Happy Birthday, Maa. You deserve all the happiness in the world.

With all my love,
Your little one 💖`;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
          A Letter Just for You
        </h2>
        <p className="text-xl text-gray-600">Click the envelope to read my heart</p>
      </div>
      
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="relative">
          {/* Envelope */}
          <div 
            className={`relative cursor-pointer transition-all duration-700 ${isOpen ? 'transform scale-110' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-96 h-64 bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg shadow-xl relative overflow-hidden">
              {/* Envelope flap */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-rose-300 to-pink-400 transform-origin-top transition-transform duration-700 ${isOpen ? 'rotate-x-180' : ''}`}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <Heart className="text-red-500 w-8 h-8" />
                </div>
              </div>
              
              {/* Envelope body */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                <div className="text-center">
                  <Mail className="text-rose-700 w-12 h-12 mx-auto mb-2" />
                  <p className="text-rose-800 font-semibold text-lg">For My Beautiful Maa</p>
                  <p className="text-rose-600 text-sm">Click to open</p>
                </div>
              </div>
            </div>
          </div>

          {/* Letter content */}
          {isOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 w-full max-w-2xl animate-fade-in">
              <Card className="bg-cream-100 p-8 rounded-2xl shadow-xl border-2 border-rose-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-script text-rose-800 mb-2">A Letter to Maa</h3>
                  <div className="w-16 h-0.5 bg-rose-400 mx-auto"></div>
                </div>
                
                <div className="max-h-96 overflow-y-auto space-y-4 text-gray-700 leading-relaxed">
                  {letterContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Button 
                    onClick={() => setIsOpen(false)}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full"
                  >
                    Close Letter
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetterEnvelope;
