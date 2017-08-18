import { switchColor, fadeColor, rotate } from '../threeApp/threeActionHelpers'

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'SWITCH_COLOR': {
            const newState = switchColor(state)
            return {
                ...newState,
                lastAction: 'SWITCH_COLOR'
            }
        }
        case 'FADE_COLOR': {
            const newState = fadeColor(state, action.e)
            return {
                ...newState,
                lastAction: 'FADE_COLOR'
            }
        }
        case 'RUN':
            return {
                ...state,
                running: true,
                lastAction: 'RUN',
            }
        case 'UPDATE': {
            const newState = rotate(state)
            return {
                ...newState,
                lastAction: 'UPDATE',
            }
        }
        default:
            return state
    }
}

export default rootReducer;