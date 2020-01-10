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
                search: '',
                listRecipe: [],
                isLoading: true,
                data: {},
                jsonResult : {},
                calories : ''
                };

export const store = createStore(initialState);

export const actions = store => ({
    setInput : (state, event) => {
        console.log(event.target.name, event.target.value)
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
        })
        .catch((error) => {
            console.warn(error)
        })
    }
})