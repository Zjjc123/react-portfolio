import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function InvestingTrauma() {
    const [hasBought, setHasBought] = useState(false);
    const [stonkPrice, setStonkPrice] = useState(20);
    const [stonks, setStonks] = useState([0, 10, 20]);
    const [lineColor, setLineColor] = useState("#05B602")
    const [stonkLines, setStonkLines] = useState()

    const [portfolio, setPortfolio] = useState(10000)
    const [numStonk, setNumStonk] = useState(0)

    useEffect(() => {
        const min = 1;
        const max = 10;

        // Bought()

        const min_big = 50;
        const max_big = 100;
        const interval = setInterval(() => {
            let random_price = 0
            if (Math.random() < 0.1) {
                random_price = -1 * Math.random() * (max_big - min_big)
            }
            else if (Math.random() < 0.3) {
                random_price = Math.random() * (max - min)
            } else {
                random_price = Math.random() * (max_big - min_big)
            }
            if (!hasBought) {
                setStonkPrice(Math.max(10, stonkPrice + (random_price)))
            } else {
                setStonkPrice(Math.max(10, stonkPrice - (Math.abs(random_price))))
            }
            let new_stonks = stonks.concat(stonkPrice)
            if (new_stonks.length > 100) {
                new_stonks = new_stonks.slice(1, 100 + 1);
            }
            setStonks(new_stonks)
            drawGraph(new_stonks)
        }, 100);
        return () => clearInterval(interval);
    }, [stonks, stonkPrice, hasBought])

    const drawGraph = (stonks) => {
        const max = Math.max.apply(Math, stonks)
        const min = Math.min.apply(Math, stonks)
        const height = window.innerHeight
        const width = window.innerWidth

        let stonk_lines = ""
        for (var i = 0; i < stonks.length; i++) {
            if (max-min < 5) {
                stonk_lines = stonk_lines + (`${Math.floor(i / (stonks.length) * width)}, ${height} `)
            } else {
                stonk_lines = stonk_lines + (`${Math.floor(i / (stonks.length) * width)}, ${height - (Math.floor((stonks[i] - min) / (max - min) * height))} `)
            }
        }
        setStonkLines(stonk_lines)
    }

    const Bought = () => {
        if (portfolio > stonkPrice) {
            setHasBought(true)
            setLineColor("#FF073A")
            setPortfolio(portfolio - stonkPrice)
            setNumStonk(numStonk + 1)
        }
    }

    const Sold = () => {
        if (numStonk > 0) {
            setHasBought(false)
            setLineColor("#05B602")
            setPortfolio(portfolio + numStonk * stonkPrice)
            setNumStonk(0)
        }
    }


    return (
        <div className="w-full h-full bg-black">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <svg height={window.innerHeight} width={window.innerWidth}>
                    <polyline
                        fill="none"
                        strokeWidth="5"
                        points={stonkLines}
                        style={{ stroke: lineColor }}
                        point
                    />
                </svg>
                <button className="absolute mx-16 mb-64 right-0 bottom-0 h-16 w-64 h-32 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:outline-none text-5xl" onClick={Bought}>BUY 💎</button>
                <button className="absolute mx-16 mb-16 right-0 bottom-0 h-16 w-64 h-32 bg-red-500 hover:bg-red-400 active:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded focus:outline-none text-4xl" onClick={Sold}>SELL ALL 🧻</button>
                <h1 className="absolute font-ticker mx-16 my-16 left-0 top-0 text-3xl text-white">{"Stonk Price: $" + (stonkPrice).toFixed(2)}</h1>
                <h1 className="absolute font-ticker mx-16 my-24 left-0 top-0 text-3xl text-white">{"Portfolio: $" + (portfolio + numStonk * stonkPrice).toFixed(2) + " ($:" + ((portfolio + numStonk * stonkPrice) - 10000).toFixed(2) + ")" }</h1>
                <h1 className="absolute font-ticker mx-16 my-36 left-0 top-0 text-3xl text-white">{"Number of Stonks: " + numStonk}</h1>
            </motion.div>
        </div>)
}

export default InvestingTrauma;