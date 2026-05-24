import { motion } from 'framer-motion';
import CircuitPattern from '../CircuitPattern';
import { Cpu, Droplets, Activity, FlaskConical, Layers, TrendingUp } from 'lucide-react';

const expertise = [
  {
    icon: Cpu,
    title: 'Photonic Integrated Circuits',
    items: ['PIC design review', 'Waveguide coupling strategies', 'Optical system architecture', 'Fabrication compatibility'],
  },
  {
    icon: Droplets,
    title: 'MEMS & Microfluidics',
    items: ['MEMS device design', 'Microfluidic channel integration', 'Actuator and sensor systems', 'Cleanroom process advisory'],
  },
  {
    icon: Activity,
    title: 'Sensor System Integration',
    items: ['Optical sensor concepts', 'Signal chain design', 'Transducer selection', 'System-level validation'],
  },
  {
    icon: FlaskConical,
    title: 'Biotech & Lab-on-Chip',
    items: ['Biosensor development', 'Lab-on-chip architecture', 'Point-of-care platforms', 'Biocompatible materials'],
  },
  {
    icon: Layers,
    title: 'Optical System Architecture',
    items: ['Free-space optics', 'Guided-wave systems', 'Photonic module design', 'Integration strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Deeptech Commercial Strategy',
    items: ['Technology-to-market roadmaps', 'IP and commercial positioning', 'Partner identification', 'Investor due diligence support'],
  },
];

export default function ExpertiseCards() {
  return (
    <section className="py-20 px-6 bg-navy text-white relative overflow-hidden">
      <CircuitPattern />
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Core Expertise</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          {'Technical '}
          <span className="text-primary">Domains</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 p-6 hover:border-primary/40 transition-colors bg-navy-light/30"
            >
              <s.icon size={28} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm text-white mb-4 leading-tight">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map(item => (
                  <li key={item} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
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