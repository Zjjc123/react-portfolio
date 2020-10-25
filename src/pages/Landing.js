import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import IntroOverlay from "../components/IntroOverlay";
import gsap from 'gsap';

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
    tl.from('.line span', 1.8, {
        y: 100,
        ease: 'power4.out',
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    }).to('.intro-overlay', 1.6, {
        height: 0,
        ease: 'expo.inOut'
    }).to('.intro-overlay', 0, {
        css: { display: 'none' },
        onComplete: completeAnimation
    });
}

function Landing() {
    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    }

    useEffect(() => {
        homeAnimation(completeAnimation);
    }, [])

    return (
        <>
            {animationComplete === false ? <IntroOverlay /> : ""}
            <div className="full">
                <section className="main">
                    <div className="container">
                        <div className='row'>
                            <h2>
                                <div className="line">
                                    <span>Welcome to my portfolio!</span>
                                </div>
                                <div className="line">
                                    <span>I'm Jason Zhang</span>
                                </div>
                            </h2>
                            <div className="btn-row">
                                <a href="/">about me <RightArrow /> </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Landing
