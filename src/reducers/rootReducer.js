import runThreeApp from '../threeApp/runThreeApp'

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RUN':
            runThreeApp()
            return { running: true };
        default:
            return state
    }
}

export default rootReducer;