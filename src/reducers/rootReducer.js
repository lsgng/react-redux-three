
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RUN':
            return Object.assign({}, state, { running: true })
        default:
            return state
    }
}

export default rootReducer;