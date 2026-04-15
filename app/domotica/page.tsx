'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailedServices from '../components/DetailedServices';
import PricingPlans from '../components/PricingPlans';

const domoticaServices = [
  {
    title: 'Iluminação Inteligente',
    description: 'Controle completo de iluminação com ajustes de intensidade, cores e automatização. Crie cenários personalizados para diferentes ambientes e momentos do dia.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-yellow-600/20 to-yellow-800/20',
    border: 'border-yellow-500/30',
    bgGradient: 'from-yellow-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1520694478069-00d192474357?w=800&q=80',
    items: [
      'Lâmpadas LED inteligentes',
      'Controle por aplicativo ou voz',
      'Economia de energia programável',
    ],
    imageOrder: 'order-1 md:order-2',
  },
  {
    title: 'Controle de Temperatura',
    description: 'Sistemas de ar-condicionado e aquecimento inteligentes para manter o conforto ideal. Automatização baseada em temperatura externa e preferências pessoais.',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    gradient: 'from-orange-600/20 to-orange-800/20',
    border: 'border-orange-500/30',
    bgGradient: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80',
    items: [
      'Termostato inteligente programmável',
      'Controle remoto via aplicativo',
      'Cronograma de conforto 24/7',
    ],
    imageOrder: 'order-0',
    reverse: true,
  },
  {
    title: 'Segurança Residencial',
    description: 'Sistema completo de proteção com câmeras, sensores de movimento, fechaduras inteligentes e alarmes. Monitore sua casa em tempo real.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    gradient: 'from-red-600/20 to-red-800/20',
    border: 'border-red-500/30',
    bgGradient: 'from-red-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    items: [
      'Câmeras de segurança 4K',
      'Fechaduras biométricas',
      'Alertas em tempo real',
    ],
    imageOrder: 'order-1 md:order-2',
  },
  {
    title: 'Home Theatre e Áudio',
    description: 'Sistemas de áudio e vídeo premium integrados. Som surround de qualidade profissional e entretenimento sincronizado em toda a casa.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    gradient: 'from-purple-600/20 to-purple-800/20',
    border: 'border-purple-500/30',
    bgGradient: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1545817154-dc8e5d3b9a3b?w=800&q=80',
    items: [
      'Áudio multiroom de alta qualidade',
      'TV e projetor integrados',
      'Controle centralizado',
    ],
    imageOrder: 'order-0',
    reverse: true,
  },
  {
    title: 'Integração de Dispositivos',
    description: 'Compatibilidade com os principais padrões e plataformas de automação. Todos os seus dispositivos funcionando em harmonia através de um único hub inteligente.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-green-600/20 to-green-800/20',
    border: 'border-green-500/30',
    bgGradient: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1560077453-014dc285ef23?w=800&q=80',
    items: [
      'Compatível com Alexa e Google Home',
      'Padrão Z-Wave e Zigbee',
      'Automação por cenários',
    ],
    imageOrder: 'order-1 md:order-2',
  },
];

const domoticaPricing = [
  {
    name: 'Essencial',
    subtitle: 'Perfeito para começar',
    price: 'R$ 2.999',
    features: [
      'Iluminação inteligente',
      'Até 5 cômodos',
      'Hub central',
      'Instalação básica'
    ],
    buttonText: 'Solicitar Informações'
  },
  {
    name: 'Completo',
    subtitle: 'Solução completa',
    price: 'R$ 7.999',
    features: [
      'Iluminação + Temperatura',
      'Câmeras de segurança',
      'Fechadura inteligente',
      'Até 15 dispositivos',
      'Instalação profissional'
    ],
    badge: 'RECOMENDADO',
    buttonText: 'Começar Agora',
    isPrimary: true
  },
  {
    name: 'Premium',
    subtitle: 'Solução total',
    price: 'R$ 14.999',
    features: [
      'Todos os serviços',
      'Home Theatre integrado',
      'Sistema completo',
      'Dispositivos ilimitados',
      'Suporte 12 meses'
    ],
    buttonText: 'Fale com Especialista'
  }
];

export default function DomoticaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Navegação */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <a href="/" className="text-blue-400 hover:text-blue-300 mb-6 inline-flex items-center gap-2">
              ← Voltar
            </a>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automação
              <span className="block bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Residencial Inteligente
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              Transforme sua casa em um ambiente inteligente com soluções de automação avançadas. Controle iluminação, temperatura, segurança e entretenimento de forma integrada e intuitiva.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados Component */}
      <DetailedServices title="Soluções de Automação" services={domoticaServices} darkBG={true} />

      {/* Benefícios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Benefícios da Automação</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💡", title: "Economia de Energia", desc: "Redução de até 30% no consumo de energia com automação inteligente" },
              { icon: "🔒", title: "Segurança Aumentada", desc: "Proteção 24/7 com monitoramento e alertas em tempo real" },
              { icon: "🎯", title: "Conforto Personalizado", desc: "Cenários automáticos adaptados aos seus hábitos e preferências" },
              { icon: "📱", title: "Controle Remoto", desc: "Gerencie tudo pelo telefone de qualquer lugar do mundo" },
              { icon: "⏰", title: "Automação Temporal", desc: "Agendamentos automáticos para diferentes horários e situações" },
              { icon: "🤝", title: "Compatibilidade Total", desc: "Funciona com praticamente todos os dispositivos inteligentes" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços Component */}
      <PricingPlans title="Pacotes de Automação" plans={domoticaPricing} darkBG={true} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Pronto para sua Casa Inteligente?</h2>
          <p className="text-lg text-cyan-100 mb-8">
            Agende uma visita técnica e conheça nossas soluções
          </p>
          <a href="/orcamento" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
            Agendar Visita Técnica
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
