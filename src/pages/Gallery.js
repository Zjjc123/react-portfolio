import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

function Gallery(props) {
  return (
    <motion.div>
      <Jumbotron style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="bg-transparent jumbotron-fluid">
        <motion.h1
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "50%" }}
                    transition={ transition } className="gallery-title">Under Construction</motion.h1>
      </Jumbotron>
    </motion.div>
  )
}

export default Gallery;