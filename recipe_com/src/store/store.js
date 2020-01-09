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
                data: {},
                category : ''
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
        await axios
        .get(urlHeadLine)
        .then(async (response) => {
            await store.setState({data: response.data})
        })
        .catch((error) => {
            console.warn(error)
        })
    },

    handlePostApi: async (state, urlHeadLine) => {
        await axios
        .post(urlHeadLine)
        .then(async (response) => {
            await store.setState({data: response.data})
        })
        .catch((error) => {
            console.warn(error)
        })
    }
})