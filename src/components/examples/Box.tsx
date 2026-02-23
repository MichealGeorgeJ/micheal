import { motion } from 'framer-motion'
import { useState } from 'react';

export default function Box() {
  const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};
const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <motion.div
      className='bg-primary-foreground w-32 h-32 rounded-sm'
initial={{ opacity: 0, y: -50 }} 
       animate={{ opacity: [0, 1, 1, 0], y: [-50, 0, 0, 50] }}
      transition={{ duration: 3 }}
      
      >
      </motion.div> */}


       {/* <motion.ul
      variants={containerVariants}
      
      initial="hidden"
      animate="visible"
      className='flex gap-5'
    >
      {
        Array.from ({ length: 10}).map((_, i) => (
          <motion.li key={i} className='w-32 h-32 bg-primary-foreground rounded-sm' transition={{duration: 1}} variants={itemVariants}  >Item {i + 1}</motion.li>
        ))
      }
    </motion.ul> */}


      {/* <motion.div
      className='bg-primary-foreground w-32 h-32 rounded-sm cursor-grab overflow-hidden'
  drag
  dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
  whileDrag={{ scale: 1 }}
      
      >
      </motion.div> */}
      
    
 <motion.div
    onHoverStart={() => setIsFlipped(!isFlipped)}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.6 }}
    className='bg-primary-foreground'
    style={{ 
      width: 200, 
      height: 300, 
      cursor: 'pointer',
      transformStyle: 'preserve-3d'
    }}
  >
    Card Content
  </motion.div>

    </div>
  )
}
