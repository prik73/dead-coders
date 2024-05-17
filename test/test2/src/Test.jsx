// MagicComponent.js
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import Environment from './Enviorment';

const Test = () => {
  const [font, setFont] = useState(null);
  const [particle, setParticle] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    const preload = () => {
      let manager = new THREE.LoadingManager();
      manager.onLoad = function () {
        const environment = new Environment(font, particle);
        setScene(environment.scene);
        setCamera(environment.camera);
        setRenderer(environment.renderer);
      };

      const loader = new THREE.FontLoader(manager);
      loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function (font) {
        setFont(font);
      });
      new THREE.TextureLoader(manager).load('https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png', function (texture) {
        setParticle(texture);
      });
    };

    if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll))
      preload();
    else document.addEventListener('DOMContentLoaded', preload);

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return <div id="magic" />;
};

export default Test;
