// Environment.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import CreateParticles from './CreateParticles';

const Environment = ({ font, particle }) => {
  let scene, camera, renderer, createParticles;

  useEffect(() => {
    setup();
    bindEvents();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const setup = () => {
    scene = new THREE.Scene();
    createCamera();
    createRenderer();
    loadFont();
  };

  const bindEvents = () => {
    window.addEventListener('resize', onWindowResize);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const createCamera = () => {
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 100);
  };

  const createRenderer = () => {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.setAnimationLoop(() => {
      createParticles.render();
      renderer.render(scene, camera);
    });
  };

  const loadFont = () => {
    const loader = new THREE.FontLoader();
    loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function (font) {
      createParticles = new CreateParticles(scene, font, particle, camera, renderer);
    });
  };

  return null;
};

export default Environment;
