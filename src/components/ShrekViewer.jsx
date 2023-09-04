import React, { useRef, useEffect, useState } from 'react';
import { ModelFBX } from '../components/ModelFBX.js'
import { ModelGLTF } from '../components/ModelGLTF.js'

const ShrekModel = ({ animacion, position }) => {
    const [modelo, setModelo] = useState(null);
    const modelPathFBX = './models/Shrek.fbx';
    const modelPathGLB = './models/Shrek.glb';
    const homeroPath = './models/Homero Dona.glb';
    const elitePath = './models/Elite.glb';
    const masterPath = './models/MasterChief.glb';
    const group = useRef();

    useEffect(() => {
        switch(animacion){
            case 0: // Nada
                setModelo(<></>)
                break;
            case 1: // Salto
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={position} rotation={[0, 0, 0]} scale={0.04} update={0.03} animation={6} />)
                break;
            case 2: // Baile
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={[0, 0, 0]} rotation={[1.5, 0, 0]} scale={0.3} update={0.03} animation={0} />)
                break;
            case 3: // Patada
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={[0, 0, 0]} rotation={[1.5, 0, 0]} scale={0.3} update={0.03} animation={5} />)
                break;
            case 4: // Muerte
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={[0, 0, 0]} rotation={[1.5, 0, 0]} scale={0.3} update={0.03} animation={4} />)
                break;
            case 5: // Todos
                setModelo(<>
                    <ModelFBX fbxPath={modelPathFBX} reference={group} position={[20, 0, 20]} rotation={[0, 180, 0]} scale={[1, 1, 1]} update={0.05} />
                    <ModelGLTF glbPath={modelPathGLB} reference={group} position={[0, 0, 0]} rotation={[0, 45, 0]} scale={[100, 100, 100]} update={1} animation={-2} />
                    <ModelGLTF glbPath={homeroPath} reference={group} position={[-5, 0, 30]} rotation={[0, 90, 0]} scale={20} update={0.08} animation={-2} />
                    <ModelGLTF glbPath={masterPath} reference={group} position={[50, 0, 20]} rotation={[1.5, 0, 0]} scale={0.3} update={0.03} animation={0} />
                </>)
                break;
            case 6: // Pose Normal
                setModelo(<ModelGLTF glbPath={masterPath} reference={group} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.3} update={0.03} animation={-1} />)
                break;
            default:
                setModelo(<></>)
                break;
        }
    }, [animacion])

    return (
        <>
            {modelo}
        </>
    );
};

export default ShrekModel;