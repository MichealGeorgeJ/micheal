// pages/about.tsx   or   components/About.tsx

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 60, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const timeline = [
    {
      period: '2023 – Present',
      role: 'Full-Stack Developer',
      company: 'Freelance & Product Teams',
      description:
        'Building modern web applications with Next.js, TypeScript, Node.js / NestJS, PostgreSQL and real-time features for startups and small-to-medium businesses.',
    },
    {
      period: '2022 – 2023',
      role: 'Junior Full-Stack Developer',
      company: 'Web Development Agency / Startup',
      description:
        'Developed and maintained multiple client projects using MERN stack, integrated payment gateways, optimized performance and collaborated in agile teams.',
    },
    {
      period: '2021',
      role: 'Self-learning & First Projects',
      company: '',
      description:
        'Intensive self-study of JavaScript, React, Node.js and modern frontend/backend tooling — turned hobby coding into production-ready applications.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated background orbs – matching landing page */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.18, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.28, 1], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-yellow-500/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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

      <div className="relative py-20 px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" mx-auto"
        >
          {/* Main glass card */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-12 lg:p-16 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
  

              {/* Right: Content */}
              <div className="lg:col-span-3 space-y-10 text-gray-200">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                >
                  <span className="block text-white">About</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Micheal George
                  </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-gray-300">
                  I'm a full-stack developer based in Chennai with over 3 years of experience building modern, scalable web applications. 
                  I enjoy solving real problems with clean code, thoughtful design, and reliable architecture.
                </motion.p>

                <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-400">
                  My focus is on creating fast, maintainable products using TypeScript, React/Next.js ecosystems on the front-end 
                  and Node.js-based services (Express / NestJS) with PostgreSQL or MongoDB on the back-end.
                </motion.p>

                {/* Journey / Timeline */}
                <motion.div variants={itemVariants} className="pt-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">My Journey</h2>

                  <div className="space-y-10">
                    {timeline.map((entry, index) => (
                      <motion.div
                        key={entry.period}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.25, duration: 0.7 }}
                        className="relative pl-8 border-l-2 border-yellow-500/40 pb-2"
                      >
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-yellow-500/50 border-2 border-yellow-400" />
                        <p className="text-sm md:text-base text-yellow-400 font-medium tracking-wide">
                          {entry.period}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                          {entry.role}
                        </h3>
                        {entry.company && (
                          <p className="text-gray-500 mt-0.5">{entry.company}</p>
                        )}
                        <p className="mt-3 text-gray-300 leading-relaxed">{entry.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-5 pt-8"
                >
                  <motion.a
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-xl shadow-xl shadow-yellow-500/30 relative overflow-hidden group inline-flex items-center justify-center"
                    whileHover={{ scale: 1.04, boxShadow: '0 25px 50px -12px rgba(234, 179, 8, 0.5)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10">See My Projects</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.45 }}
                    />
                  </motion.a>

                  <motion.a
                    href="mailto:hello@michealgeorge.dev"
                    className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center justify-center"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Let's Connect
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}