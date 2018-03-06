import api from '../api/api'

const FETCH_POSTS = "FETCH_POSTS"

export async function getAllPosts (dispatch) {
    const response = await api.get('posts')
    if (response.ok && response.data) {
        dispatch(fetchAction(response.data))
    }
}

// Action creater
export function fetchAction(posts){
    return { 
        type: FETCH_POSTS,
        payload: posts
    };
}

export function getPosts() {
    const request = api.get('posts')

    return (dispatch) => {
        request.then(({data}) =>{
            dispatch({
                type: FETCH_POSTS,
                payload: data
            })
        })
    }
}