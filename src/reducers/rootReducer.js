import { changeMaterial, changeSize, rotate } from '../threeApp/threeActionHelpers'

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MATERIAL': {
            const newState = changeMaterial(state)
            return {
                ...newState,
                lastAction: 'CHANGE_MATERIAL'
            }
        }
        case 'CHANGE_SIZE': {
            const newState = changeSize(state, action.e)
            return {
                ...newState,
                lastAction: 'CHANGE_SIZE'
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