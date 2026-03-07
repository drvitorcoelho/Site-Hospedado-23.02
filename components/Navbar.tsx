import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    // Active: White, Bold, Underlined (Secondary Color)
    // Inactive: Gray-300, Hover White
    return location.pathname === path
      ? "text-white font-extrabold border-b-2 border-secondary"
      : "text-gray-300 hover:text-white transition-colors font-bold";
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Previdenciário', path: '/previdenciario' },
    { name: 'Cível', path: '/civel' },
    { name: 'Criminal', path: '/criminal' },
    { name: 'Perguntas', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md flex flex-col">

      {/* Top Bar - Social Icons (Align Right) */}
      <div className="bg-primary-dark/95 text-white py-2 border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <span className="text-xs text-gray-400 font-medium tracking-wide">Siga-nos:</span>
          <div className="flex gap-4">
            <a href="https://instagram.com/vitorcoelho.adv" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary hover:scale-110 transition-all" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/advogadovitorcoelho/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary hover:scale-110 transition-all" title="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/in/joaovitoralveshonoratocoelho/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary hover:scale-110 transition-all" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.tiktok.com/@vitorcoelho_adv" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary hover:scale-110 transition-all" title="TikTok">
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar - Dark Blue Theme */}
      <div className="bg-primary-dark w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">

            {/* Logo Placeholder */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" onClick={() => setIsOpen(false)} title="Voltar ao início">
                <img
                  src="/300x150px.png"
                  alt="Vitor Coelho Advocacia"
                  className="h-24 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Justified */}
            <div className="hidden lg:flex flex-grow justify-center px-4">
              <div className="flex items-center justify-center gap-4 xl:gap-6 w-full max-w-5xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${isActive(link.path)} px-2 py-2 text-xs xl:text-sm font-heading tracking-wide uppercase text-center whitespace-nowrap`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Button (Agende Atendimento) - REDESIGNED */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href="https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Tenho%20uma%20dúvida%20e%20gostaria%20de%20conversar%20com%20você."
                target="_blank"
                rel="noreferrer"
                className="
                    relative inline-flex items-center justify-center gap-2 
                    px-8 py-3 
                    bg-[#25D366] hover:bg-[#128C7E]
                    text-white font-extrabold 
                    rounded-full 
                    shadow-lg hover:shadow-xl
                    transition-all duration-300 transform hover:scale-105
                  "
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span className="uppercase font-heading tracking-wider text-sm drop-shadow-sm">TIRE SUAS DÚVIDAS</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-primary p-2 rounded-md text-white hover:bg-secondary focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${location.pathname === link.path ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'} block px-4 py-3 rounded-md text-base font-bold uppercase font-heading text-center`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Gostaria%20de%20conversar%20sobre%20meu%20caso."
              target="_blank"
              rel="noreferrer"
              className="w-full mt-6 bg-secondary hover:bg-secondary-dark text-white block px-4 py-4 rounded-md text-lg font-bold text-center shadow-md font-heading uppercase"
            >
              Agendar Atendimento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;