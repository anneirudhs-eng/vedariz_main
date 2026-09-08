import { useState } from 'react';
import VedarizLogo from '@/components/VedarizLogo';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Logo */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <VedarizLogo size="lg" />
          </div>
        </div>

        {/* Main Text */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-wide">
            FlowCore Technologies
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="flex-1 h-p bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
          We're building something extraordinary. Stay tuned for updates on cutting-edge technology and innovative solutions.
        </p>

        {/* Email Subscription */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-slate-700 border border-cyan-500/30 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>

          {subscribed && (
            <p className="text-green-400 text-sm font-semibold animate-pulse">
              ✓ Thank you! We'll keep you updated.
            </p>
          )}
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-slate-400 text-sm animate-fade-in" style={{ animationDelay: '1s' }}>
          <p>© 2025 VEDARIZ FlowCore Technologies. All rights reserved.</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
