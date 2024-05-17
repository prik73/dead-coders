// CreateParticles.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

const CreateParticles = ({ scene, font, particleImg, camera, renderer }) => {
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2(-200, 200);
  let colorChange = new THREE.Color();
  let buttom = false;
  let data = {
    text: 'FUTURE\nIS NOW',
    amount: 1500,
    particleSize: 1,
    particleColor: 0xffffff,
    textSize: 16,
    area: 250,
    ease: 0.05,
  };

  useEffect(() => {
    setup();
    bindEvents();

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const setup = () => {
    // Create particles geometry and material
  };

  const bindEvents = () => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    // Handle mouse down event
  };

  const onMouseMove = () => {
    // Handle mouse move event
  };

  const onMouseUp = () => {
    // Handle mouse up event
  };

  const render = () => {
    // Render method
  };

  return null;
};

export default CreateParticles;
