// components/pages/About.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Different parallax speeds
  const bgY       = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const photoY    = useTransform(scrollYProgress, [0, 1], [-60, 180]);
  const contentY  = useTransform(scrollYProgress, [0, 0.7], [0, -140]);
  const blob1Y    = useTransform(scrollYProgress, [0, 1], [0, 340]);
  const blob2Y    = useTransform(scrollYProgress, [0, 1], [0, -260]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div ref={ref} className="relative min-h-screen bg-slate-950 overflow-hidden pb-24">
      {/* Background layers with different speeds */}
      <motion.div className="fixed inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />
      </motion.div>

      <motion.div style={{ y: blob1Y }} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-700/15 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ y: blob2Y }} className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-[-15%] right-[-15%] w-[900px] h-[900px] bg-purple-700/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating photo – stronger parallax */}
      <div className="relative z-10 pt-16 md:pt-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            style={{ y: photoY }}
            className="mb-16 md:mb-24 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-900/50">
              <img
                src="/images/profile.png"
                alt="Micheal George"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>

          {/* Main content with parallax */}
          <motion.div
            style={{ y: contentY }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-16 md:space-y-24 text-gray-200"
          >
            <motion.section variants={item}>
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                I'm Micheal George, a full-stack developer from Tamil Nadu, India.
                I build modern, fast and user-friendly web applications — from thoughtful UI/UX to scalable backends.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-6">
                I enjoy turning ideas into clean, maintainable code and beautiful interfaces.
              </p>
            </motion.section>

            <motion.section variants={item}>
              <h3 className="text-3xl font-bold mb-8 text-white">Current Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  'React • Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express',
                  'PostgreSQL', 'Prisma', 'AWS / Vercel', 'Framer Motion', 'Figma'
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={item}>
              <h3 className="text-3xl font-bold mb-8 text-white">Beyond the Screen</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                Chess • Sci-fi books • Photography • Open source • Good coffee • Learning new tools and patterns
              </p>
            </motion.section>

            <motion.div variants={item} className="pt-8">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-yellow-500 to-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-700/30 hover:brightness-110 transition-all text-lg"
              >
                Let's create something great →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}