export const mapStateToScene = (sceneState, scene) => {
    sceneState.spheres.positions.forEach((position, index) => {
        scene.getObjectByName(index).position.set(position.x, position.y, position.z)
    })
}