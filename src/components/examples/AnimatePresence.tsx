import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AnimatePresenceExample() {
  const [show, setShow] = useState(true);

  return (
<>
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: 100 }}
          transition={{duration: 2}}
        >
          I can fade out!
        </motion.div>
      )}
    </AnimatePresence>
            <button onClick={() => setShow(!show)}>Toggle</button>
</>

  );
}