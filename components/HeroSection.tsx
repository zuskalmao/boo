import { motion } from 'framer-motion'
import { Ghost, Sparkles } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 glow">
                <span className="gradient-text">Ghost</span>Yield
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-ghost-purple"
                > $BOO</motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-xl md:text-2xl mb-8 text-ghost-light"
              >
                Mysterious yield farming on Solana. <br /> 
                <span className="italic text-ghost-purple">Nobody knows where the yield comes from...</span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-ghost-purple hover:bg-opacity-80 text-white font-bold text-lg flex items-center justify-center gap-2 group"
                >
                  <span>Enter the Beyond</span>
                  <Ghost className="w-5 h-5 group-hover:animate-pulse" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border-2 border-ghost-purple hover:bg-ghost-purple/10 text-white font-bold text-lg"
                >
                  Buy $BOO
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7,
                delay: 0.5
              }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                {/* Logo here - this will be a Ghost icon as placeholder until user uploads logo */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-ghost-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-ghost-purple/30">
                  <Ghost className="w-40 h-40 text-ghost-light ghost-glow" />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-ghost-purple/10 rounded-full filter blur-xl"
                />
              </motion.div>
              
              {/* Floating sparkles */}
              <motion.div
                initial={{ x: -20, y: -20 }}
                animate={{ 
                  x: [-20, 0, -20],
                  y: [-20, 0, -20]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-0"
              >
                <Sparkles className="w-8 h-8 text-ghost-purple opacity-80" />
              </motion.div>
              
              <motion.div
                initial={{ x: 20, y: 20 }}
                animate={{ 
                  x: [20, 0, 20],
                  y: [20, 0, 20]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
                className="absolute bottom-0 right-0"
              >
                <Sparkles className="w-8 h-8 text-ghost-purple opacity-80" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ghost-purple/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ghost-blue/10 rounded-full filter blur-[100px]" />
    </section>
  )
}

export default HeroSection
