import runThreeApp from '../runThreeApp'

const app = (state, action) => {
    switch (action.type) {
        case 'RUN':
            runThreeApp()
            return { running: true };
        default:
            return state
    }
}

export default app;