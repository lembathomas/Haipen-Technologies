import React from 'react';
import { Phone, Mail, Globe, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="bg-slate-100 text-slate-900 py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 border-b-2 border-brand-primary pb-2 inline-block">
              Get in Touch
            </h3>
            <h4 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight tracking-tight mt-4">
              Ready to transform your business?
            </h4>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Let's discuss how our technology solutions can help you streamline operations, improve security, and accelerate growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center group-hover:bg-brand-primary transition-colors border border-slate-200 group-hover:border-brand-primary shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Us</div>
                  <a href="tel:0720447685" className="text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors">0720 447 685</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center group-hover:bg-brand-primary transition-colors border border-slate-200 group-hover:border-brand-primary shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                  <a href="mailto:info@haipen.com" className="text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors">info@haipen.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center group-hover:bg-brand-primary transition-colors border border-slate-200 group-hover:border-brand-primary shrink-0">
                  <Globe className="w-5 h-5 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Visit Website</div>
                  <a href="https://www.haipen.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors">www.haipen.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center group-hover:bg-brand-primary transition-colors border border-slate-200 group-hover:border-brand-primary shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</div>
                  <span className="text-sm font-bold text-slate-900 block">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white border-t-4 border-l border-r border-b border-t-brand-primary border-slate-200 rounded p-8 md:p-10 shadow-sm relative"
          >
            <h4 className="text-xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-wider">Send us a message</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-primary hover:bg-blue-800 text-white font-bold uppercase tracking-wider text-sm py-4 rounded transition-colors mt-4 flex justify-center items-center gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-brand-primary font-heading font-bold text-xl leading-none border border-slate-200">
              <div className="relative w-6 h-6 border-l-2 border-r-2 border-brand-primary flex items-center justify-center">
                <div className="w-full h-0.5 bg-brand-primary"></div>
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-brand-secondary rounded-full"></div>
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-slate-900 tracking-tight uppercase">Haipen Technologies</span>
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Haipen Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
