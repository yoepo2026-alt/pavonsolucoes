'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageCarousel from './components/ImageCarousel';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header/Navegação */}
      <Header showOnHome={true} />

      {/* Hero Section Component */}
      <HeroSection 
        title="Soluções Inteligentes para"
        subtitle="seu Negócio e Casa"
        description="Serviços profissionais de informática e automação residencial. Transforme sua casa em um ambiente inteligente e otimize a infraestrutura de TI do seu negócio."
        primaryButtonText="Começar Agora"
        secondaryButtonText="Saiba Mais"
      />

      {/* Image Carousel Component */}
      <ImageCarousel autoPlay={true} autoPlayInterval={5000} />

      {/* Serviços Section */}
      <Services />

      {/* Benefícios Section */}
      <About />

      {/* CTA Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

