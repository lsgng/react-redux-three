export const changeMaterial = (state) => {
    const newState = { ...state }
    const newChildren = state.scene.children.map((child) => {
        child.material.color.r = Math.random()
        child.material.color.g = Math.random()
        child.material.color.b = Math.random()
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