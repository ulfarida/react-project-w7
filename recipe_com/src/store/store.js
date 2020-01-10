import createStore from 'unistore';
import axios from 'axios';

const initialState = { 
                fullname :'',
                username : '',
                password : '',
                email : '',
                token : '',
                auth : false,
                profilePicture : '',
                search: '',
                listRecipe: [],
                isLoading: true,
                data: {},
                recipeData: {},
                selectedNutritiens : '',
                category : ''
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