import { HamburgerMenuProps } from '@/src/typescript/types'
import { motion } from 'framer-motion'
import { PiMoonFill } from 'react-icons/pi'
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri'

export const HamburgerMenuIcon = ({ setIsMenuOpen, isMenuOpen, isSmallScreen }: HamburgerMenuProps) => {
  return (
    <div
      className="fixed top-12 right-12 z-40 cursor-pointer text-white rotate-180"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isSmallScreen ? (
        <motion.div
          key={isMenuOpen ? 'close' : 'menu'}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block' }}
          whileHover={{
            rotate: 180,
            transition: { duration: 0.3, ease: 'easeInOut' }
          }}
        >
          {isMenuOpen ? <RiCloseFill size={30} /> : <RiMenu2Fill size={30} />}
        </motion.div>
      ) : (
        <PiMoonFill size={30} />
      )}
    </div>
  )
}
