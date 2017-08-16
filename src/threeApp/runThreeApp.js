import * as THREE from 'three';

const runThreeApp = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const container = document.getElementById('container');
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xf0ffff)
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    camera.position.z = 5;

    const animate = () => {
        box.rotation.x += 0.05;
        box.rotation.y += 0.05;

        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    };

    animate();
};

export default runThreeApp;