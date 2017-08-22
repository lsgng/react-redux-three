export const fadeColor = (state, e) => {
    const newState = { ...state }
    /*const newChildren = state.scene.children.map((child) => {
        child.material.color.r = e.nativeEvent.clientX / window.innerWidth
        child.material.color.b = e.nativeEvent.clientY / window.innerHeight
        return child
    })
    newState.children = newChildren*/
    return newState
}

export const switchColor = (state) => {
    const newState = { ...state }
    /*const newChildren = state.scene.children.map((child) => {
        child.material.color.g = Math.random() * 0.5 + 0.5
        return child
    })
    newState.children = newChildren*/
    return newState
}

export const updatePosition = (state) => {
    const newState = { ...state }
    /*const newChildren = state.scene.children.map((child) => {
        child.position.z = 2 * Math.sin(Date.now() / 1000 + (child.position.x / 10) + (child.position.y / 10))
        return child
    })
    newState.children = newChildren*/
    return newState
}