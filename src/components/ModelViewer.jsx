import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Para modelos GLB sin animaciones
export const ModelViewer = ({ gltfPath = 'models/sala.glb', position = [0, 0, 0], scale = [5, 5, 5] }) => {
    const gltf = useLoader(GLTFLoader, gltfPath); // Loader del tipo de archivo .glb donde se le da el path del modelo a cargar

    // Se retorna el modelo con todas sus características
    return (
        <>
            <primitive object={gltf.scene} position={position} scale={scale} />
        </>
    );
};