import React, { useEffect, useState } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Para modelos GLB con animaciones
export const ModelGLTF = ({ glbPath, position, rotation, scale, update, animation }) => {
  const [model, setModel] = useState(null); // Modelo cargado
  const [mixer, setMixer] = useState(null); // Para gestionar las animaciones
  const [animations, setAnimations] = useState([]); // Animaciones del modelo

  useEffect(() => {
    const loader = new GLTFLoader(); // Loader del tipo de archivo .glb

    // Carga del modelo, donde se le da el path del modelo
    loader.load(glbPath, (glb) => {
        const characterModel = glb.scene; // Modelo
        setModel(characterModel);
        
        const animMixer = new THREE.AnimationMixer(characterModel); // Mixer para controlar el esqueleto de las animaciones
        const animations = glb.animations; // Animaciones disponibles en el modelo
        // console.log(animations)
        const actions = animations.map((clip) => animMixer.clipAction(clip)); // Por cada animación se le da el moviento en un clip que se puede reproducir
        if(animation == -2){ // Si la animación es -2 se reproducen todas las animaciones a la vez
            actions.forEach((action) => action.play());
        }else if(animation != -1){ // Si no es -1 quieres reproducir una animación en especifica, pero si es -1 aparecera en T-Pose
            actions[animation].play() // Se reproduce la animación seleccionada
        }
        setMixer(animMixer);
        setAnimations(actions);

        // characterModel.position.set(position[0], position[1], position[2]);
        // characterModel.rotation.set(rotation[0], rotation[1], rotation[2]);
        // characterModel.scale.set(scale[0], scale[1], scale[2]);

        //Función para establecer las características principales de la animación del modelo
        const animate = () => {
            animMixer.update(update); // Se le da una velocidad a la animación reproduciendose, el animMixer contiene la animación
            requestAnimationFrame(animate); // Se vuelve a reproducir la animación despues de que termine
        };
        animate();

        return () => {
            animMixer.stopAllAction(); // Se elimina y para la instancia de la animación reproduciendose para que no sea un loop donde se termina y el objeto se queda en el último frame de la animación sin dar paso a la siguiente
            animMixer.uncacheRoot(glb.scene); // Se libera la caché que utilizaba la reproducción de la animación
        };
    });
  }, [glbPath, update, animation]);

  // Se retorna el modelo con todas sus características
  return model ? <primitive object={model} position={position} rotation={rotation} scale={scale} /> : null;
};
