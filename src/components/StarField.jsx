import { useMemo } from 'react';

export default function StarField() {
  const stars = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() < 0.3 ? 2 : 1,
    duration: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    opacity: 0.3 + Math.random() * 0.5,
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      {/* Gold light flare top-right like logo */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,142,43,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}