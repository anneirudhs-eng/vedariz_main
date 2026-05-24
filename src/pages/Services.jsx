import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [

  { title: 'Deeptech System Architecture', desc: 'Design and evaluate system-level architectures that integrate photonic, electronic, MEMS, and fluidic components into coherent, scalable solutions.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/3c9642933_generated_image.png' },
  { title: 'Photonic Integration Strategy', desc: 'Develop comprehensive integration roadmaps covering waveguide coupling, flip-chip bonding, fiber attach, and optical system alignment.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/dafa12a67_generated_image.png' },
  { title: 'MEMS and Microfluidic Advisory', desc: 'Guide the design and integration of MEMS devices and microfluidic channels for lab-on-chip, diagnostic, and sensing applications.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/b8b11b994_generated_image.png' },
  { title: 'Sensor Concept Development', desc: 'Support the conceptual and technical development of optical, photonic, and biological sensor systems from idea to prototype specification.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/3f686cac2_generated_image.png' },
  { title: 'Technology Feasibility Review', desc: 'Assess the technical feasibility of proposed deeptech solutions, including materials, fabrication routes, system constraints, and risk factors.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/bb590afa5_generated_image.png' },
  { title: 'Partner and Supplier Mapping', desc: 'Identify and qualify foundries, assembly partners, test facilities, and technology suppliers across the photonics and MEMS ecosystem.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/09be510fd_generated_image.png' },
  { title: 'Product Roadmap Creation', desc: 'Create actionable roadmaps that translate R&D milestones into market-ready product concepts with clear IP and commercial positioning.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/7c20783a4_generated_image.png' },
  { title: 'Technical Due Diligence Support', desc: 'Provide independent technical assessment of deeptech ventures for investors, acquirers, and grant-awarding bodies.', img: 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/905b67d0e_generated_image.png' },
];

export default function Services() {
  return (
    <div>
      <div className="bg-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Service Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {'Our '}
            <span className="text-primary">Services</span>
          </h1>
          <p className="text-gray-400 max-w-xl">End-to-end deeptech advisory spanning system architecture, sensor integration, supply chain, and market strategy.</p>
        </div>
      </div>

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group border border-white/10 hover:border-primary/40 transition-colors overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.12em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
            >
              Discuss Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}