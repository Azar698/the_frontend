import { useProgress, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <div className="flex justify-evenly w-[60px]">
      <motion.li
        className="list-none bg-white rounded-full w-[12px] h-[12px]"
        animate={{
          y: [0, -18, 0], // Bouncing vertically
          width: [12, 6, 12], // Shrinking and growing width
          height: [12, 6, 12], // Shrinking and growing height
        }}
        transition={{
          duration: 2.1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.li
        className="list-none bg-white rounded-full w-[12px] h-[12px]"
        animate={{
          y: [0, -18, 0],
          width: [12, 6, 12],
          height: [12, 6, 12],
        }}
        transition={{
          duration: 2.1,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3, // Delayed bounce
        }}
      />
      <motion.li
        className="list-none bg-white rounded-full w-[12px] h-[12px]"
        animate={{
          y: [0, -18, 0],
          width: [12, 6, 12],
          height: [12, 6, 12],
        }}
        transition={{
          duration: 2.1,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6, // Further delayed bounce
        }}
      />
    </div>
    </Html>
  );
}

export default Loader