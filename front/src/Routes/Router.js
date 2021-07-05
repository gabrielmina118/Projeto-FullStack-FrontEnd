import React from "react"
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router = () =>{
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router