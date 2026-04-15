export default function Services() {
  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Nossos Serviços</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informática Card */}
          <a href="/informatica" className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition hover:shadow-xl hover:shadow-blue-500/20 block">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19h6m-6 0a9 9 0 01-9-9V5a9 9 0 0118 0v9a9 9 0 01-9 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Informática e Redes</h3>
            <ul className="text-gray-300 space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Consultoria em TI
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Instalação e Suporte de Redes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Manutenção de Equipamentos
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Segurança Cibernética
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Suporte Técnico 24/7
              </li>
            </ul>
            <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition text-center">
              Conheça Mais →
            </div>
          </a>

          {/* Domótica Card */}
          <a href="/domotica" className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition hover:shadow-xl hover:shadow-cyan-500/20 block">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1V9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Automação Residencial</h3>
            <ul className="text-gray-300 space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Sistemas de Iluminação Inteligente
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Controle de Temperatura
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Segurança Residencial Avançada
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Home Theatre e Áudio
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span> Integração de Dispositivos
              </li>
            </ul>
            <div className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition text-center">
              Conheça Mais →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
