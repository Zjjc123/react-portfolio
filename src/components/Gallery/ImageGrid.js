import React from 'react';
import LazyLoad from 'react-lazy-load';

import { motion } from 'framer-motion';

import image_list from './portfolio.json';

const img_src = process.env.PUBLIC_URL + "/images/portfolio/"

function ImageGrid() {
    return (
        <div className="img-grid">
            {image_list.images.map(img =>
                <div className="img-wrap" key={img.dir} >
                    <LazyLoad>
                        <motion.img src={img_src + img.dir} alt={img.alt}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </LazyLoad>
                </div>
            )}
        </div>
    )
}

export default ImageGrid;