import {
    Box,
    Text
} from "@react-three/drei";

export const TempObject = ({ myId, character, index }) => {
    if (character.id === myId) {
        // setCameraPosition(
        //   [character.position[0],
        //   character.position[1],
        //   character.position[2]
        //   ]
        // );
        // console.log("Es mi ID")
        return (
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
                    {`Player ${index} (Yo)`}
                </Text>
                <Box color="#18a36e"
                    position={[character.position[0],
                    character.position[1],
                    character.position[2]
                    ]}
                    scale={[3, 3, 3]}
                />
            </>
        )
    }
    return (
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
    )
}
