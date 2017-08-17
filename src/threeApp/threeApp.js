import * as THREE from 'three'

export const getThreeInitialState = () => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500 })
    const box = new THREE.Mesh(geometry, material)
    box.name = 'box'
    scene.add(box)

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