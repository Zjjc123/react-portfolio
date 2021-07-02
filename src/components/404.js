import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page">
      <div className="container">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          You are lost, with no exit in sight
          <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.03,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          Maybe I'm lost too.
          <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.06,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          But there is hope. There always is.
          <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.01,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          For it will carry us through.
          <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.015,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          <br />
          To borrow lines from the poet W. H. Auden
          <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4 "
        >
          <br />
          "May I, composed like them <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4"
        >
          Of Eros and of dust, <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.6,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4"
        >
          Beleaguered by the same <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4"
        >
          Negation and despair, <br />
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            delay: 1,
            duration: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="text-xl text-center mb-4"
        >
          Show an affirming flame."
        </motion.h1>

        <Link to="/">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              delay: 2,
              duration: 1.3,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="text-3xl text-center mb-4"
          >
            <br />
            <br />
            Continue Forward...
          </motion.h1>
        </Link>
      </div>
    </div>
  );
}
