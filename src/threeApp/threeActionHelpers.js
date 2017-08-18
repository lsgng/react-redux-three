export const changeMaterial = (state) => {
    const newState = { ...state }
    newState.scene.getObjectByName('box').material.wireframe = !newState.scene.getObjectByName('box').material.wireframe
    return newState
}

export const rotate = (state) => {
    const newState = { ...state }
    newState.scene.getObjectByName('box').position.y = 2 * Math.sin(Date.now() / 1000)
    return newState
}