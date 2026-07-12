import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary shadow-md py-3' : 'bg-brand-primary py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shrink-0">
            <div className="relative w-8 h-8 border-l-4 border-r-4 border-brand-primary flex items-center justify-center">
              <div className="w-full h-1 bg-brand-primary"></div>
              <div className="absolute -top-1 -left-2 w-2 h-2 bg-brand-accent rounded-full"></div>
              <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-brand-secondary rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-none text-white">Haipen Technologies</h1>
            <p className="text-brand-secondary text-[10px] md:text-xs font-semibold uppercase tracking-widest mt-1 italic hidden sm:block">Innovating Business. Empowering Growth.</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-blue-100 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 rounded bg-brand-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-sm">
            Get in Touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-primary shadow-lg border-t border-blue-800 py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white font-bold uppercase text-xs tracking-wider py-3 px-4 hover:bg-blue-800 rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-blue-800">
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-3 rounded bg-brand-accent text-white font-bold uppercase text-xs tracking-wider">
                Get in Touch
             </a>
          </div>
        </div>
      )}
    </header>
  );
}
