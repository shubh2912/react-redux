export default function (initialState={},action){
    switch(action.type) {
        case 'GET_LATEST': 
            return{...initialState,latest:action.payload}
        case 'GET_ARTICLE':
            return{...initialState,article:action.payload}
        case 'GET_SELECTED_NEWS':
            return{...initialState,selected:action.payload}
        case 'CLEAR_NEWS':
            return{...initialState,selected:action.payload}
        case 'HANDLE_LIKES':
            return{...initialState,selected:[action.payload]}
        default:
            return initialState

    }
}