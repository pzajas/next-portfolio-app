import { menuItems } from '@/src/config/arrays'
import { motion } from 'framer-motion'

export const VerticalMenu: React.FC = () => {
  const handleItemClick = (item: string) => {
    console.log(`${item} clicked`)
  }

  return (
    <motion.div
      className="w-[120px] h-full flex-col items-center justify-center py-10 space-y-16 fixed right-0 top-0 z-10 sm:flex hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
    >
      {menuItems.map((item, index) => (
        <motion.p
          key={item}
          className="text-white text-md font-medium leading-tight transform rotate-0 cursor-pointer hover:text-red-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 + index * 0.2 }}
          style={{ writingMode: 'vertical-rl', textAlign: 'center' }}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </motion.p>
      ))}
    </motion.div>
  )
}
