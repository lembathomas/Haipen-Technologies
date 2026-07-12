import React from 'react';
import { Cloud, Zap, BrainCircuit, Code2, Server, Headset, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      title: "Cloud Solutions",
      icon: Cloud,
      color: "blue",
      items: ["Cloud migration", "AWS & Azure consulting", "Infrastructure deployment", "Backup & Recovery"]
    },
    {
      title: "Business Automation",
      icon: Zap,
      color: "green",
      items: ["Workflow automation", "HR automation", "Finance process automation", "Inventory management"]
    },
    {
      title: "AI & Data Analytics",
      icon: BrainCircuit,
      color: "orange",
      items: ["AI Assistants", "Support Chatbots", "AI Knowledge Bases", "Intelligent Processing"]
    },
    {
      title: "Software Engineering",
      icon: Code2,
      color: "slate",
      items: ["Business Websites", "Web Applications", "Mobile Applications", "Systems Integration"]
    },
    {
      title: "DevOps & Cloud Engineering",
      icon: Server,
      color: "blue",
      items: ["CI/CD Implementation", "Docker & Kubernetes", "Infrastructure as Code", "Cloud-native Solutions"]
    },
    {
      title: "Managed IT Services",
      icon: Headset,
      color: "green",
      items: ["IT Support", "Help Desk Services", "Network Administration", "Server Management"]
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      color: "orange",
      items: ["Security Assessments", "Endpoint Protection", "Access Management", "Microsoft 365 Security"]
    },
    {
      title: "Technology Outsourcing",
      icon: Users,
      color: "slate",
      items: ["DevOps Engineers", "Cloud Engineers", "Software Developers", "IT Support Engineers"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 border-blue-200 hover:bg-blue-100 text-brand-primary';
      case 'green': return 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100 text-brand-secondary';
      case 'orange': return 'bg-orange-50 border-orange-200 hover:bg-orange-100 text-brand-accent';
      case 'slate': return 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';
      default: return 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';
    }
  };

  const getBorderColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'border-brand-primary';
      case 'green': return 'border-brand-secondary';
      case 'orange': return 'border-brand-accent';
      case 'slate': return 'border-slate-500';
      default: return 'border-slate-500';
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-200"></div>
          <h3 className="text-brand-primary font-bold text-sm uppercase tracking-widest text-center">Our Services</h3>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded bg-white border-t-4 border-l border-r border-b shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${getBorderColorClasses(service.color)}`}
            >
              <div className={`w-10 h-10 rounded mb-4 flex items-center justify-center ${getColorClasses(service.color)} border-0`}>
                <service.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">{service.title}</h4>
              <ul className="space-y-2 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="text-xs font-medium text-slate-500 flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
