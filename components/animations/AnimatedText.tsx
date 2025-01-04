import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedText = () => {
  const adjectives = [
    'accessible, pixel-perfect',
    'intuitive, user-friendly',
    'fast, cutting-edge',
    'scalable, maintainable',
    'innovative, cutting-edge'
  ]
  const [currentAdjective, setCurrentAdjective] = useState(adjectives[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adjectives.length)
    }, 4000) // Change adjective every 4 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setCurrentAdjective(adjectives[index])
  }, [index])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Stagger animation for words
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 } // Smooth transition for each word
    }
  }

  return (
    <p className="text-white text-6xl font-normal">
      {/* I build{' '} */}
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={currentAdjective} // Trigger reanimation on text change
        style={{ display: 'inline-block' }}
      >
        {currentAdjective.split(', ').map((word, i) => (
          <motion.span variants={wordVariants} key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>
            {word}
            {i === 0 ? ',' : ''} {/* Add comma after first adjective */}
          </motion.span>
        ))}
      </motion.span>
      digital <br></br> experiences for the <span className="text-red-500 font-semibold">web</span> and
      <span className="text-red-500 font-semibold"> mobile</span>.
    </p>
  )
}

export default AnimatedText
