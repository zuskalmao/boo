import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ghost, Flame, Lock, ArrowRight, BarChart, Sparkles } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import StakingSection from '../components/StakingSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-ghost-dark to-black text-white overflow-hidden">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Navbar />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="ghost-particles"></div>
            </div>
            <main>
              <HeroSection />
              <AboutSection />
              <StakingSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
