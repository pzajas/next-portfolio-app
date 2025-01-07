import { motion } from 'framer-motion'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const socialIcons = [
  {
    href: 'https://www.linkedin.com/in/pzajas/',
    icon: <FaLinkedin size={30} />,
    hoverColor: 'blue-500'
  },
  {
    href: 'https://github.com/pzajas',
    icon: <FaGithubSquare size={30} />,
    hoverColor: 'gray-500'
  }
]

export const AnimatedSocialIcons = () => {
  return (
    <motion.div
      className="fixed bottom-12 right-12 z-20 flex space-y-2 flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {socialIcons.map((iconData, index) => (
        <motion.a
          key={index}
          href={iconData.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className={`hover:text-${iconData.hoverColor}`}>{iconData.icon}</div>
        </motion.a>
      ))}
    </motion.div>
  )
}
