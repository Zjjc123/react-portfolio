import React from 'react';
import { motion } from 'framer-motion'

function Test() {
    return (<div className="page">
        <div className='container'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <h1>Test</h1>

            </motion.div>
        </div>
    </div>)
}

export default Test;