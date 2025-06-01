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
            <h3 className="text-2xl md:text-4xl font-semibold text-pink-700 mb-8">
            Thank You for making world a better place
            </h3>
          </div>

          {/* Emotional Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 mb-12">
            <p className="text-xl md:text-2xl text-pink-800 leading-relaxed mb-6">
              Every day with you is a blessing. Your love and guidance has shaped us 
              and your strength has inspired us to become the people we are today.
            </p>
            <p className="text-lg md:text-xl text-pink-700 leading-relaxed mb-8">
              On this special day, we want you to know that you are cherished beyond words, 
              loved beyond measure, and appreciated more than you could ever imagine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingSection;
