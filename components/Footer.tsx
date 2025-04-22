import { Ghost } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center mb-6">
            <Ghost className="w-8 h-8 mr-2 text-ghost-light ghost-glow" />
            <span className="text-2xl font-bold glow">
              Ghost<span className="text-ghost-purple">Yield</span>
            </span>
          </div>
          
          <div className="mb-8 text-center text-ghost-light/70">
            <p>$BOO &mdash; The spookiest yield farm on Solana</p>
          </div>
          
          <div className="border-t border-ghost-purple/20 pt-6 w-full flex justify-center">
            <p className="text-sm text-ghost-light/50">
              &copy; {new Date().getFullYear()} GhostYield. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-radial from-ghost-purple/5 to-transparent opacity-50" />
    </footer>
  )
}

export default Footer
