
// Reducer
function pageReducer (state = null, action) {  
    switch(action.type){
        case "GO_HOME":
            return action.payload
        case "POST_ADD":
            return action.payload
        case "POST_VIEW":
            return action.payload
        default:
            return state 
    }
}

export default pageReducer