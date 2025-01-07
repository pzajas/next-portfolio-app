import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
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
            y: [0, 14, 0],
            opacity: [1, 1, 0, 0]
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </motion.div>
  )
}
