import React from "react";
import { motion } from 'framer-motion'
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import InvestingTrauma from "./CodeBytes/InvestingTrauma";

function CodeBytes() {
    let match = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route path={`${match.url}/investing-trauma`} component={InvestingTrauma} />
                <Route path={match.url}>
                    <div className="page">
                        <div className='container'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                <h1 className="text-5xl self-center text-center">Code Bytes</h1>
                                <Link to={`${match.url}/investing-trauma`}>Investing Trauma Simulator</Link>
                            </motion.div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default CodeBytes;