import * as THREE from 'three'

export const getThreeInitialState = () => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.x = 40 
    camera.position.y = 40 
    camera.position.z = 60

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 20; x++) {
            const geometry = new THREE.SphereGeometry(1, 32, 32)
            const material = new THREE.MeshBasicMaterial({ color: 0xffa500 })
            const sphere = new THREE.Mesh(geometry, material)
            sphere.position.x = x * 4
            sphere.position.y = y * 4
            scene.add(sphere)
        }
    }
    return { scene, camera }
}

export const getThreeRenderer = () => {
    const container = document.getElementById('container')
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(0xf0ffff)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    return renderer
}