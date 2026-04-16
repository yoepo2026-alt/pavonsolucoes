'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageCarouselProps {
  images?: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  darkBG?: boolean;
}

const defaultImages: CarouselImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80',
    alt: 'Desenvolvimento de Software',
    title: 'Desenvolvimento de Software'
  },
  {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80',
    alt: 'Serviços de Cloud Computing',
    title: 'Serviços de Cloud Computing'
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80',
    alt: 'Automação Residencial',
    title: 'Automação Residencial'
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80',
    alt: 'Segurança em Rede',
    title: 'Segurança em Rede'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80',
    alt: 'Consultoria Tecnológica',
    title: 'Consultoria Tecnológica'
  }
];

export default function ImageCarousel({
  images = defaultImages,
  autoPlay = true,
  autoPlayInterval = 5000,
  darkBG = false
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const difference = touchStartRef.current - touchEndRef.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe para esquerda = próximo
        goToNext();
      } else {
        // Swipe para direita = anterior
        goToPrevious();
      }
    }
  };

  return (
    <section className={`py-12 md:py-16 ${darkBG ? 'bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900' : 'bg-white dark:bg-slate-800'} transition-colors`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Carrossel Container */}
        <div className="relative group">
          {/* Imagem Principal */}
          <div 
            className="relative w-full h-96 md:h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-700"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay com título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Setas de Navegação - Apenas em Desktop/Hover */}
          <button
            onClick={goToPrevious}
            className="hidden md:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/30 hover:bg-cyan-500/50 text-white p-2 md:p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="hidden md:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/30 hover:bg-cyan-500/50 text-white p-2 md:p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicador de Swipe no Mobile */}
{/*           <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/30 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            ← Deslize →
          </div>
 */}
          {/* Indicadores (Dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500 w-8'
                    : 'bg-slate-400 dark:bg-slate-600 w-3 hover:bg-slate-500 dark:hover:bg-slate-500'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-4 text-slate-600 dark:text-slate-400 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Auto-play Toggle */}
 {/*        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg text-sm font-medium transition-colors border border-cyan-500/30 dark:border-cyan-500/20"
          >
            {isAutoPlay ? '⏸ Pausar' : '▶ Reproduzir'}
          </button>
        </div>
 */}    
   </div>
    </section>
  );
}
