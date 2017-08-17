import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const box = new THREE.Mesh(geometry, material);
box.name = 'box'
scene.add(box);

camera.position.z = 5;

export default {scene, camera}