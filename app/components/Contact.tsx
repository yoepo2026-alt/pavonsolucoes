export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Pronto para Transformar seu Negócio?</h2>
        <p className="text-lg text-blue-100 mb-8">
          Entre em contato conosco hoje para uma consultoria gratuita e sem compromisso
        </p>
        <a href="/orcamento" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
          Solicitar Orçamento Gratuito
        </a>
      </div>
    </section>
  );
}
