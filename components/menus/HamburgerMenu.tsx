import { menuItems } from '@/src/config/arrays'
import { PortfolioMenuProps } from '@/src/typescript/types'
import { AnimatePresence, motion } from 'framer-motion'
import useTheme from '../hooks/useTheme'

export const HamburgerMenu = ({ setIsMenuOpen, isSmallScreen, isMenuOpen }: PortfolioMenuProps) => {
  const { theme } = useTheme()
  return (
    <AnimatePresence>
      {isSmallScreen && isMenuOpen && (
        <motion.div
          className={`fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center bg-opacity-70 backdrop-blur-lg
          space-y-12 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
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
