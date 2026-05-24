import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    label: 'Photonic Integrated Circuits',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/43ab9e6d3_VIT_Photonic.png',
  },
  {
    label: 'MEMS & Microsystems',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/c7b90ebc9_VIT_MEMS.png',
  },
  {
    label: 'Microfluidics & Biotech',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/da950edde_VIT_Optofluidic.png',
  },
  {
    label: 'Optical Fiber & Sensing',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/84d49f5b3_generated_image.png',
  },
  {
    label: 'System Integration',
    img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/3d0a5bbcf_generated_image.png',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].img}
          alt={slides[current].label}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.82, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Domain label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
          >
            {slides[current].label}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? 'bg-primary w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}