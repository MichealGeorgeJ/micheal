import React from 'react';
import { motion } from 'framer-motion';

const socialIcons = [
  '/images/github.png',
  '/images/linkedin.png',
  '/images/instagram.png',
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Done' },
  { value: '15+', label: 'Happy Clients' },
];

const techStack = [
  { name: 'React', color: 'from-cyan-400/20 to-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: '⚛️' },
  { name: 'TypeScript', color: 'from-blue-400/20 to-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: '🔷' },
  { name: 'Node.js', color: 'from-green-400/20 to-green-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: '🟢' },
  { name: 'Next.js', color: 'from-white/10 to-white/5', border: 'border-white/20', text: 'text-white', icon: '▲' },
  { name: 'Tailwind', color: 'from-sky-400/20 to-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-400', icon: '🎨' },
  { name: 'PostgreSQL', color: 'from-indigo-400/20 to-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', icon: '🐘' },
];

const services = [
  {
    icon: '🖥️',
    title: 'Frontend Dev',
    desc: 'Pixel-perfect UIs with React, animations, and accessible design.',
    accent: 'from-yellow-500/20 to-yellow-600/5',
    border: 'border-yellow-500/20',
  },
  {
    icon: '⚙️',
    title: 'Backend Dev',
    desc: 'Scalable APIs and services with Node.js, REST & GraphQL.',
    accent: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: '✦',
    title: 'UI/UX Design',
    desc: 'Clean, intuitive interfaces that balance beauty and usability.',
    accent: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
  },
];

export default function LandingPage5() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96, filter: 'blur(6px)' },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.82, y: 50, filter: 'blur(8px)' },
    visible: {
      opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 1.1, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.25, 1], x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.35, 1], rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative min-h-screen flex items-center justify-center lg:px-6 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Main glass card */}
          <motion.div variants={itemVariants} className="rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">

              {/* LEFT: Photo */}
              <div className="flex flex-col items-center md:items-start gap-8 lg:gap-10">
                <motion.div
                  variants={photoVariants}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <img
                    src="/images/profile.png"
                    alt="Micheal George - Full Stack Developer"
                    className="w-full lg:h-[90vh] object-cover"
                  />
                </motion.div>
              </div>

              {/* RIGHT: Content */}
              <div className="text-white space-y-6 md:space-y-8">
                <motion.div variants={itemVariants} className="inline-block">
                  <div className="px-5 py-2.5 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                    <span className="text-yellow-400 text-sm font-semibold tracking-wide">
                      ✨ Available for Freelance
                    </span>
                  </div>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
                  <span className="block">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Micheal
                  </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  A creative full-stack developer specializing in building exceptional digital
                  experiences. I combine design thinking with technical expertise to create
                  products that users love.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-xl shadow-lg shadow-yellow-500/30 relative overflow-hidden group"
                    whileHover={{ scale: 1.06, boxShadow: '0 25px 50px -12px rgba(234, 179, 8, 0.5)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="relative z-10">Explore My Work</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 backdrop-blur-sm bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Let's Talk
                  </motion.button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-5 sm:gap-6 mt-10 flex-wrap"
                >
                  {socialIcons.map((social, i) => (
                    <motion.a
                      key={social}
                      href="#"
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: 1.2 + i * 0.1, type: 'spring', stiffness: 200, damping: 15 },
                        },
                      }}
                      whileHover={{ y: -6, scale: 1.08 }}
                    >
                      <img src={social} alt="" className="w-10 h-10" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* ── DIVIDER ── */}
                <motion.div
                  variants={itemVariants}
                  className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2"
                />

                {/* ── STATS ── */}
                <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + i * 0.12, duration: 0.6 }}
                      className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                      <span className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                        {s.value}
                      </span>
                      <span className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ── TECH STACK ── */}
                <motion.div variants={itemVariants}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.7 + i * 0.07, type: 'spring', stiffness: 300 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-gradient-to-r ${tech.color} ${tech.border} ${tech.text} backdrop-blur-sm cursor-default`}
                      >
                        <span>{tech.icon}</span>
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>


              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}