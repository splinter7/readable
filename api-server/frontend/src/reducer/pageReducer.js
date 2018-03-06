
// Reducer
function pageReducer (state = '', action) {    
    switch(action.type){
        case "GO_HOME":
            return action.payload
        case "POST_ADD":
            return action.payload
        default:
            return state 
    }
}

export default pageReducer