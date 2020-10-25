import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';

import Landing from "../pages/Landing.js"
import Projects from '../pages/Projects.js';
import About from '../pages/About.js';
import Gallery from '../pages/Gallery.js';

import { AnimatePresence } from 'framer-motion';


const routes = [
  {path: '/', name: 'Landing', Component: Landing},
  {path: '/Projects', name: 'Projects', Component: Projects},
  {path: '/About', name: 'About', Component: About},
  {path: '/Gallery', name: 'Gallery', Component: Gallery}
]

const PageRouter = () => {
    let location = useLocation()

    return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path} component={Component} />
            ))}
        </Switch>
    </AnimatePresence>)
}

export default PageRouter;