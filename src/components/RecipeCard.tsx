
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
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          Recipe for the Perfect Maa
        </h2>
        <p className="text-xl text-gray-600">The secret ingredients that make you amazing</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-3xl shadow-xl border-4 border-amber-200">
          {/* Recipe Header */}
          <div className="text-center mb-8 border-b-2 border-amber-300 pb-6">
            <h3 className="text-3xl font-script text-amber-900 mb-2">Maa's Special Recipe</h3>
            <p className="text-amber-700 italic">Serves: One Perfect Family • Prep Time: A Lifetime of Love</p>
            <div className="flex justify-center mt-4">
              <Heart className="text-red-500 w-8 h-8" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                <span>🥄</span> Ingredients
              </h4>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-800">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span className="font-medium">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                <span>📝</span> Instructions
              </h4>
              <ol className="space-y-3">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-800">
                    <span className="bg-amber-300 text-amber-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-medium">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t-2 border-amber-300 text-center">
            <p className="text-amber-800 italic text-lg">
              ✨ Chef's Note: This recipe has been perfected over years of love and can never be replicated ✨
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecipeCard;
