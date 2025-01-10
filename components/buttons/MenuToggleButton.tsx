import { PortfolioMenuProps } from '@/src/typescript/types'
import { motion } from 'framer-motion'
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri'

export const MenuToggleButton = ({ isMenuOpen, setIsMenuOpen }: PortfolioMenuProps) => {
  return (
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
      {isMenuOpen ? (
        <RiCloseFill size={25} onClick={() => setIsMenuOpen(false)} className="menu__button--toggle" />
      ) : (
        <RiMenu2Fill size={25} onClick={() => setIsMenuOpen(true)} className="menu__button--toggle" />
      )}
    </motion.div>
  )
}
