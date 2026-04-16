'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

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

  const [concordancia, setConcordancia] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    // Marcar quando reCAPTCHA estiver pronto
    const timer = setTimeout(() => {
      setRecaptchaReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConcordanciaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConcordancia(e.target.checked);
  };

  // Validar se todos os campos obrigatórios estão preenchidos
  const isFormValid = () => {
    return (
      formData.nome.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.telefone.trim() !== '' &&
      formData.servico.trim() !== '' &&
      formData.descricao.trim() !== '' &&
      formData.orcamento.trim() !== '' &&
      concordancia === true
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    try {
      // Obter token do reCAPTCHA
      let recaptchaToken = '';
      if (window.grecaptcha && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        try {
          recaptchaToken = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            { action: 'submit' }
          );
        } catch (recaptchaError) {
          console.warn('reCAPTCHA não disponível, continuando sem proteção:', recaptchaError);
          // Continua sem reCAPTCHA - a proteção é opcional
        }
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar orçamento');
      }

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
        setConcordancia(false);
        setEnviado(false);
      }, 3000);
    } catch (error) {
      setErro(error instanceof Error ? error.message : 'Erro ao enviar orçamento');
      console.error('Erro:', error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Script do reCAPTCHA */}
      <Script 
        src="https://www.google.com/recaptcha/api.js" 
        async 
        defer 
      />

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
              <div className="mb-8 p-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-lg animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✓</div>
                  <div>
                    <h3 className="text-green-300 font-bold text-2xl mb-3">Orçamento Enviado com Sucesso!</h3>
                    <p className="text-green-200 mb-2">
                      Obrigado, <strong>{formData.nome}</strong>!
                    </p>
                    <p className="text-green-200 mb-4">
                      Enviamos uma confirmação para <strong>{formData.email}</strong>
                    </p>
                    <ul className="text-green-200 space-y-2 text-sm">
                      <li>✓ Você receberá um email de confirmação em breve</li>
                      <li>✓ Nossa equipe analisará sua solicitação</li>
                      <li>✓ Entraremos em contato em até 24 horas com uma proposta personalizada</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {erro && (
              <div className="mb-8 p-6 bg-red-500/20 border border-red-500 rounded-lg">
                <h3 className="text-red-400 font-bold text-lg mb-2">✗ Erro ao Enviar</h3>
                <p className="text-red-300">
                  {erro}
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
                  checked={concordancia}
                  onChange={handleConcordanciaChange}
                  className="mt-1 w-4 h-4 border border-slate-600 rounded cursor-pointer"
                />
                <label className="text-gray-300 text-sm cursor-pointer">
                  Concordo em receber comunicações da Pavón Soluções sobre meu orçamento e serviços relacionados. *
                </label>
              </div>

              {/* Botão Enviar */}
              <div className="pt-6 space-y-4">
                <button
                  type="submit"
                  disabled={!isFormValid() || carregando}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition transform ${
                    isFormValid()
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 cursor-pointer'
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 text-gray-400 cursor-not-allowed opacity-50'
                  } ${carregando ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {carregando ? 'Enviando Solicitação...' : 'Enviar Solicitação de Orçamento'}
                </button>
                
                {/* Mensagem de ajuda */}
                {!isFormValid() && (
                  <p className="text-center text-sm text-amber-400">
                    Preencha todos os campos obrigatórios para enviar
                  </p>
                )}

                {/* Badge do reCAPTCHA */}
                <div className="flex justify-center text-xs text-gray-500">
                  <span>Este site é protegido por reCAPTCHA e pela </span>
                  <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:underline">Política de Privacidade</a>
                  <span> e </span>
                  <a href="https://policies.google.com/terms" className="text-cyan-400 hover:underline">Termos de Serviço</a>
                  <span> do Google</span>
                </div>
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
