export const mapStateToScene = (sceneState, scene) => {
    for (let i = 0; i < sceneState.spheres.positions.length; i++) {
        const  mesh = scene.getObjectByName(i)
        const color = sceneState.spheres.colors[i]
        const position = sceneState.spheres.positions[i]
        mesh.material.color = color
        mesh.position.set(position.x, position.y, position.z)
    }
}