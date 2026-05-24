import { Link } from 'react-router-dom';
import CircuitPattern from '../CircuitPattern';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function PackagesPreview() {
  return (
    <section className="py-20 px-6 bg-navy text-white relative overflow-hidden">
      <CircuitPattern />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {"Start with a "}
          <span className="text-primary">Free Session</span>
        </h2>
        <p className="text-gray-400 text-sm mb-12">No commitment. Just a conversation to explore your challenges and see if we are the right fit.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-primary/40 p-10 max-w-md mx-auto bg-primary/5"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Introductory Session</p>
          <div className="text-4xl font-bold text-white mb-4">Free</div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            A complimentary session to explore your challenges and see if we are the right fit.
          </p>
          <div className="space-y-2 mb-8 text-left">
            {['45-minute video call', 'Needs & challenges assessment', 'Preliminary recommendations', 'No commitment required'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <Check size={12} className="text-primary shrink-0" />
                <span className="text-xs text-gray-300">{f}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 w-full text-xs font-semibold tracking-[0.12em] uppercase px-6 py-3 min-h-[48px] bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Book Free Session <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}