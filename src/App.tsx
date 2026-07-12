import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-primary/20 selection:text-brand-primary text-slate-800">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
