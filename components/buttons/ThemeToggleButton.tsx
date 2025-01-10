import { motion } from 'framer-motion'
import { PiMoonFill, PiSunFill } from 'react-icons/pi'

interface ThemeToggleButtonProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ isDarkMode, toggleTheme }) => {
  const icon = isDarkMode ? (
    <PiSunFill fill="white" size={25} className="icon__theme" />
  ) : (
    <PiMoonFill fill="black" size={25} className="icon__theme" />
  )

  return (
    <motion.div
      onClick={toggleTheme}
      className="group cursor-pointer"
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: isDarkMode ? 180 : 0, scale: 1.2 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}
