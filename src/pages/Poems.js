import React from "react"
import { motion } from "framer-motion"

import PoemCards from "../components/PoemCards";

function Poems() {
    return (
        <div className='page'>
            <div className='container'>
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="space-y-10">
                        <PoemCards title="Motivation" text={`Countless desires.\nDown goes the sun and up comes the night,\n  smothering the fires\nwithin me. Ambition fades, another day, another fight.`}/>
                </motion.div>
            </div>
        </div>
    )
}

export default Poems;
