import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { openMenu, closeMenu } from "../animations/menuAnimations";

import { ReactComponent as UpArrow } from '../assets/arrow-up.svg';

const Header = ({ history, dimensions }) => {
    const [menuState, setMenuState] = useState({ menuOpened: false });

    useEffect(() => {
        history.listen(() => {
            setMenuState({ menuOpened: false });
        });
        if (menuState.menuOpened === true) {
            openMenu(dimensions.width);
        } else if (menuState.menuOpened === false) {
            closeMenu();
        }
    });

    return (
        <div className="header">
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
    )
}

export default withRouter(Header);