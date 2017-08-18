import { switchColor, fadeColor, updatePosition } from '../threeApp/threeActionHelpers'

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'FADE_COLOR': {
            const newState = fadeColor(state, action.e)
            return {
                ...newState,
                lastAction: 'FADE_COLOR'
            }
        }
        case 'SWITCH_COLOR': {
            const newState = switchColor(state)
            return {
                ...newState,
                lastAction: 'SWITCH_COLOR'
            }
        }
        case 'RUN':
            return {
                ...state,
                running: true,
                lastAction: 'RUN',
            }
        case 'UPDATE': {
            const newState = {
                ...state,
                timestamp: action.timestamp,
                lastAction: 'UPDATE',
            }
           return updatePosition(newState)
        }
        default:
            return state
    }
}

export default rootReducer;