import React from "react"
import { motion } from 'framer-motion'
import AboutController from "../components/Home/HomeController"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Home(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="full-container">
      <AboutController />
    </motion.div>
  )
}

export default Home;