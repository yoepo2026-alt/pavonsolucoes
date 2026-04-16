'use client';

import { useState, useRef, useEffect } from 'react';

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  features: string[];
  badge?: string;
  buttonText: string;
  isPrimary?: boolean;
}

interface PricingPlansProps {
  title: string;
  plans: PricingPlan[];
  darkBG?: boolean;
}

export default function PricingPlans({ title, plans, darkBG = false }: PricingPlansProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  const isCarousel = plans.length > 3;

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / plans.length;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentSlide === 0 ? plans.length - 1 : currentSlide - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide === plans.length - 1 ? 0 : currentSlide + 1;
    scrollToSlide(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // Mínimo de pixels para contar como swipe
    const difference = touchStartRef.current - touchEndRef.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe para esquerda = próximo
        handleNext();
      } else {
        // Swipe para direita = anterior
        handlePrevious();
      }
    }
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkBG ? 'bg-slate-800/50' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white text-center mb-16">{title}</h2>

        <div className={isCarousel ? 'relative' : ''}>
          <div
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={isCarousel
              ? 'flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 touch-pan-y'
              : 'grid md:grid-cols-3 gap-8'
            }
            style={isCarousel ? { scrollBehavior: 'smooth' } : undefined}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border transition flex-shrink-0 ${isCarousel ? 'w-full sm:w-96' : ''} ${plan.isPrimary
                    ? 'bg-gradient-to-br from-cyan-600 to-blue-600 border-cyan-400 shadow-xl shadow-cyan-500/20 transform md:scale-105'
                    : 'bg-slate-800/50 dark:bg-slate-800/50 border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500'
                  } ${isCarousel ? 'snap-start' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white dark:text-white mb-2">{plan.name}</h3>
                <p className={`mb-6 ${plan.isPrimary ? 'text-cyan-100' : 'text-gray-400 dark:text-gray-400'}`}>
                  {plan.subtitle}
                </p>

                <div className={`text-3xl font-bold mb-6 ${plan.isPrimary
                    ? 'text-white'
                    : 'text-cyan-400 dark:text-cyan-400'
                  }`}>
                  A partir de<br />
                  <span className={plan.isPrimary ? 'text-yellow-300' : 'text-white dark:text-white'}>
                    {plan.price}
                  </span>
                  {plan.priceLabel && (
                    <span className={`text-lg ${plan.isPrimary ? 'text-cyan-100' : 'text-gray-400 dark:text-gray-400'}`}>
                      {plan.priceLabel}
                    </span>
                  )}
                </div>

                <ul className={`space-y-3 mb-8 ${plan.isPrimary
                    ? 'text-cyan-50'
                    : 'text-gray-300 dark:text-gray-300'
                  }`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={plan.isPrimary ? 'text-yellow-300' : 'text-cyan-400 dark:text-cyan-400'}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.isPrimary
                    ? 'bg-white text-cyan-600 hover:shadow-lg'
                    : 'border-2 border-cyan-500 text-cyan-400 dark:text-cyan-400 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10'
                  }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Carrossel Controls */}
          {isCarousel && (
            <div className="mt-12 flex flex-col items-center gap-6">
              {/* Botões de navegação */}
{/*               <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  ← Anterior
                </button>
                <button
                  onClick={handleNext}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Próximo →
                </button>
              </div>
 */}
              {/* Indicadores de slide */}
              <div className="flex gap-2">
                {plans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`w-3 h-3 rounded-full transition ${currentSlide === index
                        ? 'bg-cyan-400 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    aria-label={`Ir para plano ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de slides */}
              <p className="text-gray-400 text-sm">
                {currentSlide + 1} de {plans.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
