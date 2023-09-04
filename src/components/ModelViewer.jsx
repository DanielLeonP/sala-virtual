import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
    const gltfPath = 'models/sala.glb';

    return (
        // <Canvas>
        //     <ambientLight />
        <>
            {/* <pointLight position={[10, 10, 10]} /> */}
            <Model gltfPath={gltfPath} />
        </>
        // </Canvas>
    );
};

const Model = ({ gltfPath }) => {
    const gltf = useLoader(GLTFLoader, gltfPath);
    return <primitive object={gltf.scene} position={[0, 0, 0]} scale={[5, 5, 5]} />;
};

export default ModelViewer;