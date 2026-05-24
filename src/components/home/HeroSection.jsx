import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CircuitPattern from '../CircuitPattern';
import HeroSlideshow from './HeroSlideshow';

const HERO_IMG = 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=900&q=80';

export default function HeroSection() {
  return (
    <section className="bg-navy text-white min-h-[85vh] flex items-center overflow-hidden relative">
      <CircuitPattern className="opacity-[0.07]" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Vedariz Deeptech Advisors</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Deeptech Advisory for{' '}
            <span className="text-primary">Photonics, MEMS</span>{' '}
            &amp; Sensor Integration
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-lg">
            Helping startups, universities, and research institutes translate advanced technologies into scalable system architectures, product concepts, and market-ready innovation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.15em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors animate-glow"
            >
              Book Introductory Session
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-primary/60 text-primary font-semibold text-xs tracking-[0.15em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/10 transition-colors"
            >
              View Services <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <HeroSlideshow />
        </motion.div>
      </div>
    </section>
  );
}