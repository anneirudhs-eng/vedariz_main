import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/b330b7837_image.png';

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {"Anneirudh "}
              <span className="text-primary">Sundararajan</span>
            </h2>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Founder and Principal Advisor — Enschede, The Netherlands
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {"Based in Enschede, The Netherlands, Anneirudh brings deep expertise in photonics packaging, PIC assembly, flip-chip bonding, MEMS microfluidics, sensor systems, and EU/industry R&D projects."}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-8">
              {"With years of hands-on experience across the photonics value chain, he bridges the gap between research-grade innovation and production-ready systems for clients worldwide."}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
              Read Full Bio <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img
              src={FOUNDER_IMG}
              alt="Anneirudh Sundararajan"
              className="w-full h-80 object-cover object-top border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}