import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="testimonials" className="py-20 bg-bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">SUCCESS STORIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What our clients say about their transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
