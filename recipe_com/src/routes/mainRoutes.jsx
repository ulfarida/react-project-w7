import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from '../pages/login'
import NotMatch from '../pages/notMatch'

import { Provider } from 'unistore/react';
import { store } from '../store/store';

const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;