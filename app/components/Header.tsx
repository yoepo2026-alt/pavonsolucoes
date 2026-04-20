'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HeaderProps {
  showOnHome?: boolean;
}

export default function Header({ showOnHome = false }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900/95 dark:backdrop-blur z-50 border-b border-gray-200 dark:border-slate-700 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">PS</span>
          </div>
          <span className="text-gray-900 dark:text-white font-bold text-xl hidden sm:inline transition-colors">Pavón Soluções</span>
        </a>
        <div className="hidden md:flex gap-8">
          {showOnHome ? (
            <>
              <a href="#servicos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Serviços</a>
              <a href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Sobre</a>
              <a href="/informatica" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Informática</a>
              <a href="/domotica" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Domótica</a>
              <a href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contato</a>
              <a href="https://perfil.pavonsolucoes.com.br" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition" target="_blank">Responsável Técnico</a>
            </>
          ) : (
            <>
              <a href="/#servicos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Serviços</a>
              <a href="/#sobre" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Sobre</a>
              <a href="/informatica" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Informática</a>
              <a href="/domotica" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Domótica</a>
              <a href="/#contato" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contato</a>
            </>
          )}
        </div>
        <div className="flex gap-4 items-center">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
          <a href="/orcamento" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Solicitar Orçamento
          </a>
        </div>
      </nav>
    </header>
  );
}
