export default function Footer() {
  const whatsappNumber = '5595984091138'; // +55 95 98409-1138 sem símbolos
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

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
              <li>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.729.893 5.329 2.582 7.44l-2.77 10.07a.75.75 0 00.933.927l10.07-2.77a9.869 9.869 0 007.44-2.582 9.87 9.87 0 009.798-9.746 9.87 9.87 0 00-9.798-9.797z"/>
                  </svg>
                  WhatsApp: (95) 98409-1138
                </a>
              </li>
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
