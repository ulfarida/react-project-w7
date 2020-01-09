import createStore from 'unistore';

const initialState = { 
                fullname :'',
                username : '',
                password : '',
                email : '',
                picture : '',
                token : '',
                auth : false,
                profilePicture : ''
                };

export const store = createStore(initialState);

export const actions = store => ({
    setInput : (state, event) => {
        store.setState({ [event.target.name] : event.target.value })
    }, 
    setChange: (state, key, value) => {
        store.setState({[key]: value});
    },
    setManyChanges: (state, dict) => {
        store.setState(dict)
    }
})