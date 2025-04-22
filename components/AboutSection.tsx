import { motion } from 'framer-motion'
import { Ghost, Flame, BarChart } from 'lucide-react'

const features = [
  {
    icon: <Ghost className="w-8 h-8 text-ghost-purple" />,
    title: 'Mysterious Yield',
    description: 'Nobody knows where the yield comes from. It just appears... like a ghost in the night.'
  },
  {
    icon: <Flame className="w-8 h-8 text-ghost-purple" />,
    title: 'Ethereal Rewards',
    description: 'Spooky good APY from the beyond. Farming has never been this supernatural.'
  },
  {
    icon: <BarChart className="w-8 h-8 text-ghost-purple" />,
    title: 'Spectral Growth',
    description: 'Watch your $BOO multiply like spirits at midnight. The more you stake, the more phantoms join your side.'
  }
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About GhostYield</h2>
          <p className="text-xl text-ghost-light max-w-3xl mx-auto">
            GhostYield ($BOO) is a mysterious yield farming protocol on Solana. 
            Our phantom algorithm generates yields from the beyond, leaving even 
            the most experienced farmers bewildered by our ghostly returns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-ghost-dark/60 backdrop-blur-sm border border-ghost-purple/20 rounded-2xl p-8 hover:border-ghost-purple/50 transition-all"
            >
              <div className="bg-ghost-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-ghost-light">{feature.title}</h3>
              <p className="text-ghost-light/80 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 glow">The GhostYield Experience</h3>
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl ghost-gradient p-1">
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1634979149798-e9a118734e93?q=80&w=1200&auto=format&fit=crop" 
                alt="Mysterious ghostly landscape" 
                width={1200} 
                height={600}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-ghost-dark to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-xl font-medium text-ghost-light">
                    "It's like farming, but with ghosts. And you never know how it works. That's the beauty of it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-ghost-purple/5 rounded-full filter blur-[80px]" />
      <div className="absolute bottom-1/3 left-10 w-60 h-60 bg-ghost-blue/10 rounded-full filter blur-[80px]" />
    </section>
  )
}

export default AboutSection
