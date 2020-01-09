import React from 'react';
import './App.css';
import MainRoute from "./routes/MainRoute"
import { Provider } from 'unistore/react'
import { store } from './store/store'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Provider store={store}>
                    <MainRoute />
                </Provider>
            </div>
        )
    }
}
export default App;
