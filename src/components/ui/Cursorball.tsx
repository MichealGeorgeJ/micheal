import { useEffect, useRef } from 'react';

export default function CursorBall() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot snaps to cursor instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      // Ball lerps smoothly behind cursor
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* <style>{`*, *::before, *::after { cursor: none !important; }`}</style> */}

      {/* Small dot — snaps to exact cursor position */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform -translate-x-[5px] -translate-y-[5px]"
      >
        <div className="w-2 h-2 rounded-full bg-white mix-blend-difference" />
      </div>

      {/* Larger ball — trails behind with lerp */}
      <div
        ref={ballRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform -translate-x-5 -translate-y-5"
      >
        <div
          className="w-7 h-7 rounded-full border-2 border-white mix-blend-difference"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15), rgba(99,102,241,0.25))',
            boxShadow: '0 0 10px 2px rgba(99,102,241,0.3), inset 0 0 6px rgba(255,255,255,0.1)',
            backdropFilter: 'blur(2px)',
          }}
        />
      </div>
    </>
  );
}