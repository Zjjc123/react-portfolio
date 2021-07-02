import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="page">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="container"
      >
        <div className="block">
          <h1>Payment Information</h1>
          <h3>Venmo: @jasonzhang02</h3>
          <h3>Paypal: zjjc123@hotmail.com</h3>
        </div>
        <div className="block">
          <h1>COVID-19 Precautions</h1>
          <h3>Social distance at ALL times (6ft+)</h3>
          <h3>Masks on at ALL times (except when picture is being taken)</h3>
          <h3>Do NOT ask to look at pictures on my camera</h3>
        </div>
        <div className="block">
          <h1>Pricing</h1>
          <h2>Base Package ($50)</h2>
          <ul>
            <li>30 minutes of shooting</li>
            <li>1 location</li>
            <li>7 edited pictures</li>
          </ul>
          <h2>Standard Package ($100)</h2>
          <ul>
            <li>60 minutes of shooting</li>
            <li>1 location</li>
            <li>15 edited pictures</li>
          </ul>
          <h2>Premium Package ($200)</h2>
          <ul>
            <li>120 minutes of shooting</li>
            <li>2 location</li>
            <li>30 edited pictures</li>
          </ul>
          <h2>Flat Rate ($100/hr)</h2>
          <ul>
            <li>Any events</li>
            <li>Number of pictures vary</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
