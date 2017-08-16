
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RUN':
            return { running: true };
        default:
            return state
    }
}

export default rootReducer;