const GO_HOME = "GO_HOME"
const POST_ADD = "POST_ADD"
const POST_VIEW = "POST_VIEW"

// Action creators
export function goToHomeScreen() {
    return{
        type: GO_HOME,
        payload: '/'
    }
}

export function goToPosts() {
    return{
        type: POST_ADD,
        payload: '/addpost'
    }
}

export function goToPost(id) {
    return{
        type: POST_VIEW,
        payload: `/post/${id}`
    }
}

