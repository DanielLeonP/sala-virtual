import {
  Box,
  ContactShadows,
  Environment,
  OrbitControls,
  Text,
  useCursor,
} from "@react-three/drei";

import { useAtom } from "jotai";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { AnimatedWoman } from "./AnimatedWoman";
import { charactersAtom, socket } from "./SocketManager";
import ModelViewer from "./ModelViewer";

export const Experience = () => {
  const [characters] = useAtom(charactersAtom);

  // console.clear();
  // characters.map((character, index) => {
  //   console.log(`Player ${index}: Pos: ${character.position}`)
  // })

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
      {/* <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        <planeGeometry args={[10, 10]} />
      </mesh> */}

      {/* <ModelViewer /> */}
      {
        characters.map((character, index) => (
          <>
            <Text
              scale={[10, 10, 10]}
              color="black" // default
              anchorX="center" // default
              anchorY="middle" // default
              position={[character.position[0],
                5,
              character.position[2]
              ]}
            >
              {`Player ${index}`}
            </Text>
            <Box color="#18a36e"
              position={[character.position[0],
              character.position[1],
              character.position[2]
              ]}
              scale={[3, 3, 3]}
            />
          </>

          // <ModelViewer
          //   key={character.id}
          //   gltfPath={'models/Shrek.glb'}
          //   position={
          //     [character.position[0],
          //     character.position[1],
          //     character.position[2]
          //     ]
          //   }
          //   scale={[10, 10, 10]}
          // />
        ))
      }
    </>
  );
};


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