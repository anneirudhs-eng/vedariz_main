import { motion } from 'framer-motion';
const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';
import { CheckCircle } from 'lucide-react';

const advisory = [
  'System-level architecture design',
  'Photonic and MEMS integration',
  'Microfluidic and sensor system design',
  'Waveguide-to-system integration',
  'Technology roadmap development',
  'Partner and supply-chain guidance',
  'Product concept development',
  'Research-to-market strategy',
];

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center">
            <img src={LOGO} alt="VEDARIZ DeepTech Advisors" className="w-72 h-auto object-contain" style={{ filter: 'url(#remove-white-logo)' }} />
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">What We Do</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Advisory Support for{' '}
              <span className="text-primary">Deeptech Innovation</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              VEDARIZ Deeptech Advisors helps startups, universities, and research institutes translate advanced technologies into scalable system architectures, product concepts, and market-ready innovation strategies.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {advisory.map(item => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle size={13} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}