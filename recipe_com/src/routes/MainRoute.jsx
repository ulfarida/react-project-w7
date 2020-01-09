import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;