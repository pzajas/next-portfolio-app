import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBarDeveloper = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['FRONTEND', 'MOBILE', 'DESIGN']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length) // Cycle through words
    }, 4000) // Change word every 4 seconds

    return () => clearInterval(interval) // Clean up interval on unmount
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic Text with Slide & Fade Animation */}
      <motion.p
        className="text-white text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem] font-semibold m-0 relative z-0"
        key={currentWordIndex}
        initial={{ opacity: 0, x: 50 }} // Start with text off-screen to the right
        animate={{
          opacity: 1,
          x: 0 // Slide in to original position
        }}
        exit={{ opacity: 0, x: -50 }} // Slide out to the left when transitioning
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      >
        {words[currentWordIndex]}
      </motion.p>
    </div>
  )
}

export default AnimatedBarDeveloper
