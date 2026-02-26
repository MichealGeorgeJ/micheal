import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import About from '@/components/pages/About';

interface ParallaxAboutProps {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

export default function ParallaxAbout({ scrollYProgress }: ParallaxAboutProps) {
  // ── HOW TO TUNE ─────────────────────────────────────────────────────────
  //
  // Want About to appear EARLIER (more overlap with landing)?
  //   → Lower the start values:  [0.2, 0.5]  instead of [0.3, 0.6]
  //
  // Want About to appear LATER (landing fully gone first)?
  //   → Raise the start values:  [0.5, 0.8]
  //
  // Want the zoom MORE dramatic?
  //   → Lower the scale start:   [0.4, 1]  instead of [0.7, 1]
  //
  // Want it FASTER?
  //   → Narrow the range:        [0.3, 0.5]  (same animation, less scroll)
  // ────────────────────────────────────────────────────────────────────────

  const rawScale   = useTransform(scrollYProgress, [0.3, 0.6], [0.7, 1]);
  const rawY       = useTransform(scrollYProgress, [0.3, 0.6], ['10%', '0%']);
  const rawOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);

  const scale = useSpring(rawScale, { stiffness: 120, damping: 28 });
  const y     = useSpring(rawY,     { stiffness: 120, damping: 28 });

  return (
    <motion.div
      style={{
        position: 'relative',
        zIndex: 20,

        // ── KEY VALUE: negative margin pulls About UP into the viewport
        // while landing is still visible (sticky + fading).
        //
        // -30vh  → About peeks in when 30% of landing is still showing
        // -50vh  → About peeks in at the halfway point of landing fade
        // -70vh  → About almost fully overlaps landing
        //
        // Pair this with the scrollYProgress ranges above:
        // if About starts at [0.3, ...] scroll, set margin around -30vh to -40vh
        marginTop: '-40vh',

        transformOrigin: 'center bottom',
        scale,
        y,
        opacity: rawOpacity,
      }}
    >
      <About />
    </motion.div>
  );
}