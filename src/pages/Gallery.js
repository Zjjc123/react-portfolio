import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { motion } from 'framer-motion'
import ImageGrid from "../components/Gallery/ImageGrid"

function Gallery(props) {
  return (
    <motion.div>
      <Jumbotron style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="bg-transparent jumbotron-fluid">
        <ImageGrid />
      </Jumbotron>
    </motion.div>
  )
}

export default Gallery;