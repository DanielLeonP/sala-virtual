import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({ gltfPath = 'models/sala.glb', position = [0, 0, 0], scale = [5, 5, 5] }) => {

    return (
        <>
            {/* <pointLight position={[10, 10, 10]} /> */}
            <Model gltfPath={gltfPath} position={position} scale={scale} />
        </>
    );
};

const Model = ({ gltfPath, position, scale }) => {
    const gltf = useLoader(GLTFLoader, gltfPath);
    return <primitive object={gltf.scene} position={position} scale={scale} />;
};

export default ModelViewer;