export const mapStateToScene = (sceneState, scene) => {
    sceneState.spheres.positions.forEach((position, index) => {
        scene.getObjectByName(index).position.set(position.x, position.y, position.z)
    })

    sceneState.spheres.colors.forEach((color, index) => {
        scene.getObjectByName(index).material.color = color
    })
}