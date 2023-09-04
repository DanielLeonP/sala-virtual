import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { ModelFBX } from '../components/ModelFBX.js'
import { ModelGLTF } from '../components/ModelGLTF.js'

const ShrekModel = ({ animacion, deltaMovement, positionTest }) => {
    const [modelo, setModelo] = useState(null);
    const [xPosBefore, setXPosBefore] = useState(0);
    const [zPosBefore, setZPosBefore] = useState(0);
    const [position, setPosition] = useState([0, 0, 0]);
    const [rotationBefore, setRotationBefore] = useState(0);
    const [rotation, setRotation] = useState(0);

    const modelPathFBX = './models/Shrek.fbx';
    const modelPathGLB = './models/Shrek.glb';
    const homeroPath = './models/Homero Dona.glb';
    const elitePath = './models/Elite.glb';
    const masterPath = './models/MasterChief.glb';
    const group = useRef();

    useEffect(() => {
        let x = deltaMovement[0] + xPosBefore;
        let z = deltaMovement[2] + zPosBefore;
        setXPosBefore(x);
        setZPosBefore(z);
        setPosition([x, 0, z]);
        let anguloRadianes = (animacion != 6) ? Math.atan2(deltaMovement[2], deltaMovement[0]) : Math.atan2(deltaMovement[0], deltaMovement[2]);
        let anguloGrados = (anguloRadianes * (180 / Math.PI)) + 270;
        setRotationBefore((anguloGrados * 0.0175))
        rotationBefore == 4.7250000000000005 ? setRotationBefore(rotation) : setRotation(rotationBefore);
        
        switch(animacion){
            case 0: // Nada
                setModelo(<></>)
                break;
            case 1: // Salto
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[0, 0, 0]} scale={0.04} update={0.03} animation={6} />)

                break;
            case 2: // Baile
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[1.5, 0, rotation]} scale={0.3} update={0.03} animation={0} />)
                break;
            case 3: // Patada
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[1.5, 0, rotation]} scale={0.3} update={0.03} animation={5} />)
                break;
            case 4: // Muerte
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[1.5, 0, rotation]} scale={0.3} update={0.03} animation={4} />)
                break;
            case 5: // Todos
                setModelo(<>
                    <ModelFBX fbxPath={modelPathFBX} reference={group} position={[20, 0, 20]} rotation={[0, 180, 0]} scale={[1, 1, 1]} update={0.05} />
                    <ModelGLTF glbPath={modelPathGLB} reference={group} position={[0, 0, 0]} rotation={[0, 45, 0]} scale={[100, 100, 100]} update={1} animation={-2} />
                    <ModelGLTF glbPath={homeroPath} reference={group} position={[-5, 0, 30]} rotation={[0, 90, 0]} scale={20} update={0.08} animation={-2} />
                    <ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[1.5, 0, rotation]} scale={0.3} update={0.03} animation={0} />
                </>)
                break;
            case 6: // Pose Normal
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[0, rotation , 0]} scale={0.3} update={0.03} animation={-1} />)
                break;
            default:
                setModelo(<></>)
                break;
        }
    }, [animacion, deltaMovement, xPosBefore, zPosBefore])

    return (
        <>
            {modelo}
        </>
    );
};

export default ShrekModel;