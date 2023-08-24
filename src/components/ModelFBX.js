import React, { useEffect } from 'react';
import * as THREE from 'three';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useFBX } from '@react-three/drei'

// Para modelos FBX
export const ModelFBX = ({ fbxPath, reference, position, rotation, scale, update }) => {
    // const fbx = useLoader(FBXLoader, fbxPath);
    const fbx = useFBX(fbxPath);
    const mixer = new THREE.AnimationMixer(fbx);
    
    useEffect(() => {
        const animations = fbx.animations; // Las animaciones del modelo
        const actions = animations.map((clip) => mixer.clipAction(clip)); // Por cada animación se separan los clips de animación
        actions.forEach((action) => action.play()); // Por cada clip se reproduce la animación
        const animate = () => { // Configuración de la animación
            mixer.update(update);
            requestAnimationFrame(animate);
        };
        animate();

        return () => mixer.dispose();
    }, [fbx]);
  
    return <primitive ref={reference} object={fbx} position={position} rotation={rotation} scale={scale} />;
};
