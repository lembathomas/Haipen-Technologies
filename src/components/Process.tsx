import React from 'react';
import { Search, PenTool, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "We understand your business goals and technology challenges.",
      icon: Search,
      color: "bg-brand-secondary",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Design",
      desc: "We create tailored technology solutions aligned with your objectives.",
      icon: PenTool,
      color: "bg-brand-primary",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Deploy",
      desc: "We implement secure and scalable solutions with minimal disruption.",
      icon: Rocket,
      color: "bg-brand-accent",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Support",
      desc: "We provide continuous monitoring, optimization, and technical support.",
      icon: HeartHandshake,
      color: "bg-white",
      textColor: "text-slate-900"
    }
  ];

  const reasons = [
    "Experienced technology professionals",
    "Tailored business solutions",
    "Reliable customer support",
    "Scalable cloud expertise",
    "Secure-by-design approach",
    "Cost-effective managed services",
    "Long-term technology partnership",
    "Commitment to innovation"
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 border-b-2 border-brand-primary pb-2 inline-block">
              Why Choose Us
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-1 w-2 h-2 rounded-sm bg-brand-secondary shrink-0"></div>
                  <div>
                    <span className="text-slate-700 font-bold text-sm">{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-brand-accent text-white p-8 md:p-12 rounded border-4 border-brand-accent relative shadow-md"
          >
            <div className="relative z-10">
              <p className="text-xl md:text-3xl font-heading font-medium leading-relaxed mb-6 italic">
                "Technology should simplify business, not complicate it. Our commitment is to deliver innovative, reliable, and future-ready solutions that empower organizations to achieve more."
              </p>
              <div className="font-bold uppercase tracking-widest text-sm text-white/90">
                - Our Promise
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process */}
        <div className="bg-slate-900 rounded p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-12 shadow-xl">
          <div className="text-white font-bold text-xl uppercase tracking-widest shrink-0 border-l-4 border-brand-secondary pl-4">
            Our Process
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center w-full justify-between">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center max-w-[200px]"
                >
                  <div className={`w-12 h-12 rounded-full ${step.color} ${step.textColor} flex items-center justify-center font-bold text-lg mb-4 shadow-md z-10 border-2 ${step.id === 4 ? 'border-slate-300' : 'border-transparent'}`}>
                    0{step.id}
                  </div>
                  <span className="text-white font-bold uppercase tracking-wider mb-2">{step.title}</span>
                  <p className="text-slate-400 text-xs text-center leading-relaxed hidden md:block">{step.desc}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-slate-700 w-full max-w-[60px]"></div>
                )}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-slate-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
