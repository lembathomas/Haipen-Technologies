import React from 'react';
import { Building2, Landmark, GraduationCap, Stethoscope, Factory, Store, Truck, Hotel, Scale } from 'lucide-react';
import { motion } from 'motion/react';

export function Industries() {
  const industries = [
    { name: "SMEs", color: "blue" },
    { name: "NGOs", color: "orange" },
    { name: "Education", color: "blue" },
    { name: "Healthcare", color: "green" },
    { name: "Financial Services", color: "blue" },
    { name: "Manufacturing", color: "slate" },
    { name: "Retail", color: "slate" },
    { name: "Logistics", color: "green" },
    { name: "Hospitality", color: "orange" },
    { name: "Government", color: "slate" },
    { name: "Professional Services", color: "blue" }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100 text-blue-700';
      case 'green': return 'bg-green-100 text-green-700';
      case 'orange': return 'bg-orange-100 text-orange-700';
      case 'slate': return 'bg-slate-200 text-slate-700';
      default: return 'bg-slate-200 text-slate-700';
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 border-b-2 border-brand-primary pb-2 inline-block">
              Industries We Serve
            </h3>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              We understand that every industry has unique challenges. Our technology solutions are tailored to meet the specific compliance, operational, and growth requirements of diverse sectors.
            </p>
          </motion.div>
          
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2.5">
              {industries.map((ind, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  key={i} 
                  className={`px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs border border-transparent shadow-sm ${getColorClasses(ind.color)}`}
                >
                  {ind.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
