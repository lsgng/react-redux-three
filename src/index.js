import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import App from './App';

const init = () => {
    console.log('init')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const container = document.getElementById('container');
    const renderer = new THREE.WebGLRenderer();
    container.appendChild(renderer.domElement);

    //renderer.setSize( window.innerWidth, window.innerHeight );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    animate();
};

ReactDOM.render(<App init={init} />, document.getElementById('root'));
