import React from "react"
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="full-container">
      <h1> UNDER CONSTRUCTION </h1>
    </motion.div>
  )
}

export default About;