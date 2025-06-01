import React from 'react';
import { Card } from "@/components/ui/card";
import { Heart } from 'lucide-react';

const RecipeCard = () => {
  const ingredients = [
    "1 cup of endless patience",
    "2 tablespoons of unconditional love", 
    "3 cups of strength and courage",
    "A sprinkle of magic in everything you touch",
    "A gallon of the warmest hugs",
    "1 pound of wisdom and guidance",
    "A dash of the most beautiful smile",
    "Unlimited forgiveness and understanding",
    "A handful of the best advice",
    "Infinite kindness and compassion"
  ];

  const instructions = [
    "Mix all ingredients with a heart full of love",
    "Add memories and laughter to taste", 
    "Season with countless bedtime stories",
    "Bake with warm embraces for a lifetime",
    "Serve with pride and joy",
    "Best enjoyed surrounded by family"
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Recipe for the Perfect Mom
        </h2>
        <p className="text-xl text-gray-600" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
          The secret ingredients that make you amazing
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card 
          className="p-8 rounded-3xl shadow-xl relative overflow-hidden"
          style={{
            background: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png") repeat, linear-gradient(45deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
            backgroundSize: 'auto',
            border: '8px solid #654321',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px rgba(0,0,0,0.1)',
          }}
        >
          {/* Recipe Header */}
          <div className="text-center mb-8 border-b-2 border-amber-300/30 pb-6 relative">
            <h3 className="text-3xl font-script text-amber-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Mummy's Special Recipe</h3>
            <p className="text-amber-200 italic" style={{ fontFamily: "'Poppins', sans-serif" }}>Serves: One Perfect Family • Prep Time: A Lifetime of Love</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Ingredients */}
            <div>
              <h4 className="text-2xl font-bold text-amber-100 mb-6 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ingredients
              </h4>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-200">
                    <span className="text-amber-300 font-bold mt-1">•</span>
                    <span className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="text-2xl font-bold text-amber-100 mb-6 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Instructions
              </h4>
              <ol className="space-y-3">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-200">
                    <span className="bg-amber-300/20 text-amber-100 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border border-amber-300/30">
                      {index + 1}
                    </span>
                    <span className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t-2 border-amber-300/30 text-center relative">
            <p className="text-amber-200 italic text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ✨ Chef's Note: This recipe has been perfected over years of love and can never be replicated ✨
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecipeCard;
