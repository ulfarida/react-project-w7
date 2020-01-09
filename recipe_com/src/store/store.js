import createStore from 'unistore'
import axios from 'axios'

const baseUrl = 'https://api.edamam.com/search'
const app_id = '15dc2b56'
const app_key = 'c03866bd3f9d5c0b17897f309357d5fd'

const initialState = {
    keywords : '',
    listRecipe : []
    };


export const store = createStore(initialState);

export const actions = store => ({

    setChange : (state, key, value) => {
        store.setState({[key] : value})
    },

    setManyChange : (state, dict) => {
        store.setState({dict})
    },
    
    inputChange : async (state,event) => {
        console.log(event.target.value)
        store.setState({[event.target.name] : event.target.value})
    },

    submitSearchHandler : (state) => {
        alert('masuk submit')
        store.setState({isLoading : true})
        try {
            const response = axios.get(`${baseUrl}?app_id=${app_id}&app_key=${app_key}&q=${initialState.keywords}`);
            console.log(response.data.hits)
            store.setState({ listRecipe: response.data.hits, isLoading : false});
        } catch (error) {
            console.error(error);
        }
    },
})