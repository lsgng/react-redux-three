export const changeMaterial = (state) => {
    const newState = { ...state }
    const newChildren = state.scene.children.map((child) => {
        child.material.color.g = Math.random() * 0.5  + 0.5
        return child
    })
    newState.children = newChildren
    return newState
}

export const changeSize = (state, e) => {
    const newState = { ...state }
    const mouseX = e.nativeEvent.clientX / window.innerWidth
    const newChildren = state.scene.children.map((child) => {
        child.position.z = 1 + (10 * mouseX)
        return child
    })
    newState.children = newChildren
    return newState
}
export const rotate = (state) => {
    const newState = { ...state }
    //newState.scene.getObjectByName('box').position.y = 2 * Math.sin(Date.now() / 1000)
    return newState
}