import { menuItems } from '@/src/config/arrays'
import { HamburgerMenuProps } from '@/src/typescript/types'
import { AnimatePresence, motion } from 'framer-motion'

export const HamburgerMenu = ({ setIsMenuOpen, isSmallScreen, isMenuOpen }: HamburgerMenuProps) => {
  return (
    <AnimatePresence>
      {isSmallScreen && isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen z-30 flex flex-col items-center justify-center bg-black bg-opacity-40
            backdrop-blur-lg space-y-12"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {menuItems.map((item) => (
            <motion.p className="menu__item" key={item} onClick={() => setIsMenuOpen(false)}>
              {item}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
