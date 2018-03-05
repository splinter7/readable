import api from '../api/api'

const FETCH_POSTS = "FETCH_POSTS"

export async function getAllPosts (dispatch) {
    const response = await api.get('')
    if (response.ok && response.data) {
        dispatch(fetchAction(response.data))
    }
}

// Action
export function fetchAction(posts){
    return { 
        type: FETCH_POSTS,
        payload: posts
    };
}