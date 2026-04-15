export default function FAQSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-6">
          {[
            {
              titulo: 'Quanto tempo leva para receber um orçamento?',
              resposta: 'Nossa equipe analisa sua solicitação e entra em contato em até 24 horas com uma proposta inicial.'
            },
            {
              titulo: 'O orçamento é realmente gratuito?',
              resposta: 'Sim! A consultoria e orçamento inicial são completamente gratuitos e sem compromisso.'
            },
            {
              titulo: 'Vocês trabalham com ambas as áreas?',
              resposta: 'Sim, oferecemos serviços completos de informática/TI e automação residencial, além de soluções integradas.'
            },
            {
              titulo: 'Como é o suporte após o projeto?',
              resposta: 'Oferecemos suporte técnico 24/7 com diferentes planos de manutenção e suporte contínuo.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition">
              <h3 className="text-lg font-bold text-white mb-3">{item.titulo}</h3>
              <p className="text-gray-300">{item.resposta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
