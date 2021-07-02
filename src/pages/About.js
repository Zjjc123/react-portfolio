import React from "react";
import Social from "../components/Social";
import { motion } from "framer-motion";

function About() {
  const links = [
    {
      src: process.env.PUBLIC_URL + "images/logos/linkedin.svg",
      url: "https://www.linkedin.com/in/zjjc123/",
    },
    {
      src: process.env.PUBLIC_URL + "images/logos/instagram.svg",
      url: "https://www.instagram.com/jasonzhang02",
    },
    {
      src: process.env.PUBLIC_URL + "images/logos/youtube.svg",
      url: "https://www.youtube.com/channel/UC4oYKaYEiIQ_5h2i5RW8yeQ",
    },
    {
      src: process.env.PUBLIC_URL + "images/logos/twitch.svg",
      url: "https://www.twitch.tv/zjjc1234",
    },
  ];

  return (
    <div className="white-page">
      <div className="container">
        <div className="hero">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="hero-images"
          >
            <img src={process.env.PUBLIC_URL + "images/face.jpg"} alt="face1" />
          </motion.div>
          <motion.div className="hero-content">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div className="hero-content-line-inner">Jason Zhang</div>
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 1.3,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              Jason Zhang is a current high school senior attending Eastlake
              High School. He is a software developer and an aspiring filmmaker
              and photographer.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 1.3,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="logos"
            >
              {links.map((link) => {
                return <Social src={link.src} url={link.url} />;
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
