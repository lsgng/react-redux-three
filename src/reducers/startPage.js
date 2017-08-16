import runThreeApp from '../threeApp/runThreeApp'

const startPage = (state = null, action) => {
    switch (action.type) {
        case 'RUN':
            runThreeApp()
            return { running: true };
        default:
            return state
    }
}

export default startPage;