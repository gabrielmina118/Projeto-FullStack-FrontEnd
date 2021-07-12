import React from "react"
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Feed from '../pages/Feed/feed'
import Profile from '../pages/Profile/profile'
import SearchTag from '../pages/SearchTag/SearchTag'
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import Post from "../pages/Post/Post";


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

                <Route exact path="/feed">
                    <Feed />
                </Route>

                <Route exact path="/profile/:id">
                    <Profile />
                </Route>

                <Route exact path="/SearchTag">
                    <SearchTag />
                </Route>

                <Route exact path="/forgotPass">
                    <ForgotPass />
                </Route>

                <Route exact path="/createPost">
                    <Post/>
                </Route>

                <Route>
                    <div>Erro , Not Found!</div>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router