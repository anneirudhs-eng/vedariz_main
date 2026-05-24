import { useState } from 'react';
import VedarizLogo from './VedarizLogo';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/applications', label: 'Applications' },

  { to: '/contact', label: 'Contact' },
];

const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/">
          <VedarizLogo size="sm" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors border-b-2 pb-0.5 ${
                location.pathname === l.to
                  ? 'text-primary border-primary'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-primary/50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block text-xs font-semibold tracking-[0.12em] uppercase py-2 transition-colors ${
                  location.pathname === l.to ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}