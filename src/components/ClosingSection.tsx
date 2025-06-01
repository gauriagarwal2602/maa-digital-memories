
import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';

const ClosingSection = () => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHearts(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 relative">
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Heart 
                className="text-pink-400 opacity-70" 
                size={Math.random() * 20 + 10}
              />
            </div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              <Star 
                className="text-yellow-400 opacity-60" 
                size={Math.random() * 15 + 8}
              />
            </div>
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Thank You
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">
              for being the reason I smile
            </h3>
          </div>

          {/* Emotional Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 mb-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Every day with you is a blessing. Your love has shaped me, your wisdom has guided me, 
              and your strength has inspired me to become the person I am today.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              On this special day, I want you to know that you are cherished beyond words, 
              loved beyond measure, and appreciated more than you could ever imagine.
            </p>
            
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="text-red-500 w-12 h-12 animate-pulse" />
              <Star className="text-yellow-500 w-12 h-12 animate-pulse" />
              <Heart className="text-pink-500 w-12 h-12 animate-pulse" />
            </div>
            
            <p className="text-2xl md:text-3xl font-script text-pink-600 mb-4">
              Forever your little one
            </p>
            <p className="text-4xl">💖</p>
          </div>

          {/* Final Birthday Wish */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 text-white shadow-2xl">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Happy Birthday, Maa! 🎉
            </h4>
            <p className="text-lg md:text-xl opacity-90">
              May your day be filled with all the love, joy, and happiness you bring to others every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingSection;
