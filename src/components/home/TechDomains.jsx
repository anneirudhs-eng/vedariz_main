import { motion } from 'framer-motion';
import { Cpu, Settings, Droplets, Activity, Layers } from 'lucide-react';

const domains = [
  { icon: Cpu, name: 'Integrated Photonics', desc: 'Advanced optical technologies and photonic integrated systems.' },
  { icon: Settings, name: 'MEMS & Sensors', desc: 'Intelligent microsystems and sensing technologies.' },
  { icon: Droplets, name: 'Microfluidics', desc: 'Miniaturized fluidic platforms for biomedical and analytical systems.' },
  { icon: Activity, name: 'Biomedical & Environmental Sensing', desc: 'Application-driven sensing solutions for health and environment.' },
  { icon: Layers, name: 'Multidisciplinary Integration', desc: 'System-level guidance for complex deep-tech implementations.' },
];

export default function TechDomains() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {"Technology "}
          <span className="text-primary">Domains</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4"
            >
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <d.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sm text-white mb-2">{d.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}