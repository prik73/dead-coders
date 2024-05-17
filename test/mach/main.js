import * as three from 'three';
import { PerspectiveCamera, WebGLRenderer, PointLight, Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
import '/src/index.css'

const scene = new three.Scene();

const geometry = new BoxGeometry(3, 55, 55);

const material = new MeshStandardMaterial({
  color: 0x00ff83, 
});

const mesh = new Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  heigth : window.innerHeight
}

//lightin
const light = new PointLight("#FFFFFF", 1, 100);
light.position.set(0, 10, 10)
scene.add(light);


//adding a camera
const camera = new PerspectiveCamera(5, sizes.width / sizes.heigth, 0.1, 100);
camera.position.z = 15;
scene.add(camera);

//render karna hai

const canvas = document.querySelector("#webgl");
const renderer = new WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.heigth);

renderer.render(scene, camera);
