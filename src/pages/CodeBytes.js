import React from "react";
import { motion } from "framer-motion";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import InvestingTrauma from "./CodeBytes/InvestingTrauma";

function CodeBytes() {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route
          path={`${match.url}/investing-trauma`}
          component={InvestingTrauma}
        />
        <Route path={match.url}>
          <div className="page">
            <div className="container">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-5xl self-center align-middle text-center">
                  Under Construction
                </h1>
              </motion.div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default CodeBytes;
