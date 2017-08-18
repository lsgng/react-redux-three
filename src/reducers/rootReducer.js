import { changeMaterial, rotate } from '../threeApp/threeActionHelpers'

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MATERIAL': {
            const newState = changeMaterial(state)
            return {
                ...newState,
                lastAction: 'CHANGE_MATERIAL'
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