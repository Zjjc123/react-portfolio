import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { openMenu, closeMenu } from "../animations/menuAnimations";

import { ReactComponent as UpArrow } from '../assets/arrow-up.svg';

import { FaArrowCircleUp } from 'react-icons/fa';

const Header = ({ history, dimensions }) => {
    const [menuState, setMenuState] = useState({ menuOpened: false });
    const [isVisible, setIsVisible] = useState(true);
    const [headerStyle, setHeaderStyle] = useState({
        transition: 'all 200ms ease-in'
    })

    const handleScroll = () => {
        let scrolled = document.body.scrollTop;
        const visible = scrolled <= 5;
        setIsVisible(visible);

        const shouldBeStyle = {
            visibility: visible ? 'visible' : 'hidden',
            transition: `all 300ms ${visible ? 'ease-in' : 'ease-out'}`,
            transform: visible ? 'none' : 'translate(0, -100%)'
        }
        if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

        setHeaderStyle(shouldBeStyle)
    }


    useEffect(() => {
        history.listen(() => {
            setMenuState({ menuOpened: false });
        });
        if (menuState.menuOpened === true) {
            openMenu(dimensions.width);
        } else if (menuState.menuOpened === false) {
            closeMenu();
        }

        document.addEventListener("scroll", handleScroll, true)

        return () => document.removeEventListener("scroll", handleScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollTop = () => {
        document.querySelector("body").scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="header" style={{ ...headerStyle }}>
                <div className="container">
                    <div className="row v-center space-between">
                        <div className="logo">
                            <NavLink to="/" exact>
                                JASON ZHANG
                        </NavLink>
                        </div>
                        <div className="nav-toggle">
                            <div
                                onClick={() => setMenuState({ menuOpened: true })}
                                className="nav-menu">
                                <span></span>
                                <span></span>
                            </div>
                            <div
                                onClick={() => setMenuState({ menuOpened: false })}
                                className="nav-menu-close">
                                <UpArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaArrowCircleUp
                className="scrollTop"
                onClick={scrollTop}
                style={{ height: 40, display: !isVisible ? 'flex' : 'none' }} />
        </>
    )
}

export default withRouter(Header);