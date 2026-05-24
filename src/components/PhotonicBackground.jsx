import { useEffect, useRef } from 'react';

export default function PhotonicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Waveguide paths
    const waveguides = [
      { y: 0.18, x1: 0, x2: 1 },
      { y: 0.38, x1: 0, x2: 1 },
      { y: 0.58, x1: 0, x2: 1 },
      { y: 0.78, x1: 0, x2: 1 },
    ];

    // Vertical connecting waveguides
    const vWaveguides = [
      { x: 0.22, y1: 0.18, y2: 0.38 },
      { x: 0.55, y1: 0.38, y2: 0.58 },
      { x: 0.78, y1: 0.18, y2: 0.58 },
      { x: 0.38, y1: 0.58, y2: 0.78 },
    ];

    // Ring resonators [cx, cy, r]
    const rings = [
      { cx: 0.22, cy: 0.28, r: 0.042 },
      { cx: 0.55, cy: 0.48, r: 0.038 },
      { cx: 0.78, cy: 0.38, r: 0.045 },
      { cx: 0.38, cy: 0.68, r: 0.036 },
    ];

    // Photons
    const photons = [
      { wg: 0, pos: 0.0, speed: 0.0018, color: '#c48e2b' },
      { wg: 1, pos: 0.3, speed: 0.0014, color: '#c48e2b' },
      { wg: 2, pos: 0.6, speed: 0.0022, color: '#c48e2b' },
      { wg: 3, pos: 0.1, speed: 0.0016, color: '#e0b050' },
      { wg: 0, pos: 0.7, speed: 0.0012, color: '#e0b050' },
    ];

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = 'rgba(196,142,43,0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Horizontal waveguides
      waveguides.forEach(wg => {
        const y = wg.y * H;
        const grad = ctx.createLinearGradient(0, y, W, y);
        grad.addColorStop(0, 'rgba(196,142,43,0.0)');
        grad.addColorStop(0.3, 'rgba(196,142,43,0.12)');
        grad.addColorStop(0.7, 'rgba(196,142,43,0.12)');
        grad.addColorStop(1, 'rgba(196,142,43,0.0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(wg.x1 * W, y);
        ctx.lineTo(wg.x2 * W, y);
        ctx.stroke();
      });

      // Vertical waveguides
      vWaveguides.forEach(vwg => {
        const x = vwg.x * W;
        const grad = ctx.createLinearGradient(x, vwg.y1 * H, x, vwg.y2 * H);
        grad.addColorStop(0, 'rgba(196,142,43,0.0)');
        grad.addColorStop(0.5, 'rgba(196,142,43,0.10)');
        grad.addColorStop(1, 'rgba(196,142,43,0.0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, vwg.y1 * H);
        ctx.lineTo(x, vwg.y2 * H);
        ctx.stroke();
      });

      // Ring resonators
      rings.forEach(ring => {
        const cx = ring.cx * W;
        const cy = ring.cy * H;
        const r = ring.r * Math.min(W, H);
        // Glow
        const glow = ctx.createRadialGradient(cx, cy, r * 0.7, cx, cy, r * 1.4);
        glow.addColorStop(0, 'rgba(196,142,43,0.08)');
        glow.addColorStop(1, 'rgba(196,142,43,0.0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 1.4, 0, Math.PI * 2);
        ctx.fill();
        // Ring
        ctx.strokeStyle = 'rgba(196,142,43,0.20)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        // Rotating photon on ring
        const angle = t * 0.8 + ring.cx * 10;
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        const pglow = ctx.createRadialGradient(px, py, 0, px, py, 5);
        pglow.addColorStop(0, 'rgba(224,176,80,0.9)');
        pglow.addColorStop(1, 'rgba(224,176,80,0.0)');
        ctx.fillStyle = pglow;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Photons on waveguides
      photons.forEach(p => {
        p.pos += p.speed;
        if (p.pos > 1.05) p.pos = -0.05;
        const wg = waveguides[p.wg];
        const x = p.pos * canvas.width;
        const y = wg.y * H;
        // Trail
        const trail = ctx.createLinearGradient(x - 40, y, x, y);
        trail.addColorStop(0, 'rgba(196,142,43,0.0)');
        trail.addColorStop(1, 'rgba(196,142,43,0.35)');
        ctx.strokeStyle = trail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 40, y);
        ctx.lineTo(x, y);
        ctx.stroke();
        // Head glow
        const pglow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        pglow.addColorStop(0, 'rgba(224,176,80,1.0)');
        pglow.addColorStop(0.4, 'rgba(196,142,43,0.5)');
        pglow.addColorStop(1, 'rgba(196,142,43,0.0)');
        ctx.fillStyle = pglow;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mach-Zehnder interferometer hint between wg 0 and 1
      const mzX1 = 0.44 * W, mzX2 = 0.66 * W;
      const mzY1 = waveguides[0].y * H, mzY2 = waveguides[1].y * H;
      const mzYm = (mzY1 + mzY2) / 2;
      ctx.strokeStyle = 'rgba(196,142,43,0.10)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(mzX1, mzYm);
      ctx.bezierCurveTo(mzX1 + 30, mzYm, mzX1 + 30, mzY1, mzX1 + 60, mzY1);
      ctx.lineTo(mzX2 - 60, mzY1);
      ctx.bezierCurveTo(mzX2 - 30, mzY1, mzX2 - 30, mzYm, mzX2, mzYm);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mzX1, mzYm);
      ctx.bezierCurveTo(mzX1 + 30, mzYm, mzX1 + 30, mzY2, mzX1 + 60, mzY2);
      ctx.lineTo(mzX2 - 60, mzY2);
      ctx.bezierCurveTo(mzX2 - 30, mzY2, mzX2 - 30, mzYm, mzX2, mzYm);
      ctx.stroke();

      t += 0.016;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.85 }}
    />
  );
}