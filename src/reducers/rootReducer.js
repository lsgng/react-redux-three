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
        case 'CHANGE_MATERIAL':
            return state.running ? changeMaterial(state) : state
        case 'RUN':
            return {
                ...state,
                running: true,
            }
        case 'UPDATE':
            const newState = {
                ...state,
                timestamp: Date.now() - action.timestamp,
                frame: state.frame += 1,
            }
            return rotate(newState)
        default:
            return state
    }
}

export default rootReducer;