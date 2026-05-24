export default function CircuitPattern({ className = '' }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Horizontal traces */}
      <line x1="0" y1="80" x2="800" y2="80" stroke="#C48E2B" strokeWidth="1" />
      <line x1="0" y1="200" x2="800" y2="200" stroke="#C48E2B" strokeWidth="0.5" />
      <line x1="0" y1="340" x2="800" y2="340" stroke="#C48E2B" strokeWidth="1" />
      <line x1="0" y1="460" x2="800" y2="460" stroke="#C48E2B" strokeWidth="0.5" />
      <line x1="0" y1="540" x2="800" y2="540" stroke="#C48E2B" strokeWidth="1" />

      {/* Vertical traces */}
      <line x1="100" y1="0" x2="100" y2="600" stroke="#C48E2B" strokeWidth="0.5" />
      <line x1="260" y1="0" x2="260" y2="600" stroke="#C48E2B" strokeWidth="1" />
      <line x1="420" y1="0" x2="420" y2="600" stroke="#C48E2B" strokeWidth="0.5" />
      <line x1="580" y1="0" x2="580" y2="600" stroke="#C48E2B" strokeWidth="1" />
      <line x1="720" y1="0" x2="720" y2="600" stroke="#C48E2B" strokeWidth="0.5" />

      {/* Junction nodes */}
      <circle cx="100" cy="80" r="3" fill="#C48E2B" />
      <circle cx="260" cy="200" r="4" fill="#C48E2B" />
      <circle cx="420" cy="340" r="3" fill="#C48E2B" />
      <circle cx="580" cy="80" r="4" fill="#C48E2B" />
      <circle cx="720" cy="460" r="3" fill="#C48E2B" />
      <circle cx="260" cy="540" r="3" fill="#C48E2B" />
      <circle cx="100" cy="340" r="4" fill="#C48E2B" />
      <circle cx="720" cy="200" r="3" fill="#C48E2B" />

      {/* IC chip outline */}
      <rect x="310" y="120" width="120" height="80" fill="none" stroke="#C48E2B" strokeWidth="1.5" />
      <line x1="310" y1="140" x2="290" y2="140" stroke="#C48E2B" strokeWidth="1" />
      <line x1="310" y1="160" x2="290" y2="160" stroke="#C48E2B" strokeWidth="1" />
      <line x1="310" y1="180" x2="290" y2="180" stroke="#C48E2B" strokeWidth="1" />
      <line x1="430" y1="140" x2="450" y2="140" stroke="#C48E2B" strokeWidth="1" />
      <line x1="430" y1="160" x2="450" y2="160" stroke="#C48E2B" strokeWidth="1" />
      <line x1="430" y1="180" x2="450" y2="180" stroke="#C48E2B" strokeWidth="1" />
      <text x="345" y="167" fill="#C48E2B" fontSize="10" fontFamily="monospace">PIC</text>

      {/* Waveguide path */}
      <path d="M 0 420 Q 150 380 300 420 Q 450 460 600 420 Q 700 400 800 420"
        fill="none" stroke="#C48E2B" strokeWidth="1.5" strokeDasharray="6,4" />

      {/* Sensor ring resonator */}
      <circle cx="650" cy="300" r="30" fill="none" stroke="#C48E2B" strokeWidth="1" />
      <circle cx="650" cy="300" r="20" fill="none" stroke="#C48E2B" strokeWidth="0.5" />
      <line x1="600" y1="300" x2="620" y2="300" stroke="#C48E2B" strokeWidth="1" />
      <line x1="680" y1="300" x2="700" y2="300" stroke="#C48E2B" strokeWidth="1" />

      {/* Small nodes */}
      <circle cx="580" cy="340" r="2" fill="#C48E2B" />
      <circle cx="420" cy="80" r="2" fill="#C48E2B" />
      <circle cx="260" cy="340" r="2" fill="#C48E2B" />
    </svg>
  );
}