import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing from "../pages/Landing.js"
import Projects from '../pages/Projects.js';
import About from '../pages/About.js';
import Gallery from '../pages/Gallery.js';
import Pricing from '../pages/Pricing.js';
import CodeBytes from "../pages/CodeBytes.js";

const routes = [
    { path: '/projects', name: 'Projects', Component: Projects },
    { path: '/about', name: 'About', Component: About },
    { path: '/gallery', name: 'Gallery', Component: Gallery },
    { path: '/pricing', name: 'Pricing', Component: Pricing },
    { path: '/code-bytes', name: 'Code Bytes', Component: CodeBytes },
    { path: '/', name: 'Landing', Component: Landing },
]

const PageRouter = () => {
    let location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} />
                ))}
            </Switch>
        </AnimatePresence>
    )
}

export default PageRouter;