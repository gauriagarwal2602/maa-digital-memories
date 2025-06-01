import React from 'react';
import { Card } from "@/components/ui/card";
import img9 from "@/components/ui/images/9.jpg";

const BirthdayNewspaper = () => {
  const historicalEvents = [
    "1953 - Queen Elizabeth II crowned in Westminster Abbey",
    "1962 - First Walmart store opens in Arkansas",
    "1966 - Surveyor 1 successfully lands on the Moon",
    "1979 - Pope John Paul II begins his first pilgrimage to Poland",
    "1997 - Tony Blair becomes British Prime Minister",
    "2003 - Europe launches Mars Express spacecraft",
    "2012 - Diamond Jubilee of Queen Elizabeth II celebrated worldwide"
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          The Birthday Times
        </h2>
        <p className="text-xl text-gray-600">Special Edition - June 2nd</p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <Card className="bg-white p-8 rounded-lg shadow-2xl border-4 border-gray-800">
          {/* Newspaper Header */}
          <div className="border-b-4 border-gray-800 pb-4 mb-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-center text-gray-900 mb-2">
              THE BIRTHDAY TIMES
            </h1>
            <div className="flex justify-between items-center text-sm font-serif">
              <span>Special Edition</span>
              <span className="font-bold">June 2, 2024</span>
              <span>Price: Priceless</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 leading-tight">
              SUPERMOM TURNS TIMELESS: THE WORLD CELEBRATES JUNE 2
            </h2>
            <p className="text-lg font-serif leading-relaxed text-justify mb-4">
              In a heartwarming celebration that has captured hearts worldwide, today marks another year of grace, wisdom, and unconditional love as we honor an extraordinary woman. Known for her remarkable ability to make everyone around her feel special, her infectious smile, and her superhuman capacity for caring, she continues to inspire all who know her. From her early days of nurturing her family to becoming the cornerstone of love and strength in her community, her journey is a testament to the power of a mother's love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Sidebar - Horoscope and Weather */}
            <div>
              {/* Horoscope */}
              <div className="mb-6">
                <h3 className="text-lg font-serif font-bold border-b-2 border-gray-300 pb-2 mb-3">
                  GEMINI FORECAST ♊
                </h3>
                <p className="text-sm font-serif leading-relaxed">
                  Today brings extraordinary joy and celebration! Your natural charm and intelligence shine brighter than ever. Family connections grow stronger, and your nurturing spirit touches many hearts. Expect unexpected gifts of love and appreciation. 
                </p>
              </div>

              {/* Weather */}
              <div className="mb-6">
                <h3 className="text-lg font-serif font-bold border-b-2 border-gray-300 pb-2 mb-3">
                  WEATHER FORECAST
                </h3>
                <div className="text-sm font-serif space-y-1">
                  <p><strong>Today:</strong> 100% chance of hugs and blessings!</p>
                  <p><strong>Tomorrow:</strong> Sunny with showers of love</p>
                  <p><strong>This Week:</strong> Warm hearts all around</p>
                </div>
              </div>
            </div>

            {/* Main Content - Historical Events */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-serif font-bold border-b-2 border-gray-300 pb-2 mb-4">
                TODAY IN HISTORY - JUNE 2ND
              </h3>
              <ul className="space-y-2 text-sm font-serif">
                {historicalEvents.map((event, index) => (
                  <li key={index} className="border-b border-gray-200 pb-2">
                    <span className="font-semibold">{event}</span>
                  </li>
                ))}
              </ul>

              {/* Photo Placeholder */}
              <div className="text-center mt-6">
                <img 
                  src={img9}
                  alt="Birthday celebration"
                  className="w-full max-w-[300px] h-auto max-h-[200px] object-contain rounded mb-2 mx-auto"
                />
                <p className="text-xs font-serif italic">The woman of the hour: A lifetime of love and memories</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-gray-800 mt-8 pt-4 text-center">
            <p className="text-sm font-serif italic">
              "Special Edition: Celebrating a life filled with love, laughter, and endless giving."
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BirthdayNewspaper;
