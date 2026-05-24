import { Mail, Globe, MapPin } from 'lucide-react';

const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-lg font-bold mb-2">
              {"Let's "}
              <span className="text-primary">Collaborate</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are always open to new partnerships, research opportunities and innovative ideas.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:a.sundararajan@vedariz.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary shrink-0" />
              <div>
                <div className="text-[10px] tracking-widest uppercase text-gray-500">Email</div>
                <div>a.sundararajan@vedariz.com</div>
              </div>
            </a>
            <a href="https://www.vedariz.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors">
              <Globe size={16} className="text-primary shrink-0" />
              <div>
                <div className="text-[10px] tracking-widest uppercase text-gray-500">Website</div>
                <div>www.vedariz.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-primary shrink-0" />
              <div>
                <div className="text-[10px] tracking-widest uppercase text-gray-500">Location</div>
                <div>The Netherlands</div>
              </div>
            </div>
          </div>

          <div className="flex justify-start md:justify-end items-center">
            <img src={LOGO} alt="VEDARIZ DeepTech Advisors" className="h-20 w-auto object-contain" style={{ filter: 'url(#remove-white-logo)' }} />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            {`© ${new Date().getFullYear()} Vedariz DeepTech Advisors — Enschede, The Netherlands`}
            <span className="block mt-1">Chamber of Commerce (KVK): 42057129</span>
          </p>
        </div>
      </div>
    </footer>
  );
}