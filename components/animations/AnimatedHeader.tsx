import { motion } from 'framer-motion'

export const AnimatedHeader = () => {
  return (
    <motion.p
      className="text-primary text-[42px] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] -mb-6 sm:mb-1 md:mb-4 lg:mb-8
        xl:mb-14"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
    >
      Developer
    </motion.p>
  )
}
