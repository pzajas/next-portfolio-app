import { subheaderItems } from '@/src/config/arrays'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const AnimatedSubheader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % subheaderItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <motion.p
        className={
          'text-primary text-[42px] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-[500] m-0 relative z-0'
        }
        key={currentWordIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{ opacity: 0, x: -50 }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      >
        {subheaderItems[currentWordIndex]}
      </motion.p>
    </div>
  )
}
