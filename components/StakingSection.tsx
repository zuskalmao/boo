import { useState } from 'react'
import { motion } from 'framer-motion'
import { Ghost, ArrowRight, Lock, Sparkles } from 'lucide-react'

const StakingStat = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-ghost-dark/70 rounded-lg p-4 border border-ghost-purple/20">
    <p className="text-ghost-light/60 text-sm mb-1">{label}</p>
    <p className="text-xl font-bold text-ghost-light">{value}</p>
  </div>
)

const StakingSection = () => {
  const [stakeAmount, setStakeAmount] = useState('')
  const [isStaking, setIsStaking] = useState(false)
  const [activeTab, setActiveTab] = useState('stake')

  const handleStake = () => {
    setIsStaking(true)
    setTimeout(() => {
      setIsStaking(false)
      setStakeAmount('')
    }, 2000)
  }

  return (
    <section id="staking" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Stake Your </span>
            <span className="text-ghost-purple glow">$BOO</span>
          </h2>
          <p className="text-xl text-ghost-light max-w-3xl mx-auto">
            Enter the spectral realm and earn mysterious yields from the beyond. 
            The longer you stake, the greater your ghostly rewards.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-ghost-dark/80 backdrop-blur-md border border-ghost-purple/30 rounded-2xl p-6 md:p-8"
          >
            {/* Tabs */}
            <div className="flex mb-8 bg-ghost-dark/50 rounded-lg p-1">
              <button 
                onClick={() => setActiveTab('stake')}
                className={`flex-1 py-3 rounded-lg text-center font-medium transition-all ${
                  activeTab === 'stake' 
                    ? 'bg-ghost-purple text-white' 
                    : 'text-ghost-light/70 hover:text-ghost-light'
                }`}
              >
                Stake
              </button>
              <button 
                onClick={() => setActiveTab('unstake')}
                className={`flex-1 py-3 rounded-lg text-center font-medium transition-all ${
                  activeTab === 'unstake' 
                    ? 'bg-ghost-purple text-white' 
                    : 'text-ghost-light/70 hover:text-ghost-light'
                }`}
              >
                Unstake
              </button>
            </div>

            {/* Staking Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StakingStat label="APY" value="???%" />
              <StakingStat label="Staked $BOO" value="0" />
              <StakingStat label="Your Rewards" value="0 $BOO" />
              <StakingStat label="Lock Period" value="7 days" />
            </div>

            {/* Staking Form */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="Enter amount to stake"
                  className="w-full bg-ghost-dark/50 border border-ghost-purple/30 rounded-lg px-4 py-4 text-ghost-light focus:outline-none focus:border-ghost-purple/60 transition-all"
                />
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-ghost-dark/80 text-ghost-light px-3 py-1 rounded-md text-sm hover:bg-ghost-dark/60 transition-all"
                >
                  MAX
                </button>
              </div>
            </div>

            {/* Staking Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStake}
              disabled={!stakeAmount || isStaking}
              className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 ${
                !stakeAmount || isStaking
                  ? 'bg-ghost-purple/50 cursor-not-allowed'
                  : 'bg-ghost-purple hover:bg-opacity-90'
              } transition-all`}
            >
              {isStaking ? (
                <>
                  <div className="w-5 h-5 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                  <span>Staking...</span>
                </>
              ) : activeTab === 'stake' ? (
                <>
                  <span>Stake $BOO</span>
                  <Lock className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Unstake $BOO</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Staking Info */}
            <div className="mt-6 bg-ghost-dark/50 rounded-lg p-4 border border-ghost-purple/20">
              <div className="flex items-center gap-2 text-ghost-light/80">
                <Sparkles className="w-4 h-4 text-ghost-purple" />
                <p className="text-sm">
                  The mystery of our yield is part of the magic. Stake your $BOO tokens and watch as spectral returns materialize from the beyond.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Staking Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 bg-ghost-dark/60 backdrop-blur-md border border-ghost-purple/20 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-ghost-light">Staking Details</h3>
            <ul className="space-y-3 text-ghost-light/80">
              <li className="flex items-start gap-3">
                <Ghost className="w-5 h-5 text-ghost-purple mt-1 flex-shrink-0" />
                <p>Stake your $BOO tokens to enter the spectral farm.</p>
              </li>
              <li className="flex items-start gap-3">
                <Ghost className="w-5 h-5 text-ghost-purple mt-1 flex-shrink-0" />
                <p>Minimum staking period is 7 days. Early unstaking results in a 13% ghostly fee.</p>
              </li>
              <li className="flex items-start gap-3">
                <Ghost className="w-5 h-5 text-ghost-purple mt-1 flex-shrink-0" />
                <p>APY fluctuates based on ethereal market conditions and phantom forces beyond our control.</p>
              </li>
              <li className="flex items-start gap-3">
                <Ghost className="w-5 h-5 text-ghost-purple mt-1 flex-shrink-0" />
                <p>Rewards are distributed daily at the witching hour (midnight UTC).</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-ghost-purple/10 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-ghost-blue/5 rounded-full filter blur-[100px]" />
    </section>
  )
}

export default StakingSection
