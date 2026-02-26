import { createFileRoute } from '@tanstack/react-router'
import Intro from '@/components/pages/IntroPage'
import { useRef, useState } from 'react'
import LandingPage1 from '@/components/pages/Parallaxlanding';
import About from '@/components/pages/Parallaxabout';
import { motion, useScroll } from 'framer-motion';
import Projects from '@/components/pages/Projects';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [showAnimation, setShowAnimation] = useState(true);
   const handleAnimationComplete = () => {
    setShowAnimation(false);
    // Your main content starts here
    console.log('Animation completed! Show your main content now.');
  };
   const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className=''>
      { showAnimation &&
         <Intro onComplete={handleAnimationComplete} />
      }

      {
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
      }
      
     <div  ref={containerRef}  className="relative">
            {!showAnimation && <LandingPage1 scrollYProgress={scrollYProgress} />}
<div className='h-[60vh]' aria-hidden="true" />
           <About scrollYProgress={scrollYProgress} />

     </div>
     <Projects />
      <Contact />
      <Footer />
    </div>
  )
}