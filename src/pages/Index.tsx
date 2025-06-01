import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OpeningAnimation from '@/components/OpeningAnimation';
import MemoryTimeline from '@/components/MemoryTimeline';
import HeroSection from '@/components/HeroSection';
import LetterEnvelope from '@/components/LetterEnvelope';
import RecipeCard from '@/components/RecipeCard';
import BirthdayNewspaper from '@/components/BirthdayNewspaper';
import ClosingSection from '@/components/ClosingSection';
import { Heart, Star, ArrowDown } from 'lucide-react';

const Index = () => {
  const [showCard, setShowCard] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const section = document.getElementById(`section-${sectionIndex}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Opening Animation */}
      <section id="section-0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 opacity-90"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Heart className="text-pink-300 w-4 h-4 opacity-60" />
            </div>
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Star className="text-pink-200 w-3 h-3 opacity-50" />
            </div>
          ))}
        </div>

        <OpeningAnimation showCard={showCard} onStart={() => scrollToSection(1)} />
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-pink-300 w-6 h-6" />
        </div>
      </section>

      {/* Memory Timeline */}
      <section id="section-1" className="min-h-screen py-20 bg-gradient-to-br from-pink-100 to-rose-100">
        <MemoryTimeline />
      </section>

      {/* Hero Section */}
      <section id="section-2" className="min-h-screen py-20 bg-gradient-to-br from-rose-100 to-pink-200">
        <HeroSection />
      </section>

      {/* Letter Envelope */}
      <section id="section-3" className="min-h-screen py-20 bg-gradient-to-br from-pink-200 to-rose-200">
        <LetterEnvelope />
      </section>

      {/* Recipe Card */}
      <section id="section-4" className="min-h-screen py-20 bg-gradient-to-br from-rose-200 to-pink-300">
        <RecipeCard />
      </section>

      {/* Birthday Newspaper */}
      <section id="section-5" className="min-h-screen py-20 bg-gradient-to-br from-pink-300 to-rose-300">
        <BirthdayNewspaper />
      </section>

      {/* Closing Section */}
      <section id="section-6" className="min-h-screen py-20 bg-gradient-to-br from-rose-300 to-pink-400">
        <ClosingSection />
      </section>
    </div>
  );
};

export default Index;
