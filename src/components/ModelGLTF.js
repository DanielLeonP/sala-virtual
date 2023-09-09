import React, { useEffect, useState } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Para modelos GLB
export const ModelGLTF = ({ glbPath, position, rotation, scale, update, animation }) => {
  const [model, setModel] = useState(null);
  const [mixer, setMixer] = useState(null); // Para gestionar las animaciones
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(glbPath, (glb) => {
        const characterModel = glb.scene;
        setModel(characterModel);

        const animMixer = new THREE.AnimationMixer(characterModel);
        const animations = glb.animations;
        const actions = animations.map((clip) => animMixer.clipAction(clip));
        if(animation == -2){
            actions.forEach((action) => action.play());
        }else if(animation != -1){
            actions[animation].play()
        }
        setMixer(animMixer);
        setAnimations(actions);

        // characterModel.position.set(position[0], position[1], position[2]);
        // characterModel.rotation.set(rotation[0], rotation[1], rotation[2]);
        // characterModel.scale.set(scale[0], scale[1], scale[2]);

        const animate = () => {
            animMixer.update(update);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            animMixer.stopAllAction();
            animMixer.uncacheRoot(glb.scene);
        };
    });
  }, [glbPath, update, animation]);

  return model ? <primitive object={model} position={position} rotation={rotation} scale={scale} /> : null;
};
