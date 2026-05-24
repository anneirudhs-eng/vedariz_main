import { motion } from 'framer-motion';
const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';

const FOUNDER_IMG = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/b330b7837_image.png';

const milestones = [
  'Photonic Integrated Circuit (PIC) assembly and system integration',
  'Flip-chip bonding and die attach processes',
  'MEMS microfluidics design and fabrication',
  'Optical sensor systems for biotech applications',
  'EU-funded research projects (Horizon, EIC)',
  'Industry partnerships across the photonics value chain',
  'Waveguide-to-system integration and alignment',
  'Supply chain optimization for deeptech startups',
];

const bio = [
  'Anneirudh Sundararajan is a deeptech professional with experience in photonic integrated circuits, MEMS, microfluidics, optical sensors, flip-chip integration, system architecture, and multidisciplinary R&D projects. Through VEDARIZ, he advises startups, universities, and research institutes on how to connect advanced technologies with scalable applications, suitable partners, and realistic product development strategies.',
  'His career spans EU and industry research projects, working alongside universities, research institutes, and commercial organizations to develop photonic integration strategies, system architectures, and go-to-market roadmaps for advanced technology products.',
  'VEDARIZ provides a rare combination of deep technical knowledge and strategic business thinking, helping clients not just build better devices, but build better businesses around those devices.',
];

export default function About() {
  return (
    <div>
      <div className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img src={LOGO} alt="" className="h-64 w-auto object-contain opacity-10" style={{ filter: 'url(#remove-white-logo)' }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">About VEDARIZ</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering Insight,{' '}
            <span className="text-primary">Deep Expertise</span>
          </h1>
          <p className="text-gray-400 text-base">Multidisciplinary. Research-driven. Impact-focused.</p>
        </div>
      </div>

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img
                  src={FOUNDER_IMG}
                  alt="Anneirudh Sundararajan - Founder, VEDARIZ Deeptech Advisors"
                  className="w-full max-w-sm h-80 object-cover object-top border border-white/10"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Anneirudh Sundararajan</h2>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                Founder and Principal Advisor — Enschede, The Netherlands
              </p>
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                {bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="border border-white/10 p-6 h-fit bg-white/3">
              <div className="space-y-3">
                {[
                  ['Location', 'Enschede, NL'],
                  ['Expertise', 'PIC, MEMS, Integration'],
                  ['Sectors', 'Biotech, Sensors, Telecom'],
                  ['Focus', 'EU and Industry R&D'],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-white/10 pb-3">
                    <div className="text-[10px] tracking-widest uppercase text-gray-500">{k}</div>
                    <div className="text-sm text-white font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">
            {'Technical '}
            <span className="text-primary">Milestones</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 border border-white/10"
              >
                <span className="text-primary font-bold text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-gray-300">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}