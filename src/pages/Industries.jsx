import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Telecommunications', desc: 'Photonic components and packaging for optical networking, data centers, and 5G infrastructure.', code: 'TEL' },
  { name: 'Biomedical & Life Sciences', desc: 'Lab-on-chip devices, biosensors, point-of-care diagnostics, and medical imaging systems.', code: 'BIO' },
  { name: 'Automotive & LiDAR', desc: 'MEMS mirrors, photonic sensors, and packaging for autonomous driving and ADAS.', code: 'AUT' },
  { name: 'Aerospace & Defense', desc: 'Ruggedized photonic systems, inertial sensors, and hermetically sealed packages for extreme environments.', code: 'AER' },
  { name: 'Industrial Sensing', desc: 'Environmental monitoring, process control, and structural health monitoring using photonic and MEMS sensors.', code: 'IND' },
  { name: 'Consumer Electronics', desc: 'Miniaturized photonic and sensor modules for wearables, AR/VR, and smart devices.', code: 'CON' },
  { name: 'Energy & Environment', desc: 'Solar cell monitoring, gas sensing, and photonic solutions for clean energy applications.', code: 'ENR' },
  { name: 'Research & Academia', desc: 'Supporting universities and institutes in translating lab results into fundable, scalable prototypes.', code: 'R&D' },
];

export default function Industries() {
  return (
    <div>
      <div className="bg-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Sector Coverage</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {"Industries We "}
            <span className="text-primary">Serve</span>
          </h1>
          <p className="text-gray-400 max-w-xl">Vedariz advises across sectors where photonics, MEMS, and advanced sensor technologies create transformative value.</p>
        </div>
      </div>

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.code}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex gap-5 border border-white/10 p-6 hover:border-primary/40 transition-colors"
              >
                <span className="text-2xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors shrink-0 w-12">{ind.code}</span>
                <div>
                  <h3 className="font-bold text-sm text-white mb-2">{ind.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.12em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors">
              Explore Collaboration <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}