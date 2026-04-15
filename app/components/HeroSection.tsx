'use client';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText = 'Começar Agora',
  secondaryButtonText = 'Saiba Mais',
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6 leading-tight transition-colors">
            {title}
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onPrimaryClick}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
            >
              {primaryButtonText}
            </button>
            <button 
              onClick={onSecondaryClick}
              className="border-2 border-cyan-400 text-cyan-400 dark:text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 dark:hover:bg-cyan-400/10 transition"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
