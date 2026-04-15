'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailedServices from '../components/DetailedServices';
import PricingPlans from '../components/PricingPlans';

const informaticaServices = [
  {
    title: 'Consultoria em TI',
    description: 'Nossa equipe especializada analisa suas necessidades e propõe soluções tecnológicas estratégicas adaptadas ao seu negócio.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-blue-600/20 to-blue-800/20',
    border: 'border-blue-500/30',
    bgGradient: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    items: [
      'Diagnóstico completo de infraestrutura',
      'Planejamento estratégico de TI',
      'Avaliação de riscos e compliance',
    ],
    imageOrder: 'order-1 md:order-2',
  },
  {
    title: 'Redes e Conectividade',
    description: 'Implementamos redes robustas e de alta performance, garantindo conectividade estável e segura para sua operação.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    gradient: 'from-cyan-600/20 to-cyan-800/20',
    border: 'border-cyan-500/30',
    bgGradient: 'from-cyan-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    items: [
      'Projeto e instalação de redes',
      'Redes WiFi corporativas',
      'VPN e acesso remoto seguro',
    ],
    imageOrder: 'order-0',
    reverse: true,
  },
  {
    title: 'Manutenção de Equipamentos',
    description: 'Suporte técnico e manutenção preventiva para manter seus equipamentos funcionando com máxima eficiência.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    gradient: 'from-purple-600/20 to-purple-800/20',
    border: 'border-purple-500/30',
    bgGradient: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    items: [
      'Manutenção preventiva de PCs e servidores',
      'Limpeza e otimização de sistemas',
      'Atualização de hardware e software',
    ],
    imageOrder: 'order-1 md:order-2',
  },
  {
    title: 'Segurança Cibernética',
    description: 'Proteção avançada contra ameaças cibernéticas, garantindo a integridade e confidencialidade dos seus dados.',
    icon: 'M9 12l2 2 4-4m7.93-2.412a9.068 9.068 0 01.854 1.665c.25.663.456 1.658.456 3.887 0 3.528-.635 5.587-1.282 6.954-.318.681-.603 1.265-.859 1.848-.086.19-.145.313-.18.383a.5.5 0 01-.97-.242c.027-.324.088-.508.158-.718.25-.662.582-1.956.899-4.467 1.312-5.028-3.268-7.968-5.5-9.475M9 12L5.354 9.154',
    gradient: 'from-red-600/20 to-red-800/20',
    border: 'border-red-500/30',
    bgGradient: 'from-red-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1563986768711-b3bda5a50b94?w=800&q=80',
    items: [
      'Firewalls e sistemas de proteção',
      'Backup e recuperação de dados',
      'Análise de vulnerabilidades',
    ],
    imageOrder: 'order-0',
    reverse: true,
  },
  {
    title: 'Suporte Técnico 24/7',
    description: 'Equipe de suporte sempre disponível para resolver problemas rapidamente e manter sua operação funcionando sem interrupções.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    gradient: 'from-green-600/20 to-green-800/20',
    border: 'border-green-500/30',
    bgGradient: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    items: [
      'Atendimento 24 horas, 7 dias por semana',
      'Resposta imediata a chamados',
      'Suporte remoto e presencial',
    ],
    imageOrder: 'order-1 md:order-2',
  },
];

const informaticaPricing = [
  {
    name: 'Formatação e Reinstalação do Sistema',
    subtitle: 'Resolve erros críticos e lentidão extrema',
    price: 'R$ 80',
    priceLabel: '/equipe',
    features: [
      'Backup básico de dados (se aplicável)',
      'Formatação completa do sistema',
      'Instalação do Windows e drivers',
      'Configuração de software essencial',
      'Teste de desempenho pós-instalação'
    ],
    buttonText: 'Solicitar Informações',
    badge: 'MAIS POPULAR',
   isPrimary: true
  },
  {
    name: 'Instalação de Programas Essenciais',
    subtitle: 'PC pronto para uso imediato',
    price: 'R$ 120',
    priceLabel: '/equipe',
    features: [
      'Pacote Office (ou similar)',
      'Navegadores (Chrome, Edge)',
      'eitores PDF, compactadores, etc.',
     ],
    buttonText: 'Começar Agora',
   },
  {
    name: 'Otimização e Limpeza do Sistema',
    subtitle: 'Mais velocidade e melhor desempenho',
    price: 'R$ 70',
    priceLabel: '/equipe',
    features: [
      'Remoção de vírus e arquivos inúteis',
      'Ajuste de inicialização',
      'Melhoria de desempenho geral',
    ],
    buttonText: 'Fale com um Especialista'
  },
    {
    name: 'Configuração de Segurança',
    subtitle: 'Proteção contra vírus e invasões',
    price: 'R$ 60',
    priceLabel: '/equipe',
     features: [
      'Instalação de antivírus',
      'Atualizações do sistema',
      'Configuração básica de proteção',
    ],
    buttonText: 'Fale com um Especialista'
  }

];

export default function InformaticaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
              Serviços de
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Informática e TI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
              Soluções completas de tecnologia da informação para otimizar seus negócios, aumentar produtividade e garantir a segurança dos seus dados.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados Component */}
      <DetailedServices title="Nossas Soluções" services={informaticaServices} />

      {/* Planos e Preços Component */}
      <PricingPlans title="Planos de Serviço" plans={informaticaPricing} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Pronto para Modernizar Sua Infraestrutura de TI?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Agende uma consultoria gratuita com nossos especialistas
          </p>
          <a href="/orcamento" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
            Agendar Consultoria Gratuita
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
