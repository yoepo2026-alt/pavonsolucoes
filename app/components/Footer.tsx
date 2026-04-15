export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PS</span>
              </div>
              <span className="text-white font-bold">Pavón Soluções</span>
            </div>
            <p className="text-gray-400">Soluções de informática e automação residencial de qualidade.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="text-gray-400 space-y-2">
              <li>📞 (95) 98409-1138</li>
              <li>📧 contato@pavonsolucoes.com.br</li>
              <li>📍 Caxias do Sul, RS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white transition">Início</a></li>
              <li><a href="/informatica" className="hover:text-white transition">Informática</a></li>
              <li><a href="/domotica" className="hover:text-white transition">Domótica</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Pavón Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
