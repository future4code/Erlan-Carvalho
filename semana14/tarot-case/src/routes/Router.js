import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import GamePage from "../pages/gamePage/GamePage";

const Router =()=>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={'/'} >
                <GamePage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router;