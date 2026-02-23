import { motion, useAnimation } from 'framer-motion';

export default function UseAnimation() {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start({ rotate: 270, direction: 2, transition: { duration: 2 } });
  };

  return (
    <motion.div animate={controls}>
      <button onClick={handleClick}>Rotate</button>
    </motion.div>
  );
}