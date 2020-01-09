import createStore from 'unistore';
import axios from 'axios';

const initialState = { 
                fullname :'',
                username : '',
                password : '',
                email : '',
                picture : '',
                token : '',
                auth : false,
                isLoading : false,
                search: '',
                listRecipe: [],
                data: {}
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
    },

    handleGetApi: async (state, urlHeadLine) => {
        console.log('masuk')
        await axios
        .get(urlHeadLine)
        .then(async (response) => {
            await store.setState({data: response.data})
            console.warn(response.data)
            console.warn('state data',response.data)
        })
        .catch((error) => {
            console.warn(error)
        })
    }
})