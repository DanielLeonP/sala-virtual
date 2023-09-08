import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";

export const Camera = ({ position }) => {
    const cameraRef = useRef();
    console.log("Cambiando posición de la camara")
    useFrame(() => {
      // Update the camera's position to follow the target object
      const [x, y, z] = position;
      cameraRef.current.position.set(x+8, y+8, z + 8); // Adjust the offset as needed
    });
  
    return (
      <PerspectiveCamera
        makeDefault // This makes this camera the default camera for the scene
        ref={cameraRef}
        fov={100}
        // aspect={window.innerWidth / window.innerHeight}
        // near={0.1}
        // far={1000}
        position={[8, 8, 8]} // Initial camera position
      />
    );
};
