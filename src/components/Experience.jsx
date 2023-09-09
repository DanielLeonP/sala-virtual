import { Box, ContactShadows, Environment, OrbitControls, Text, useCursor } from "@react-three/drei";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { charactersAtom } from "./SocketManager";
import { PlayerViewer } from "./PlayerViewer";
import { ModelViewer } from "./ModelViewer";

export const Experience = ({ myId }) => {
  const [characters] = useAtom(charactersAtom);
  const [numberPlayers, setNumberPlayers] = useState(0);
  const [players, setPlayers] = useState([]);

  const masterPath = '/models/MasterChief.glb';

  useEffect(() => {
    const updatePlayers = [...players]; 
    characters.forEach((character, index) => {
      const existingCharacter = {
        id: character.id,
        path: masterPath,
        position: [character.position[0], character.position[1], character.position[2]],
        rotation: [0, character.rotation, 0],
        scale: [0.5, 0.5, 0.5],
        animation: index,
        update: 0.08,
      };
      updatePlayers[index] = existingCharacter;
      setPlayers(updatePlayers);
    })

    let numberCharacters = characters.length;
    if(numberPlayers == 0 || numberCharacters != numberPlayers){
      const characterIds = new Set(characters.map(character => character.id));
      const updatedPlayers = players.filter(player => characterIds.has(player.id));
      characters.forEach((character, index) => {
        const exist = updatedPlayers.some(player => player.id === character.id);
        if (!exist) {
          const newCharacter = {
            id: character.id,
            path: masterPath,
            position: [0, 0, 0],
            rotation: [0, 3, 0],
            scale: [0.5, 0.5, 0.5],
            animation: index,
            update: 0.08,
          };
          updatedPlayers.push(newCharacter);
        }
      });
      setNumberPlayers(updatedPlayers.length);
      setPlayers(updatedPlayers);
    }
  }, [characters]);

  // console.clear();
  // characters.map((character, index) => {
  //   console.log(`Player ${index}: Pos: ${character.position}`)
  // })

  return (
    <>
      <OrbitControls />
      <Environment files="/skyBox2.hdr" ground={{ height: 32, radius: 130 }} />

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
        players.map((player, index) => {
          return (<PlayerViewer key={player.id} myId={myId} index={index} player={player} />)
        })
      }
    </>
  );
};
