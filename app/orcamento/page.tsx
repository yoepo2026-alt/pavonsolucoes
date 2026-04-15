'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function OrcamentoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: 'informatica',
    descricao: '',
    orcamento: '',
    data: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Orçamento solicitado:', formData);
    setEnviado(true);
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        servico: 'informatica',
        descricao: '',
        orcamento: '',
        data: '',
      });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Navegação */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-6 inline-flex items-center gap-2">
            ← Voltar
          </a>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Solicite um
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Orçamento Gratuito
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas com uma proposta personalizada para seu projeto.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-8 sm:p-12 rounded-xl border border-slate-700">
            {enviado && (
              <div className="mb-8 p-6 bg-green-500/20 border border-green-500 rounded-lg">
                <h3 className="text-green-400 font-bold text-lg mb-2">✓ Orçamento Enviado com Sucesso!</h3>
                <p className="text-green-300">
                  Obrigado! Nossa equipe receberá seu pedido e entrará em contato em breve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Pessoais */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Informações Pessoais</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 9999-9999"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Informações do Serviço */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Informações do Serviço</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition"
                    >
                      <option value="informatica">Informática e TI</option>
                      <option value="domotica">Automação Residencial</option>
                      <option value="ambos">Ambos os Serviços</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Orçamento Aproximado *
                    </label>
                    <select
                      name="orcamento"
                      value={formData.orcamento}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition"
                    >
                      <option value="">Selecione um intervalo</option>
                      <option value="0-1000">Até R$ 1.000</option>
                      <option value="1000-5000">R$ 1.000 - R$ 5.000</option>
                      <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                      <option value="10000-20000">R$ 10.000 - R$ 20.000</option>
                      <option value="20000-mais">Acima de R$ 20.000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Data Desejada para o Projeto
                    </label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Descrição do Projeto */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Detalhes do Projeto</h3>
                <label className="block text-gray-300 font-semibold mb-2">
                  Descrição do Projeto *
                </label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  required
                  placeholder="Descreva em detalhes o que você precisa..."
                  rows={6}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition resize-none"
                />
                <p className="text-gray-400 text-sm mt-2">
                  Quanto mais detalhes, mais precisa será nossa proposta.
                </p>
              </div>

              {/* Checkbox de Concordância */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 border border-slate-600 rounded"
                />
                <label className="text-gray-300 text-sm">
                  Concordo em receber comunicações da Pavón Soluções sobre meu orçamento e serviços relacionados. *
                </label>
              </div>

              {/* Botão Enviar */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
                >
                  Enviar Solicitação de Orçamento
                </button>
              </div>

              <p className="text-gray-400 text-sm text-center">
                * Campos obrigatórios. Respeitamos sua privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">O Que Acontece Depois?</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { numero: '1', titulo: 'Recebimento', desc: 'Recebemos sua solicitação' },
              { numero: '2', titulo: 'Análise', desc: 'Nossa equipe analisa seu projeto' },
              { numero: '3', titulo: 'Contato', desc: 'Entramos em contato para detalhes' },
              { numero: '4', titulo: 'Orçamento', desc: 'Enviamos proposta personalizada' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.numero}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.titulo}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
