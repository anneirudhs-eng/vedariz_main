import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Globe } from 'lucide-react';

const contacts = [
  { icon: Phone, label: 'WhatsApp / Tel', value: '+31 620459361', href: 'https://wa.me/31620459361' },
  { icon: Mail, label: 'Email', value: 'a.sundararajan@vedariz.com', href: 'mailto:a.sundararajan@vedariz.com' },
  { icon: Globe, label: 'Website', value: 'www.vedariz.com', href: 'https://www.vedariz.com' },
  { icon: MapPin, label: 'Location', value: 'Enschede, The Netherlands', href: null },
];

export default function ContactPreview() {
  return (
    <section className="py-20 px-6 bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {"Let's "}
              <span className="text-primary">Collaborate</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              We are always open to new partnerships, research opportunities and innovative ideas. Start with a free introductory session.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.12em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors"
            >
              Book Introductory Session <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contacts.map(c => (
              <div key={c.label} className="border border-white/10 p-5 hover:border-primary/40 transition-colors">
                <c.icon size={18} className="text-primary mb-3" />
                <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-300 hover:text-primary transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-xs text-gray-300">{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}