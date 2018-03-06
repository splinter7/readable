
const GO_HOME = "GO_HOME"
const POST_ADD = "POST_ADD"

// Action creaters
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