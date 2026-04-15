export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tem Dúvidas?</h2>
        <p className="text-lg text-blue-100 mb-8">
          Entre em contato através de nossos canais
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:contato@pavonsolucoes.com.br" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition">
            📧 Email
          </a>
          <a href="https://wa.me/5595984091138" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
