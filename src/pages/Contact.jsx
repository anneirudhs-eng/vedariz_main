import { useState } from 'react';
const LOGO = 'https://media.base44.com/images/public/6a0eed8cdcd637d5ae0ec8a9/258651ba8_ChatGPTImageMay22202602_04_32PM.png';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Send } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Phone, label: 'WhatsApp / Tel', value: '+31 620459361', href: 'https://wa.me/31620459361' },
  { icon: Mail, label: 'Email', value: 'a.sundararajan@vedariz.com', href: 'mailto:a.sundararajan@vedariz.com' },
  { icon: Globe, label: 'Website', value: 'www.vedariz.com', href: 'https://www.vedariz.com' },
  { icon: MapPin, label: 'Location', value: 'Enschede, The Netherlands' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', supportType: '', message: '', meeting: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Save to database
    await base44.entities.ContactSubmission.create({
      name: form.name,
      email: form.email,
      organization: form.organization,
      supportType: form.supportType,
      meeting: form.meeting,
      message: form.message,
      status: 'new',
    });
    // Also attempt to send email notification
    base44.integrations.Core.SendEmail({
      to: 'a.sundararajan@vedariz.com',
      subject: `[VEDARIZ Contact] ${form.supportType || 'Inquiry'} - ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nType of Support: ${form.supportType}\nPreferred Meeting: ${form.meeting}\n\n${form.message}`,
    }).catch(() => {});
    toast.success('Message sent. We will be in touch shortly.');
    setForm({ name: '', email: '', organization: '', supportType: '', message: '', meeting: '' });
    setSending(false);
  };

  return (
    <div>
      <div className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img src={LOGO} alt="" className="h-64 w-auto object-contain opacity-10" style={{ filter: 'url(#remove-white-logo)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {"Let's "}
            <span className="text-primary">Collaborate</span>
          </h1>
          <p className="text-gray-400 max-w-xl">Start with a free introductory session or send a message about your project.</p>
        </div>
      </div>

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[['name','Name','text',true],['email','Email','email',true],['organization','Organization','text',false],['supportType','Type of Support Needed','text',false]].map(([field, label, type, req]) => (
                <div key={field}>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                    {label}{req && ' *'}
                  </label>
                  <input
                    type={type}
                    required={req}
                    value={form[field]}
                    onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                    className="w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors min-h-[48px]"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Preferred Meeting Option</label>
              <select
                value={form.meeting}
                onChange={e => setForm(p => ({ ...p, meeting: e.target.value }))}
                className="w-full border border-white/15 bg-[hsl(222,47%,6%)] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none transition-colors min-h-[48px]"
              >
                <option value="">Select an option</option>
                <option value="Google Meet">Google Meet</option>
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Zoom">Zoom</option>
                <option value="WhatsApp Call">WhatsApp Call</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Message *</label>
              <textarea
                required rows={6}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs tracking-[0.12em] uppercase px-8 py-4 min-h-[48px] hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Message'} <Send size={14} />
            </button>
          </form>

          <div className="space-y-4">
            {contactInfo.map(c => (
              <div key={c.label} className="flex items-start gap-4 border border-white/10 p-5">
                <c.icon size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm text-gray-300">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="border border-primary/30 bg-primary/5 p-5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">Free Introductory Session</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Book a complimentary 45-minute session to discuss your project and explore how Vedariz can accelerate your deeptech journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
