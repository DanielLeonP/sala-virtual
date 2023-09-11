import { Text } from "@react-three/drei";
import { ModelGLTF } from './ModelGLTF.js'
import { useEffect, useState } from 'react';
import useFollowCam from "../camera/useFollowCam.jsx";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export const PlayerViewer = ({ myId, index, player }) => {
    // const { pivot } = useFollowCam()
    // useFrame(() => {
    // if (player.id === myId) {
    //     pivot.position.lerp(new Vector3(player.position[0],
    //         player.position[1] + 35,
    //         player.position[2] - 20)
    //         , 0.1)
    // }
    // })
    // Si es el jugador que esta controlando el socket, se le da una estilización y características personalizadas
    if (player.id === myId) {
        // pivot.position.lerp(new Vector3(player.position[0],
        //     player.position[1] + 35,
        //     player.position[2] - 20)
        //     , 0.1)
        return (
            <>
                <Text
                    scale={[40, 40, 40]}
                    color="black"
                    anchorX="center"
                    anchorY="middle"
                    position={[
                        player.position[0],
                        player.position[1] + 35,
                        player.position[2],
                    ]}
                >
                    {`Player ${index} (Yo)`}
                </Text>
                <ModelGLTF key={player.id} glbPath={player.path} position={player.position} rotation={player.rotation} scale={player.scale} update={player.update} animation={player.animation} />
            </>
        )
    }
    return (
        <>
            <Text
                scale={[40, 40, 40]}
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[
                    player.position[0],
                    player.position[1] + 35,
                    player.position[2],
                ]}
            >
                {`Player ${index}`}
            </Text>
            <ModelGLTF key={player.id} glbPath={player.path} position={player.position} rotation={player.rotation} scale={player.scale} update={player.update} animation={player.animation} />
        </>
    )
}