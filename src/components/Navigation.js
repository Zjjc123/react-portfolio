import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">
                            Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/" exact>
                                    Home
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" exact>
                                    Projects
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" exact>
                                    Gallery
                            </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" exact>
                                    About
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Get in touch
                            </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Links</li>
                                <li>
                                    <NavLink to="/youtube" exact>
                                        Youtube
                            </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/linkedin" exact>
                                        Linked In
                            </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Phone
                                </li>
                                <li>
                                    +1 (425) 898 3210
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;