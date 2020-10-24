import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';

import Landing from "../pages/Landing.js"
import Projects from '../pages/Projects.js';
import About from '../pages/About.js';
import Gallery from '../pages/Gallery.js';

import { AnimatePresence } from 'framer-motion';

const PageRouter = () => {
    let location = useLocation()

    return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/projects'} component={Projects} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/gallery'} component={Gallery} />
        </Switch>
    </AnimatePresence>)
}

export default PageRouter;