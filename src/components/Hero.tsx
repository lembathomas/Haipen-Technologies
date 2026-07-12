import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white border-b border-slate-200">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-l-4 border-brand-primary pl-8 md:pl-16">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
            <span className="text-[10px] font-bold text-brand-primary tracking-widest uppercase">Your Trusted Technology Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase"
          >
            Transforming Businesses Through <span className="text-brand-primary border-b-4 border-brand-secondary pb-2">Technology.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            We provide innovative, secure, and scalable solutions that enable organizations to automate processes, optimize operations, and accelerate growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#services" className="px-8 py-4 rounded bg-brand-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-sm border border-transparent">
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded bg-white text-slate-900 border border-slate-300 text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-primary/50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
