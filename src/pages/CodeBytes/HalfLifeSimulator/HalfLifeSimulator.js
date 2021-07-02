import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Grid from "./Grid";

function HalfLifeSimulator() {
  const [grids, setGrids] = useState([]);
  const [nsize, setNSize] = useState(10);

  useEffect(() => {
    let arraySize = nsize * nsize;
    let gridArray = [];
    while (arraySize--) gridArray.push(false);
    setGrids(gridArray);
  }, [nsize]);

  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div class="grid grid-cols-3 gap-1">
          {grids.map((grid) => (
            <Grid decayed={grid} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default HalfLifeSimulator;
