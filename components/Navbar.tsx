import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ghost-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Ghost className="w-8 h-8 mr-2 text-ghost-light ghost-glow" />
          <span className="text-2xl font-bold glow">
            Ghost<span className="text-ghost-purple">Yield</span>
          </span>
        </motion.div>
        
        <div className="flex items-center space-x-1">
          <motion.button
            className="px-4 py-2 rounded-full bg-ghost-purple text-white font-bold hover:bg-opacity-80 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
