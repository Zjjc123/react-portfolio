import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Gallery(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}>
      <Jumbotron style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="bg-transparent jumbotron-fluid">
        <h1>Under Construction</h1>
      </Jumbotron>
    </motion.div>
  )
}

export default Gallery;