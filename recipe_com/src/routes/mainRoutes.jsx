import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from '../pages/login'
import Main from '../pages/main'

import { Provider } from 'unistore/react';
import { store } from '../store/store';

const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;