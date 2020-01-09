import createStore from 'unistore';
import axios from 'axios'

const initialState = { 
                username : '',
                password : '',
                email : '',
                token : '',
                auth : false
                };

export const store = createStore(initialState);

export const actions = store => ({

    setChange: (state, key, value) => {
        store.setState({[key]: value});
    },
    setManyChanges: (state, dict) => {
        store.setState(dict)
    }
})