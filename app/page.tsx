'use client'

import AnimatedBarDeveloper from '@/components/animations/AnimatedBarDeveloper'
import AnimatedName from '@/components/animations/AnimatedName'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { PiMoonFill } from 'react-icons/pi'
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri' // Import RiCloseFill

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to track if the menu is open or closed

  const name = 'PIOTR ZAJAS'
  const placeholder = Array(name.length).fill('_') // Placeholder for "drawing" state

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640) // Tailwind `sm` breakpoint: 640px
    }

    // Initial check
    handleResize()

    // Add resize event listener
    window.addEventListener('resize', handleResize)

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="h-screen bg-[#111111] relative">
      {/* <NavSection /> */}

      <div className="flex flex-col h-screen w-full sm:w-[50%] lg:w-[50%] m-auto justify-center items-center text-center relative">
        {/* Wrapper for NAME with absolute positioning */}
        {/* <motion.p
          className="text-[#a1a1a1] text-[1rem] font-semibold mr-[8.5rem] tracking-widest"
          style={{ marginLeft: '-0.5em' }} // Adjust position to align "N" with "D"
        >
          PIOTR ZAJAS
        </motion.p> */}
        <div className="items-start justify-start text-left">
          <AnimatedName />

          <motion.p
            className="text-white text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem] font-semibold m-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          >
            DEVELOPER
          </motion.p>
          {/* <motion.p
            className="text-white text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem] font-semibold m-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          >
            DEVELOPER
          </motion.p> */}

          <AnimatedBarDeveloper />
        </div>

        {/* <motion.p
          className="text-white text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem] font-semibold -mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        >
          DEVELOPER
        </motion.p> */}
      </div>

      {/* Hamburger or Close Button with Animation */}
      <div
        className="fixed top-12 right-12 z-40 cursor-pointer text-white rotate-180"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu state
      >
        {isSmallScreen ? (
          <motion.div
            key={isMenuOpen ? 'close' : 'menu'} // Ensure a different key for each state
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-block' }} // Remove inline transition for rotation
            whileHover={{
              rotate: 180, // Rotate 180 degrees on hover
              transition: { duration: 0.3, ease: 'easeInOut' } // Smooth transition with consistent speed
            }}
          >
            {isMenuOpen ? (
              <RiCloseFill size={30} /> // Show Close icon if menu is open
            ) : (
              <RiMenu2Fill size={30} /> // Show Hamburger menu if menu is closed
            )}
          </motion.div>
        ) : (
          <PiMoonFill size={30} />
        )}
      </div>

      {/* LinkedIn and GitHub Icons on the bottom-right */}
      <div className="fixed bottom-12 right-12 z-20 flex space-y-2 flex-col">
        <a
          href="https://www.linkedin.com/in/pzajas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/pzajas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500"
        >
          <FaGithubSquare size={30} />
        </a>
      </div>

      {/* Sliding Menu with Glass Effect */}
      <AnimatePresence>
        {isSmallScreen && isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-30 flex flex-col items-center justify-center bg-black bg-opacity-40
              backdrop-blur-lg space-y-12"
            initial={{ y: '-100%' }} // Start off-screen at the top
            animate={{ y: 0 }} // Animate to be fully visible
            exit={{ y: '-100%' }} // Slide back up when closing
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.p
              className="text-white text-2xl font-normal cursor-pointer hover:text-red-500"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            >
              Home
            </motion.p>
            <motion.p
              className="text-white text-2xl font-normal cursor-pointer hover:text-red-500"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            >
              About
            </motion.p>
            <motion.p
              className="text-white text-2xl font-normal cursor-pointer hover:text-red-500"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            >
              Services
            </motion.p>
            <motion.p
              className="text-white text-2xl font-normal cursor-pointer hover:text-red-500"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            >
              Contact
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-[120px] flex h-full flex-col items-center justify-center py-10 space-y-16 fixed right-0 top-0 z-10 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
      >
        <motion.p
          className="text-white text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
        >
          Home
        </motion.p>
        <motion.p
          className="text-white text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
          style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
        >
          About
        </motion.p>
        <motion.p
          className="text-white text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
          style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
        >
          Services
        </motion.p>
        <motion.p
          className="text-white text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
          style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
        >
          Contact
        </motion.p>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
      >
        <motion.div className="w-6 h-8 bg-transparent border-2 border-white rounded-full flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="w-0.5 h-1.5 bg-white absolute top-1"
            animate={{
              y: [0, 14, 0], // Line moves from top to bottom, then back to top
              opacity: [1, 1, 0, 0] // Make the line fade out at the bottom and fade back in at the top
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2, // Slower animation with a longer duration
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </motion.div>
    </main>
  )
}
