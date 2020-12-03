import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';

import Landing from "../pages/Landing.js"
import Projects from '../pages/Projects.js';
import About from '../pages/About.js';
import Gallery from '../pages/Gallery.js';
import Pricing from '../pages/Pricing.js';

const routes = [
    { path: '/', name: 'Landing', Component: Landing },
    { path: '/Projects', name: 'Projects', Component: Projects },
    { path: '/About', name: 'About', Component: About },
    { path: '/Gallery', name: 'Gallery', Component: Gallery },
    { path: '/Pricing', name: 'Pricing', Component: Pricing }
]

const PageRouter = () => {
    let location = useLocation()

    return (
        <Switch location={location} key={location.pathname}>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
            ))}
        </Switch>
    )
}

export default PageRouter;