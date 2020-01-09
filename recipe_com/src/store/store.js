import createStore from 'unistore';

const initialState = { 
                fullname :'',
                username : '',
                password : '',
                email : '',
                picture : '',
                token : '',
                auth : false
                };

export const store = createStore(initialState);

export const actions = store => ({
    setInput : (state, event) => {
        store.setState({ [event.target.name] : event.target.value })
    }

})