import React, { useEffect } from 'react';
import * as THREE from 'three';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useGLTF } from '@react-three/drei'

// Para modelos GLB
export const ModelGLTF = ({ glbPath, reference, position, rotation, scale, update, animation }) => {
    // const glb = useLoader(GLTFLoader, glbPath);
    const glb = useGLTF(glbPath);
    const mixer = new THREE.AnimationMixer(glb.scene);

    useEffect(() => {
        const animations = glb.animations;
        const actions = animations.map((clip) => mixer.clipAction(clip));
        if(animation == -2){
            actions.forEach((action) => action.play());
        }else if(animation != -1){
            actions[animation].play()
        }

        const animate = () => {
            mixer.update(update);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            mixer.stopAllAction();
            mixer.uncacheRoot(glb.scene);
        };
    }, [glb.animations, mixer]);

    if(animation == -2){
        return <primitive ref={reference} object={glb.scene} position={position} rotation={rotation} scale={scale} />;
    }

    return <primitive ref={reference} object={glb.scene.children[0]} position={position} rotation={rotation} scale={scale} />;
};