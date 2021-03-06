import React from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Orders from './Orders';
import Home from './Home';
import NavBar from './NavBar';

function Routes(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/orders">
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;