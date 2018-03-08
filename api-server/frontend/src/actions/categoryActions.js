import api from '../api/api'

// Types
const GET_CATEGORIES = "GET_CATEGORIES"


// Action creators
export function getCategories() {
    const request = api.get('categories')

    return (dispatch) => {
        request.then(({data}) =>{
            dispatch({
                type: GET_CATEGORIES,
                payload: data.categories
            })
        })
    }
}