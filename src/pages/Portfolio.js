import { motion } from "framer-motion";
import React from "react";
import VideoModule from "../components/Portfolio/VideoModule";

export default function Portfolio() {
  return (
    <div className="page">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0,
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <VideoModule
            title="Ude Dil Levitating - UW Kahaani"
            src="kxFhZwQ3eu0"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <VideoModule title="VEX Worlds Reveal - 917M" src="lWE1iFQBnmM" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <VideoModule title="PSA 2020 ILC Winner - HOSA" src="iL9gJoI2TR4" />
        </motion.div>
      </div>
    </div>
  );
}
