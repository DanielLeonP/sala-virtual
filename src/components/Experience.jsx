import { Box, ContactShadows, Environment, OrbitControls, Text, useCursor } from "@react-three/drei";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { charactersAtom, socket } from "./SocketManager";
import { PlayerViewer } from "./PlayerViewer"; // Para cargar modelos con animaciones
import { ModelViewer } from "./ModelViewer"; // Para cargar modelos sin animaciones
import { useFrame } from "@react-three/fiber";
import useFollowCam from "../camera/useFollowCam";
import { Vector3 } from "three";
import { ModelGLTF } from "./ModelGLTF";
import { MyPlayer } from "./MyPlayer";

export const Experience = ({ myId, xPos, yPos, rotation, animation }) => {
  const [characters] = useAtom(charactersAtom); // Recuperar los characters conectados al socket
  const [numberPlayers, setNumberPlayers] = useState(0); // Cantidad de jugadores que hay en la escena
  const [players, setPlayers] = useState([]); // Los jugadores y sus atributos

  // CAMBIAR POR EL MODELO REAL CON SUS ANIMACIONES CUANDO SE TENGA
  const path = '/models/Spiderman.glb'; // Path del modelo 3D del jugador

  // useEffect(() => {
  //   setPlayers(characters);
  // }, [characters])

  useEffect(() => {
    const updatePlayers = [...players]; // Copia de los jugadores actuales
    characters.forEach((character, index) => { // Por cada persona que se encuentre conectada al socket se actualizan sus datos
      // Se actualizan los atributos del jugador
      const existingCharacter = {
        id: character.id, // Su ID
        path: path, // El path donde se recupera su modelo 3D
        position: [character.position[0], character.position[1], character.position[2]], // La posición actual en la escena
        rotation: [0, character.rotation, 0], // Su rotación actual en la escena
        scale: [16, 16, 16], // La escala que tiene en la escena
        animation: character.animation, // La animación que se está reproduciendo
        update: 0.05, // La velocidad a la que se reproduce la animación
      };
      updatePlayers[index] = existingCharacter; // En la posición de la persona conectada se actualizan sus datos
      setPlayers(updatePlayers); // Se actualiza la lista de jugadores que existen actualmente
    })

    let numberCharacters = characters.length; // Cantidad de personas conectadas al socket
    if (numberPlayers == 0 || numberCharacters != numberPlayers) { // Se comprueba que sea igual a la cantidad de jugadores actuales, si no lo es, o es 0, significa que hay un cambio y debe agregarse o quitarse algún player
      const characterIds = new Set(characters.map(character => character.id)); // Se mapean los IDs de las personas conectadas al socket
      const updatedPlayers = players.filter(player => characterIds.has(player.id)); // Se filtra para saber qué jugadores entonces deberían seguir conectados
      characters.forEach((character, index) => { // Por cada persona conectada al socket
        const exist = updatedPlayers.some(player => player.id === character.id); // Se busca que ya exista en el filtro anterior, de esta forma no se creara de nuevo
        if (!exist) { // Si se detecta que no existe, es un jugador nuevo y debe instanciarse con atributos comunes para todos
          const newCharacter = {
            id: character.id, // Su ID
            path: path, // El path donde se recupera su modelo 3D
            position: [0, 0, 0], // La posición actual en la escena
            rotation: [0, 3, 0], // Su rotación actual en la escena
            scale: [16, 16, 16], // La escala que tiene en la escena
            animation: 13, // La animación que se está reproduciendo
            update: 0.05, // La velocidad a la que se reproduce la animación
          };
          updatedPlayers.push(newCharacter); // Se agrega el jugador nuevo
        }
      });
      setNumberPlayers(updatedPlayers.length); // Se actualiza la cantidad de jugadores actuales en la escena
      setPlayers(updatedPlayers); // Se actualiza la lista de los jugadores y sus atributos
    }
  }, [characters]);

  // console.clear();
  // characters.map((character, index) => {
  //   console.log(`Player ${index}: Pos: ${character.position}`)
  // })





  const [x, setX] = useState(0); // Posición del player en horizontal
  const [y, setY] = useState(0); // Posición del player en vertical

  // const { pivot } = useFollowCam()
  useFrame(() => {
    if (xPos != 0 && yPos != 0) {
      // console.log({ x, y })
      setX(x + xPos);
      setY(y + yPos);


      // console.log({ pivot: pivot, x, y });


      // rotation, animacion
      socket.emit("data", [x, 0, y], rotation, animation); // Se manda al socket position y rotation del player
    }
    // pivot.position.lerp(new Vector3([50,50,50]), 0.1);

  });


  // , 0.1)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setX(x + xPos);
  //     setY(y + yPos);
  //     setDeltaMovement([x, 3, y]);

  //     // if (xPos != 0 && yPos != 0) {
  //     //   setAnimacion(12);
  //     //   let anguloRadianes = Math.atan2(xPos, yPos);
  //     //   let anguloGrados = (anguloRadianes * (180 / Math.PI));
  //     //   setRotationBefore((anguloGrados * 0.0175))
  //     //   rotationBefore == 4.7250000000000005 ? setRotationBefore(rotation) : setRotation(rotationBefore);
  //     // } else {
  //     //   setAnimacion(13);
  //     // }
  //   }, 1);
  // }, [x, y, xPos, yPos]);





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

      <ModelViewer />
      {/* { console.log(players) } */}
      {
        players.map((player, index) => {
          return (<PlayerViewer key={player.id} myId={myId} index={index} player={player} />)
        })
      }
      <MyPlayer myId={myId} path={path} rotation={[0, 3, 0]} x={x} y={y} />
    </>
  );
};
