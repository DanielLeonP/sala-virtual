import { Vector3 } from "three";
import useFollowCam from "../camera/useFollowCam"
import { ModelGLTF } from "./ModelGLTF";
import { Text } from "@react-three/drei";

export const MyPlayer = ({myId, path, rotation, x, y}) => {
    const { pivot } = useFollowCam();
    pivot.position.lerp(new Vector3(x,35,y)
        , 0.1)
    // console.log({path})
    return (
        <>

            <Text
                scale={[40, 40, 40]}
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[x, 35, y]}
            >
                {`Player (Yo)`}
            </Text>

            <ModelGLTF key={myId} glbPath={'/models/Spiderman.glb'}
                position={[x, 0, y]} rotation={rotation} scale={[16, 16, 16]}
                update={0.05} animation={13} />
        </>
    )
}
