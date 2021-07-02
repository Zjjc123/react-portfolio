import React from "react";
import LazyLoad from "react-lazyload";

import { motion } from "framer-motion";

import image_list from "./portfolio.json";

const img_src = process.env.PUBLIC_URL + "/images/portfolio/";

function ImageGrid() {
  return (
    <div className="img-grid">
      {image_list.images.map((img) => (
        <motion.div className="img-wrap" key={img.dir}>
          <LazyLoad>
            <motion.img
              src={img_src + img.dir}
              alt={img.alt}
              transition={{ duration: 1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            />
          </LazyLoad>
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
