import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "../pages/gamePage/GamePage";
import ErrorPage from "../pages/errorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} >
                    <GamePage />
                </Route>

                <Route >
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;