import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    label: 'Introductory Session',
    price: 'Free',
    sub: 'No commitment required',
    features: [
      '30-minute discovery call',
      'Understand your technical challenge',
      'Identify advisory directions',
      'No commitment required',
    ],
    cta: 'Book Free Session',
    highlight: false,
  },
  {
    label: 'Single Expert Session',
    price: '€260',
    sub: '90-minute focused session',
    features: [
      '90-minute technical or strategic session',
      'Focused on one specific challenge',
      'Suitable for one-off problem solving',
      'Written summary provided',
    ],
    cta: 'Book Session',
    highlight: true,
  },
  {
    label: 'Monthly Advisory Subscription',
    price: '€1,200',
    sub: 'per month · cancel anytime after month 1',
    features: [
      '3 sessions of 90 minutes per month',
      'Minimum subscription: 1 month',
      'Cancel anytime after the first month',
      'Suitable for startups, research groups',
      'Long-term technology development support',
    ],
    cta: 'Start Subscription',
    highlight: false,
  },
];

export default function Packages() {
  return (
    <div>
      <div className="bg-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Consultancy Packages</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {'Transparent '}
            <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            From a free introductory call to ongoing monthly advisory — choose the format that fits your project stage.
          </p>
        </div>
      </div>

      <div className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-primary bg-primary/5'
                  : 'border-white/15 bg-white/3'
              }`}
            >
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3">{plan.label}</p>
              <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
              <p className="text-xs text-gray-400 mb-6">{plan.sub}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={13} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 w-full text-xs font-semibold tracking-[0.12em] uppercase px-6 py-3 min-h-[48px] transition-colors ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'border border-primary/60 text-primary hover:bg-primary/10'
                }`}
              >
                {plan.cta} <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}