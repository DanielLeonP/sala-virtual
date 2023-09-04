import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";

import { useAtom } from "jotai";
import { Suspense, useState } from "react";
import { AnimatedWoman } from "./AnimatedWoman";
import { charactersAtom, socket } from "./SocketManager";
// import ShrekModel from "../ShrekViewer";
import ShrekViewer from './ShrekViewer.jsx'
export const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  return (
    <>
      {/* Configuraciones de escena */}
      {/* <Environment preset="sunset" /> */}
      {/* <ambientLight intensity={0.3} /> */}
      {/* <ContactShadows blur={2} /> */}
      <OrbitControls />

      <Environment files="/skyBox2.hdr" ground={{ height: 32, radius: 130 }} />

      {/* <ShrekViewer animacion={1} /> */}



      {/* MI PERSONAJE INFORMACION PARA ENVIAR CUANDO SE MUEVA */}
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        {/* REMPLAZAR PLANEGEOMETRY POR LA SALA */}
        <planeGeometry args={[10, 10]} />

        {/* <meshStandardMaterial color="#f0f0f0" /> */}
      </mesh>
      {characters.map((character) => (

        // AQUI SE RENDERIZA CADA PERSONAJE
        <ShrekViewer
          animacion={1}
          key={character.id}
          position={
            [character.position[0],
            character.position[1],
            character.position[2]]
          }
        />

        // <AnimatedWoman
        //   key={character.id}
        //   position={
        //     new THREE.Vector3(
        //       character.position[0],
        //       character.position[1],
        //       character.position[2]
        //     )
        //   }
        //   hairColor={character.hairColor}
        //   topColor={character.topColor}
        //   bottomColor={character.bottomColor}
        // />
      ))}
    </>
  );
};
