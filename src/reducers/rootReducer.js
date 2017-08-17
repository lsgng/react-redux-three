
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RUN':
            return {
                ...state,
                running: true,
            }
        case 'UPDATE':
            return {
                ...state,
                timestamp: Date.now() - action.timestamp,
                frame: state.frame += 1,
            }
        default:
            return state
    }
}

export default rootReducer;