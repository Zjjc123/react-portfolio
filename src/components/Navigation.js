import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
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
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Contact</li>
                <li>
                  <a href="mailto:me@jasonzhang.dev">Get in touch</a>
                </li>
                <li>
                  <NavLink to="/Pricing" exact>
                    Pricing
                  </NavLink>
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
                  <a href="https://www.instagram.com/jasonzhang02/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/zjjc123/">LinkedIn</a>
                </li>
              </ul>

              <ul className="nav-info">
                <li className="nav-info-label">Others</li>
                <li>
                  <NavLink to="/code-bytes" exact>
                    Code Bytes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/poems" exact>
                    Poems
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>Sammamish, Washington</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
