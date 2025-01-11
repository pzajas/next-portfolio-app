import { motion } from 'framer-motion'

export const AnimatedHeader = () => {
  return (
    <motion.p
      className="text-primary text-[56px] sm:text-[64px] md:text-[4rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] -mb-6 xl:-mb-16
        lg:-mb-14"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
    >
      Developer
    </motion.p>
  )
}
