export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Por que Escolher Pavón Soluções?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Rápido e Eficiente", desc: "Soluções implementadas com agilidade e qualidade garantida" },
            { icon: "🛡️", title: "Segurança em Primeiro", desc: "Proteção total de seus dados e sistema com tecnologias atualizadas" },
            { icon: "👥", title: "Suporte Dedicado", desc: "Equipe especializada disponível para ajudar quando você precisar" },
            { icon: "💰", title: "Preços Competitivos", desc: "Orçamentos transparentes e sem surpresas" },
            { icon: "🔧", title: "Experiência Comprovada", desc: "Anos de experiência em serviços de TI e automação" },
            { icon: "🌟", title: "Soluções Personalizadas", desc: "Cada projeto adaptado às suas necessidades específicas" }
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
  );
}
