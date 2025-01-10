import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
    >
      <motion.div className="w-6 h-10 bg-transparent border-2 border-primary rounded-full flex items-center justify-center relative">
        <motion.div
          className="w-0.5 h-1.5 bg-primary absolute top-1"
          animate={{
            y: [0, 18, 0],
            opacity: [1, 0, 0, 0]
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
