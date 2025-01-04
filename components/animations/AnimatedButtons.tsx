import { motion } from 'framer-motion'
import { BsArrowDownRightCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const AnimatedButtons = () => {
  return (
    <div className="space-x-4 flex">
      {/* First Button */}
      <motion.button
        className="w-auto rounded-full bg-red-500 py-2 px-4 text-white flex items-center justify-between space-x-4"
        whileHover={{ scale: 1.1 }} // Hover effect: scale and rotate
        whileTap={{ scale: 0.95 }} // Tap effect: slight shrink
        transition={{ type: 'spring', stiffness: 300 }} // Smooth animation transition
      >
        <p>Projects</p>
        {/* Animated Icon */}
        <motion.div whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BsArrowRightCircleFill />
        </motion.div>
      </motion.button>

      {/* Second Button */}
      <motion.button
        className="w-auto rounded-full bg-red-500 py-2 px-4 text-white flex items-center justify-between space-x-4"
        whileHover={{ scale: 1.1 }} // Hover effect with different rotation
        whileTap={{ scale: 0.95 }} // Tap effect: slight shrink
        transition={{ type: 'spring', stiffness: 300 }} // Smooth animation transition
      >
        <p>Download CV</p>
        {/* Animated Icon */}
        <motion.div whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BsArrowDownRightCircleFill />
        </motion.div>
      </motion.button>
    </div>
  )
}

export default AnimatedButtons
