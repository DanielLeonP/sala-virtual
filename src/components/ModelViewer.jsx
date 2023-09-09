import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const ModelViewer = ({ gltfPath = 'models/sala.glb', position = [0, 0, 0], scale = [5, 5, 5] }) => {
    const gltf = useLoader(GLTFLoader, gltfPath);

    return (
        <>
            <primitive object={gltf.scene} position={position} scale={scale} />
        </>
    );
};