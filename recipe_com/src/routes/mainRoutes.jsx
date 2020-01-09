import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from '../pages/login'
import Profile from '../pages/profile'
import Articles from '../pages/articles'
import NotMatch from '../pages/notMatch'
import Home from '../pages/home'
import Category from '../pages/category'

import { Provider } from 'unistore/react';
import { store } from '../store/store';


const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/articles' component={Articles} />
                    <Route exact path="/" component={Home}/>
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/:category' component={Category} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;