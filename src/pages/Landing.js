import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import IntroOverlay from "../components/IntroOverlay";
import gsap from "gsap";

import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".intro-overlay", 1.6, {
      height: 0,
      ease: "expo.inOut",
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

function Landing() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("first") === null)
      homeAnimation(completeAnimation);
    window.sessionStorage.setItem("first", 1);
  }, []);

  return (
    <div>
      {animationComplete === false &&
      window.sessionStorage.getItem("first") === null ? (
        <IntroOverlay />
      ) : (
        ""
      )}
      <motion.section
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="main"
      >
        <div className="container">
          <div className="row">
            <h2>
              <div className="line">
                <span>Welcome to my portfolio!</span>
              </div>
              <div className="line">
                <span>I'm Jason Zhang</span>
              </div>
            </h2>
            <div className="btn-row">
              <NavLink to="/about">
                About me <RightArrow />{" "}
              </NavLink>
            </div>
          </div>
        </div>
        <video className="background-video" loop autoPlay muted>
          <source
            src={process.env.PUBLIC_URL + "/videos/landing.mp4"}
            type="video/mp4"
          />
        </video>
      </motion.section>
    </div>
  );
}

export default Landing;
