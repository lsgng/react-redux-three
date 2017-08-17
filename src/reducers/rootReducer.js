const changeMaterial = (state) => {
    const newState = { ...state }
    newState.scene.getObjectByName('box').material.wireframe = !newState.scene.getObjectByName('box').material.wireframe
    return newState
}

const rotate = (state) => {
    const newState = { ...state }
    newState.scene.getObjectByName('box').position.y = 2 * Math.sin(Date.now() / 1000)
    return newState
}

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