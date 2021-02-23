import React from "react";
import { motion } from 'framer-motion'
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import Test from "./CodeBytes/Test";

function CodeBytes() {
    let match = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route path={`${match.url}/test`} component={Test} />
                <Route path={match.url}>
                    <div className="page">
                        <div className='container'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                <h1>Code Bytes</h1>
                                <Link to={`${match.url}/test`}>Show Test!</Link>
                            </motion.div>
                        </div>

                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default CodeBytes;