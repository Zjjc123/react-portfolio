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
                                    <a href="mailto:zjjc123@hotmail.com">
                                        Get in touch
                            </a>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Links</li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC4oYKaYEiIQ_5h2i5RW8yeQ">
                                        YouTube
                            </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/zjjc123/">
                                        Instagram
                            </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/zjjc123/">
                                        LinkedIn
                            </a>
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