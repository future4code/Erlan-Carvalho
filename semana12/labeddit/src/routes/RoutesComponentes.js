import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from '../pages/errorPage/ErrorPage';
import FeedScreen from '../pages/feedScreen/FeedScreen';
import LoginScreen from '../pages/loginsScreen/LoginScreen';
import PostScreen from '../pages/postScreen/PostScreen';
import SignUpScreen from '../pages/signUpScreen/SignUpScreen';




const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/login">
                    <LoginScreen />
                </Route>

                <Route exact path="/signup">
                    <SignUpScreen />
                </Route>

                <Route exact path="/">
                    <FeedScreen />
                </Route>

                <Route exact path="/posts/:id">
                    <PostScreen />
                </Route>

                <Route>
                  <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
};
export default RoutesComponent
