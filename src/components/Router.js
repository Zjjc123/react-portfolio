import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "../pages/Landing.js";
import Projects from "../pages/Projects.js";
import About from "../pages/About.js";
import Gallery from "../pages/Gallery.js";
import Portfolio from "../pages/Portfolio.js";
import Pricing from "../pages/Pricing.js";
import CodeBytes from "../pages/CodeBytes.js";
import Poems from "../pages/Poems.js";
import Page404 from "./404.js";

const routes = [
  { path: "/projects", name: "Projects", Component: Projects, exact: true },
  { path: "/about", name: "About", Component: About, exact: true },
  { path: "/gallery", name: "Gallery", Component: Gallery, exact: true },
  {
    path: "/portfolio",
    name: "Portfolio",
    Component: Portfolio,
    exact: true,
  },
  { path: "/pricing", name: "Pricing", Component: Pricing, exact: true },
  {
    path: "/code-bytes",
    name: "Code Bytes",
    Component: CodeBytes,
    exact: false,
  },
  { path: "/poems", name: "Poems", Component: Poems, exact: true },
  { path: "/", name: "Landing", Component: Landing, exact: true },
  { path: "/", name: "404", Component: Page404, exact: false },
];

const PageRouter = () => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} component={Component} exact={exact} />
        ))}
      </Switch>
    </AnimatePresence>
  );
};

export default PageRouter;
