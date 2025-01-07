import { motion } from 'framer-motion'

export const AnimatedHeader = () => {
  return (
    <motion.p
      className="text-white text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem] font-semibold -mb-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
    >
      DEVELOPER
    </motion.p>
  )
}
