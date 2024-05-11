import * as THREE from 'three';
import './index.css'

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 55, 55);

const material = new THREE.MeshStandardMaterial({
  color: "#00ff83"
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  heigth : window.innerHeight
}

//lightin
const light = new THREE.PointLight("#FFFFFF", 1, 100);
light.position.set(0, 10, 10)
scene.add(light);


//adding a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.heigth, 0.1, 100);
camera.position.z = 20;
camera.position.y = 0.1;
camera.position.x = 0;
scene.add(camera);

//render karna hai

const canvas = document.querySelector("#webgl");
const rendererr = new THREE.WebGLRenderer({ canvas });

rendererr.setSize(sizes.width, sizes.heigth);

rendererr.render(scene, camera);




