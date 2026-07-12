import React from 'react';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    "Innovation", "Excellence", "Integrity", "Customer Success", 
    "Collaboration", "Accountability", "Continuous Improvement"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 border-b-2 border-brand-primary pb-2 inline-block">
              About Us
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg mt-4">
              <p>
                <strong>Haipen Technologies</strong> is dedicated to helping businesses harness the power of digital transformation. We provide innovative, secure, and scalable technology solutions that enable organizations to automate processes, optimize operations, strengthen cybersecurity, and accelerate growth.
              </p>
              <p>
                Our expertise spans cloud computing, artificial intelligence, business automation, software development, managed IT services, DevOps, and technology outsourcing. Whether supporting startups, SMEs, NGOs, or large enterprises, we become a trusted technology partner committed to delivering measurable business value.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 bg-white border-l-4 border-brand-secondary shadow-sm flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded text-brand-secondary">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-brand-secondary mb-2 tracking-wider">Vision</h4>
                <p className="text-slate-600 italic">To become Africa's most trusted technology partner, empowering businesses through innovation, automation, and digital transformation.</p>
              </div>
            </div>
            <div className="p-8 bg-white border-l-4 border-brand-accent shadow-sm flex items-start gap-4">
              <div className="p-3 bg-orange-50 rounded text-brand-accent">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-brand-accent mb-2 tracking-wider">Mission</h4>
                <p className="text-slate-600 italic">To deliver reliable, innovative, and cost-effective technology solutions that help organizations improve efficiency, embrace digital transformation, and achieve sustainable growth.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-6 border-b-2 border-brand-primary pb-2 inline-block">
            Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {values.map((value, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                key={i} 
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 shadow-sm hover:border-brand-primary transition-colors cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                <span className="font-bold text-slate-700 uppercase tracking-wider text-xs">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
