import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-ghost-dark flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="mb-6"
      >
        <Ghost className="w-20 h-20 text-ghost-light ghost-glow" />
      </motion.div>
      
      <motion.h1 
        className="text-4xl font-bold mb-4 glow text-ghost-light"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        Ghost<span className="text-ghost-purple">Yield</span>
      </motion.h1>
      
      <div className="w-48 h-2 bg-ghost-dark/80 rounded-full overflow-hidden mt-4 relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-ghost-blue to-ghost-purple absolute top-0 left-0 shimmer"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </div>
      
      <motion.p 
        className="text-ghost-light/70 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Summoning apparitions...
      </motion.p>
    </motion.div>
  )
}

export default LoadingScreen
