import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from '../pages/login'
import Profile from '../pages/profile'
import Articles from '../pages/articles'
import NotMatch from '../pages/notMatch'
import Recipe from '../pages/recipe'
import RecipeAnalysis from '../pages/recipeAnalysis'
import Home from '../pages/Home'
import Category from '../pages/category'
import { Provider } from 'unistore/react';
import { store } from '../store/store';


const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Home}/>
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/articles' component={Articles} />
                    <Route path='/recipe/:index' component={Recipe} />
                    <Route path='/analyze' component={RecipeAnalysis} />
                    <Route path='/category/:category' component={Category} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;