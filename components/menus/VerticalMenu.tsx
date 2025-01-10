import { menuItems } from '@/src/config/arrays'
import { useThemeToggle } from '@/src/hooks/useThemeToggle'
import { PortfolioMenuProps } from '@/src/typescript/types'
import { motion } from 'framer-motion'
import { AnimatedSocialIcons } from '../animations/AnimatedSocialIcons'
import { MenuToggleButton } from '../buttons/MenuToggleButton'
import { ThemeToggleButton } from '../buttons/ThemeToggleButton'

export const VerticalMenu = ({ setIsMenuOpen, isSmallScreen, isMenuOpen }: PortfolioMenuProps) => {
  const { isDarkMode, toggleTheme } = useThemeToggle()

  return (
    <motion.div
      className="w-[40px] flex h-full flex-col items-center justify-between fixed right-0 top-0 z-50 pt-8 pr-4 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
    >
      <div className="z-50 flex">
        {isSmallScreen ? (
          <MenuToggleButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        )}
      </div>

      <div className="w-[120px] h-full flex-col items-center justify-center space-y-16 z-10 sm:flex hidden">
        {menuItems.map((item, index) => (
          <motion.p
            key={item}
            className="text-primary text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 + index * 0.2 }}
            style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
            onClick={() => console.log(item)}
          >
            {item}
          </motion.p>
        ))}
      </div>

      <AnimatedSocialIcons />
    </motion.div>
  )
}
