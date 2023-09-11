import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import { Environment, ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import ModelViewer from './components/ModelViewer.jsx'
// import ShrekViewer from './components/ShrekViewer.jsx'
import { MenuAnimations } from './components/MenuAnimations.js'
import { Experience } from './components/Experience.jsx'
import { SocketManager, socket } from './components/SocketManager.jsx'
import { JoystickButton } from './components/JoystickButton.js'
import { KeyboardButton } from './components/KeyboardButton.js'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Camera } from './components/Camera.jsx'

// DESCARGAR MODELOS DE https://drive.google.com/drive/folders/1654D1Dti8cekUzB5c5rpE4EMnRr2V9Ko?usp=sharing
// PONERLOS EN public/models/

export default function App() {
  // const [path, setPath] = useState('/models/Spiderman.glb'); // Path del modelo 3D
  const [animacion, setAnimacion] = useState(0); // Animación reproduciendose del player
  // const [update, setUpdate] = useState(0); // Velocidad de laanimación reproduciendose

  const [xPos, setXPos] = useState(0); // Posición en horizontal del joystick o del input de entrada de movimiento
  const [yPos, setYPos] = useState(0); // Posición en vertical del joystick o del input de entrada de movimiento
  const [rotationBefore, setRotationBefore] = useState(0); // Rotación que tenía al moverse el player antes de parar de moverse
  const [rotation, setRotation] = useState(0); // Rotación que tiene al moverse el player moviéndose
  // const [scale, setScale] = useState([0, 0, 0]); // Escala que el player
  const [myId, setMyId] = useState(0); // ID actual del jugador, character, personaje, player, de la persona que se conecta al socket, etc.

  const onChangeId = (myId) => {
    console.log("Obteniendo mi Id")
    setMyId(myId)
  }


  return (
    <>
      <SocketManager onChangeId={setMyId} />
      <Canvas shadows camera={{ position: [8,8,8], fov: 100 }}>
      {/* <Canvas shadows > */}
        {/* <Camera position={deltaMovement} /> */}
        <Experience
          myId={myId}
          xPos={xPos} yPos={yPos}
          rotation={rotation}
          animation={animacion}
        />

      </Canvas>
      {/* <MenuAnimations handleNadaClick={handleNadaClick} handleBaile1Click={handleBaile1Click} handleBaile2Click={handleBaile2Click} handlePatadaClick={handlePatadaClick} handleMuerteClick={handleMuerteClick} handleTodoClick={handleTodoClick} handlePoseClick={handlePoseClick} /> */}
      <KeyboardButton setXPos={setXPos} setYPos={setYPos} setAnimacion={setAnimacion} />
      <JoystickButton setXPos={setXPos} setYPos={setYPos} />
    </>
  )
}
