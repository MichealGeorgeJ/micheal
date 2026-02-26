import { motion, useScroll, useTransform } from 'framer-motion';
import LandingPage1 from '@/components/pages/LandingPage';

interface ParallaxLandingProps {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

export default function ParallaxLanding({ scrollYProgress }: ParallaxLandingProps) {
  // Fade out as user scrolls — tweak [0, 0.5] to control when fade ends
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    // sticky + top:0 keeps landing pinned while you scroll past it.
    // height: 100vh is REQUIRED for sticky to work — without it the
    // element has no defined height to "stick" within.
    // overflow: visible (default) so nothing gets clipped.
    <div
      style={{
        position: 'sticky',
        top: -400,
        zIndex: 10,
        //height: '100vh',         // do not remove — sticky needs this
        backgroundColor: '#020617',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          opacity,
        }}
      >
        <LandingPage1 />
      </motion.div>
    </div>
  );
}