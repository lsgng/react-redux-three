export const fadeColor = (state, e) => {
    const newState = { ...state }
    const newColors = state.scene.spheres.colors.map((color) => {
        color.r = e.nativeEvent.clientX / window.innerWidth
        color.b = e.nativeEvent.clientY / window.innerHeight
        return color
    })
    newState.colors = newColors
    return newState
}

export const switchColor = (state) => {
    const newState = { ...state }
    const newColors = state.scene.spheres.colors.map((color) => {
        color.g = Math.random() * 0.5 + 0.5
        return color
    })
    newState.colors = newColors
    return newState
}

export const updatePosition = (state) => {
    const newState = { ...state }
    const newPositions = state.scene.spheres.positions.map((position) => {
        position.z = 2 * Math.sin(state.timestamp / 1000 + (position.x / 10) + (position.y / 10))
        return position
    })
    newState.scene.spheres.positions = newPositions
    return newState
}