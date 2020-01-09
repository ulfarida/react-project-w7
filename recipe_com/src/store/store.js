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

    
})