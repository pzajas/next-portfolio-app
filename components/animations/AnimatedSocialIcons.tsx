import { motion } from 'framer-motion'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export const AnimatedSocialIcons = () => {
  const socialIcons = [
    {
      href: 'https://www.linkedin.com/in/pzajas/',
      icon: <FaLinkedin size={25} className="hover:text-blue-medium" />,
      hoverColor: 'blue-medium'
    },
    {
      href: 'https://github.com/pzajas',
      icon: <FaGithubSquare size={25} className="hover:text-gray-medium" />,
      hoverColor: 'gray-medium'
    }
  ]

  return (
    <motion.div
      className="z-20 flex space-y-2 flex-col"
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
          className="fill-current text-primary"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div>{iconData.icon}</div>
        </motion.a>
      ))}
    </motion.div>
  )
}
