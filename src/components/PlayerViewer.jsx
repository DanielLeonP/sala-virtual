import { Text } from "@react-three/drei";
import { ModelGLTF } from './ModelGLTF.js'
import { useEffect, useState } from 'react';

export const PlayerViewer = ({ myId, index, player }) => {
    if(player.id === myId){
        return(
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
    return(
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