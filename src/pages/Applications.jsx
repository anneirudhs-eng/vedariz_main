import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const applications = [
  {
    title: 'Biochemical Sensing',
    desc: 'Optical and photonic sensors for real-time detection of biological and chemical analytes in liquid or gas phase.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/1870a52db_generated_image.png',
  },
  {
    title: 'Lab-on-Chip Platforms',
    desc: 'Integrated microfluidic chips combining sample preparation, reaction, and optical detection in a single device.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/0caea3199_generated_image.png',
  },
  {
    title: 'Medical Diagnostics',
    desc: 'Point-of-care biosensing platforms for rapid, miniaturized clinical diagnostics using photonic and fluidic integration.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/85de6c2f8_generated_image.png',
  },
  {
    title: 'Environmental Monitoring',
    desc: 'Sensor systems for continuous monitoring of air quality, water contamination, and industrial emissions.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/1eb77a1de_generated_image.png',
  },
  {
    title: 'Integrated Optical Sensors',
    desc: 'Waveguide-based sensors on photonic platforms for refractive index, strain, and temperature measurement.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/029e08976_generated_image.png',
  },
  {
    title: 'Flow Sensing & Fluid Analysis',
    desc: 'MEMS-based flow and pressure sensors integrated with microfluidic channels for precision fluid handling.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/098305412_generated_image.png',
  },
  {
    title: 'Photonic Instrumentation',
    desc: 'Scalable photonic systems for scientific instrumentation, spectroscopy, and industrial measurement.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/e74c8dfa3_generated_image.png',
  },
  {
    title: 'Prototype to Product Translation',
    desc: 'Advisory on bridging the gap from research prototype to scalable product, from system design to supply chain.',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/b6503c47d_generated_image.png',
  },
];

export default function Applications() {
  return (
    <div>
      <div className="bg-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Real-World Impact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {'Application '}
            <span className="text-primary">Areas</span>
          </h1>
          <p className="text-gray-400 max-w-xl">
            VEDARIZ advises across domains where photonics, MEMS, microfluidics, and sensor technologies create transformative, scalable solutions.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group border border-white/10 hover:border-primary/40 transition-colors overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm text-white mb-2">{app.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.12em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
            >
              Discuss Your Application <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}