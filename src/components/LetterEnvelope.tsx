import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
import img9 from "@/components/ui/images/9.jpg";

const LetterEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `Dear Mummy,

As I sit here writing this letter in the adjacent room, I realize that I have forgotten how to write since Chatgpt 😅.


Thank you for being my first teacher, my biggest cheerleader, and my guiding star. Through every triumph and every stumble, you've been there with your unwavering love and support.

Happy Birthday, Mummy. You deserve all the happiness in the world.

With all my love,
Nishu`;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-rose-800 mb-4 text-shadow">
          A Letter Just for You
        </h2>
        <p className="text-xl text-gray-700 font-sans" style={{ fontWeight: 300 }}>
          Click the envelope 
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="relative flex flex-col items-center">
          {/* Envelope */}
          <div
            className={`relative cursor-pointer transition-all duration-700 select-none ${isOpen ? 'z-20' : ''}`}
            style={{
              width: '320px',
              height: '200px',
              backgroundColor: '#eee8dc',
              position: 'relative',
              overflow: 'hidden',
              margin: '0 auto',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Before pseudo-element */}
            <div
              style={{
                content: '""',
                height: '240px',
                width: '240px',
                border: '6.4px solid #e0d9c8',
                position: 'absolute',
                borderRadius: '32px 32px 20px 32px',
                backgroundColor: '#eee8dc',
                bottom: 0,
                left: '50%',
                transform: 'translate(-50%, 50%) rotate(45deg)',
              }}
            />
            {/* After pseudo-element */}
            <div
              style={{
                content: '""',
                height: '240px',
                width: '240px',
                border: '6.4px solid #e0d9c8',
                position: 'absolute',
                borderRadius: '32px 32px 20px 32px',
                backgroundColor: '#eee8dc',
                left: '50%',
                top: 0,
                transform: 'translate(-50%, -50%) rotate(45deg)',
                boxShadow: '1px 1px 20px 1px #c4bca9',
              }}
            />
          </div>
          {/* Letter content */}
          <div 
            className={`absolute left-[360px] top-1/2 transform -translate-y-1/2 transition-all duration-700 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'}`}
            style={{ zIndex: 30, width: '400px' }}
          >
            <Card 
              className="bg-[#f9f4e8] p-8 rounded-2xl shadow-xl border-2 border-rose-200 relative overflow-hidden"
              style={{
                fontFamily: "'Caveat', cursive",
                transform: 'rotate(-1deg)',
                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              }}
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}></div>
              <div className="text-center mb-6 relative">
                <h3 className="text-2xl font-elegant text-rose-800 mb-2 text-shadow">A Letter For You</h3>
                <div className="w-16 h-0.5 bg-rose-400 mx-auto"></div>
              </div>
              <div className="max-h-96 overflow-y-auto space-y-4 text-gray-800 leading-relaxed relative font-handwriting" style={{ fontSize: '1.25rem' }}>
                {letterContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterEnvelope;
